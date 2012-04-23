var mkdirp = require('mkdirp');
var fs = require('fs');
var path = require('path');
var zip = require('zip');


module.exports = function(file, outputPath, callback) {
  fs.readFile(file, function(err, buf) {
    if (err) throw err;

    var reader = zip.Reader(buf);
    var files = reader.toObject('utf-8');
    for (var name in files) {
      var filepath = path.join(outputPath, name);
      var dirname = path.dirname(filepath);
      mkdirp.sync(dirname);

      console.log('extracting: %s', filepath);
      fs.writeFileSync(filepath, files[name]);
    }

  });

  if (callback) callback();

};
