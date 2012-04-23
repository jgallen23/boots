var download = require('./download');
var extract = require('./extract');
var config = require('./config');


module.exports = function(config, outputPath, callback) {

  download(config, function(err, file) {
    extract(file, outputPath, function() {
      if (callback) callback();
    });
  });
};
