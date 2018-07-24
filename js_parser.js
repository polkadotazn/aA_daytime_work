 // var json = require('./data.json');
 //
 // console.log(json);

//  function processFile(inputFile) {
//     var fs = require('fs'),
//         readline = require('readline'),
//         instream = fs.createReadStream(inputFile),
//         outstream = new (require('stream'))(),
//         rl = readline.createInterface(instream, outstream);
//
//     rl.on('line', function (line) {
//         console.log(line);
//     });
//
//     rl.on('close', function (line) {
//         console.log(line);
//         console.log('done reading file.');
//     });
// }

const openFile = () => {
  let newHash = {};
  var fs = require('fs');
  var file;
  fs.readFile('data.json', 'utf8', (err, data) => {
    file = data;
    newHash = makeObject(file);
    replaceGeo(newHash);
  });
};

const makeObject = (file) => {
  let newHash = {};
  file.split('\n').forEach(line => {
    if (line) {
      let parsedLine = JSON.parse(line);
      newHash[parsedLine["uuid"]] = parsedLine["payload"];
    }
  });
  return newHash;
};

function replaceGeo(hash) {
  for (let key in hash) {
    if (key.includes("geo")) {
      hash[key] = "redacted";
    } else if (typeof hash[key] === 'object') {
      hash[key] = replaceGeo(hash[key]);
    } else if (typeof hash[key] === 'string' && hash[key][0] === "{") {
      hash[key] = replaceGeo(JSON.parse(hash[key]));
    }
  }
  // console.log(hash);
  //
  // if (hash["crawl"]) {
  //   for (let pair in hash) {
  //     if (pair.includes("geo")) {
  //       hash[pair] = "redacted";
  //     }
  //   }
  // } else {
  //   var payloadArr = Object.keys(hash).map(e => hash[e]);
  //   payloadArr.forEach(location => {
  //     let keys = Object.keys(location);
  //     keys.forEach(attr => {
  //       if (attr.includes("geo")) {
  //         location[attr] = "redacted";
  //       }
  //       console.log(location[attr]);
  //       if (typeof location[attr] === 'string' && location[attr].includes("geo")) {
  //         if (location[attr][0] === "{") {
  //           location[attr] = replaceGeo(JSON.parse(location[attr]));
  //         }
  //       }
  //     });
  //   });
  // }
  // console.log(hash);
  return hash;
}

openFile();
