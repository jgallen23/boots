var mkdirp = require('mkdirp');
var fs = require('fs');
var path = require('path');
var zipfile = require('zipfile');


module.exports = function(file, outputPath, callback) {
  var zip = new zipfile.ZipFile(file);

  zip.names.forEach(function(name) {

    var filepath = path.join(outputPath, name);
    var dirname = path.dirname(filepath);
    mkdirp.sync(dirname);
    console.log('extracting: %s', filepath);
    var f = fs.createWriteStream(filepath);
    f.write(zip.readFileSync(name));
    f.end();
  });

  if (callback) callback();

};
