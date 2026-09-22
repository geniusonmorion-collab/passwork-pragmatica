const fs=require('node:fs'), path=require('node:path');
const esbuild=require(process.argv[2]);
const root=path.resolve(__dirname,'..');
const source=path.join(root,'source/raw/_next/static/immutable/chunks');
const out=path.join(root,'source/reference');
fs.mkdirSync(out,{recursive:true});
for(const name of fs.readdirSync(source)){
 if(!/\.(js|css)$/.test(name))continue;
 const loader=name.endsWith('.css')?'css':'js';
 fs.writeFileSync(path.join(out,name),esbuild.transformSync(fs.readFileSync(path.join(source,name),'utf8'),{loader,minify:false,legalComments:'inline'}).code);
}
console.log('Readable reference files:',fs.readdirSync(out).length);
