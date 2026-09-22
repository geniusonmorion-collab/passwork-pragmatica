// The checked-in bundle runs without Node. Rebuild only when the engine changes.
// Optional argument: a path to an existing esbuild/lib/main.js installation.
import {fileURLToPath,pathToFileURL} from 'node:url';
import {resolve} from 'node:path';
const root=fileURLToPath(new URL('../',import.meta.url));
const esbuild=process.argv[2]
  ? await import(pathToFileURL(resolve(process.argv[2])).href)
  : await import('esbuild');
await esbuild.build({
  entryPoints:[resolve(root,'source/live-dashboard/entry.ts')],
  outfile:resolve(root,'dist/live-dashboard.js'),
  bundle:true,format:'esm',target:'es2020',
  tsconfig:resolve(root,'source/live-dashboard/tsconfig.json'),
});
console.log('Built dist/live-dashboard.js');
