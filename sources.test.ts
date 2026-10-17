import {test, expect} from 'bun:test';
import {mkdtemp, mkdir, writeFile, readFile, rm, symlink} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {sync} from './sync';
import {loadRawSources, latestSources, buildBookmarks, resolveSource, loadAssetFiles} from './sources';
import {plainText, searchDocuments, type SearchDocument} from './search';

test('capture preserves revisions and removed upstream notes, with a non-mutating preview', async()=>{
 const root=await mkdtemp(join(tmpdir(),'wiki-capture-'));
 try {
  const brain=join(root,'brain'),raw=join(root,'raw');
  await mkdir(join(brain,'bookmarks'),{recursive:true}); await mkdir(join(raw,'bookmarks'),{recursive:true});
  await writeFile(join(raw,'bookmarks','Tools.md'),'# Original\n- [Old](https://x.com/a/status/11) — first');
  await writeFile(join(brain,'bookmarks','Tools.md'),'# New\n- [New](https://x.com/b/status/22) — second');
  const opts={brainPath:brain,rawDir:raw,folders:{bookmarks:'bookmarks'}};
  const preview=await sync({...opts,preview:true}); expect(preview.changes).toHaveLength(1);
  expect((await loadRawSources(raw))).toHaveLength(1);
  const result=await sync(opts); expect(result.errors).toEqual([]); expect(result.changes[0].kind).toBe('revision');
  expect(await readFile(join(raw,'bookmarks','Tools.md'),'utf8')).toContain('Original');
  expect((await sync(opts)).changes).toEqual([]);
  await rm(join(raw,'.capture-manifest.json'));
  expect((await sync({...opts,preview:true})).changes).toEqual([]);
  const sources=await loadRawSources(raw); expect(sources).toHaveLength(2);
  expect(latestSources(sources)[0].content).toContain('New');
  expect(resolveSource('bookmarks/Tools.md',sources)?.content).toContain('Original');
  expect(buildBookmarks(sources)[0].identifiers).toEqual(['22']);
  await rm(join(brain,'bookmarks','Tools.md')); expect((await sync(opts)).errors.length).toBe(1);
  expect(await loadRawSources(raw)).toHaveLength(2);
  await symlink('/etc/hosts',join(raw,'escape.md')); expect(await loadRawSources(raw)).toHaveLength(2);
 } finally {await rm(root,{recursive:true,force:true});}
});

test('bookmark parsing retains links with parentheses, annotations and stable IDs',()=>{
 const source:any={id:'source',path:'bookmarks/Tools.md',logicalPath:'bookmarks/Tools.md',title:'Tools',capturedAt:null,content:'- [Example](https://example.org/foo_(bar)) — **Useful** [post](https://x.com/a/status/123)'};
 const [b]=buildBookmarks([source]);expect(b.url).toBe('https://example.org/foo_(bar)');expect(b.annotation).toBe('Useful post');
 expect(b.identifiers).toEqual(['123']);
 expect(buildBookmarks([{...source,content:source.content+' new annotation'}])[0].id).toBe(b.id);
 const bare=buildBookmarks([{...source,content:'https://x.com/designer/status/456\n\nhttps://example.org/components'}]);
 expect(bare).toHaveLength(2);
 expect(bare[0].title).toBe('X post by @designer');
 expect(bare[0].identifiers).toEqual(['456']);
 expect(bare[1].title).toBe('example.org/components');
});

test('captured images resolve to the latest version without replacing originals or following links',async()=>{
 const root=await mkdtemp(join(tmpdir(),'wiki-assets-'));
 try {
  await mkdir(join(root,'assets'),{recursive:true});
  await mkdir(join(root,'snapshots/123-abcdef/assets/nested'),{recursive:true});
  await writeFile(join(root,'assets/photo.png'),'original image');
  await writeFile(join(root,'snapshots/123-abcdef/assets/photo.png'),'revised image');
  await writeFile(join(root,'snapshots/123-abcdef/assets/nested/chart.png'),'new chart');
  await symlink('/etc/hosts',join(root,'assets/escape.png'));
  const assets=await loadAssetFiles(root);
  expect(await readFile(assets.get('photo.png')!,'utf8')).toBe('revised image');
  expect(await readFile(join(root,'assets/photo.png'),'utf8')).toBe('original image');
  expect(assets.has('nested/chart.png')).toBe(true);
  expect(assets.has('escape.png')).toBe(false);
  expect(assets.has('../photo.png')).toBe(false);
 } finally {await rm(root,{recursive:true,force:true});}
});

