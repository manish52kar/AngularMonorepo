const fs = require('fs-extra');
const path = require('path');
const concat = require('concat');

const tempBundleName = 'temp.bundle.js' ;
const bundleName = 'app.bundle.js' ;
const jsScrript = 'apps/core-login/script/mybundle.js' ;
const dir = 'dist/apps/core-login' ;

(async function build(){

    const files = [
        dir + '/runtime-es2015.js',
        dir + '/polyfills-es2015.js',
        dir + '/styles-es2015.js',
        dir + '/main-es2015.js'
    ];

    await fs.ensureDir(dir);
    await concat(files,dir + '/' + tempBundleName);

    var elementBundle = fs
                        .readFileSync(dir + '/' + tempBundleName)
                        .toString()
                        .replace('const $$ =','const $AB =')
                        .replace('class ${c','class $ABC {c');
    
    var mybundle = fs
                    .readFileSync(jsScrript)
                    .toString()
                    .replace('MY_BUNDLE',elementBundle);

    fs.writeFileSync(dir+'/'+bundleName,mybundle);
    fs.readdir(dir,(err,files)=>{
        if(err){
            throw err;
        }
        for(const file of files){
            if(file.indexOf(bundleName)=== -1){
                fs.unlink(path.join (dir,file),
                    err => {
                        if(err){
                            throw err;
                        }
                    }
                );
            }
        }
    })
})();