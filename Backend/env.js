var fs = require('fs');

function copyFile(source, target) {
  var rd = fs.createReadStream(source);
  var wr = fs.createWriteStream(target);
  return new Promise(function (resolve, reject) {
    rd.on('error', reject);
    wr.on('error', reject);
    wr.on('finish', resolve);
    rd.pipe(wr);
  }).catch(function (error) {
    rd.destroy();
    wr.end();
    throw error;
  });
}

if (process.argv[2] === '--server') {
  copyFile("./env/server.js", "./app/config/index.js")
  console.log("Server ENV set up success.")
}else if(process.argv[2] === '--local'){
  copyFile("./env/local.js", "./app/config/index.js")
  console.log("Local ENV set up success.")
}else{
    console.error("Error. npm run --local or npm run --server")
}