test('search ranks exact bookmark titles and IDs, returns clean snippets and section links',()=>{
 const docs:SearchDocument[]=[{slug:'p',title:'Notes',type:'topic',domain:'dev',category:'topics',tags:[],content:'agentic note-taking and tools',href:'/page/p',sections:[{id:'tools',title:'Tools',content:'agentic note-taking and tools'}]},
 {slug:'b',title:'Agentic note-taking',type:'bookmark',domain:'dev',category:'AI',tags:[],content:'A useful saved practice.',href:'/bookmarks/b',identifiers:['123']}];
 expect(searchDocuments(docs,'agentic note-taking')[0].slug).toBe('b');
 expect(searchDocuments(docs,'123')[0].slug).toBe('b');
 expect(searchDocuments(docs,'agentic note-taking',{kind:'page'})[0].href).toBe('/page/p#tools');
 expect(searchDocuments(docs,'zzqv-no-such-bookmark-9817')).toEqual([]);
 expect(plainText('## Heading\n**Bold** [[Some_Page|Some page]] [link](https://example.org)')).toBe('Heading Bold Some page link');
});

test('one-step graph scope does not cascade through edge order or catalog hubs',async()=>{
 const {graphNeighborhood}=await import('./graph');
 const nodes=['a','b','c','index'].map(id=>({id,type:id==='index'?'index':'topic',domain:'dev'}));
 const edges=[{source:'a',target:'b'},{source:'b',target:'c'},{source:'a',target:'index'},{source:'index',target:'c'}];
 expect(graphNeighborhood(nodes,edges,{focus:'a',hops:1}).nodes.map(n=>n.id)).toEqual(['a','b']);
 expect(graphNeighborhood(nodes,[...edges].reverse(),{focus:'a',hops:1}).nodes.map(n=>n.id)).toEqual(['a','b']);
 expect(graphNeighborhood(nodes,edges,{focus:'a',hops:2}).nodes.map(n=>n.id)).toEqual(['a','b','c']);
});

test('bookmark parsing reads distilled bold-title entries without changing existing IDs',()=>{
 const base='- [Old](https://example.org/old) — Existing entry';
 const distilled=['## Useful X bookmarks distilled — 2026-10-11',
  '- **ipatool for App Store metadata** — Search, version metadata and package downloads.',
  '- **Possible use:** Reference for iOS tooling.',
  '- **Evidence:** [official repository](https://github.com/majd/ipatool)',
  '- **Discovery:** [X source #11](https://x.com/dev_majd/status/2108675420426031455). Reviewed 2026-10-11.',
  '- **Paper-first tutoring** — Work on paper first.',
  '- **Evidence:** Source workflow anecdote.',
  '- **Discovery:** [X source #38](https://x.com/IterIntellectus/status/2108956765153075200). Reviewed 2026-10-11.'].join('\n');
 const source:any={id:'source',path:'bookmarks/Tools.md',logicalPath:'bookmarks/Tools.md',title:'Tools',capturedAt:null,content:base};
 const before=buildBookmarks([source]);
 const after=buildBookmarks([{...source,content:base+'\n\n'+distilled}]);
 expect(after).toHaveLength(3);
 expect(after[0].id).toBe(before[0].id);
 expect(after[1].title).toBe('ipatool for App Store metadata');
 expect(after[1].url).toBe('https://github.com/majd/ipatool');
 expect(after[1].annotation).toBe('Search, version metadata and package downloads.');
 expect(after[1].identifiers).toEqual(['2108675420426031455']);
 expect(after[2].url).toBe('https://x.com/IterIntellectus/status/2108956765153075200');
});
