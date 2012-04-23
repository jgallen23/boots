var aug = require('aug');
var fs = require('fs');
var request = require('request');

var tmpfile = '/tmp/bs.zip';
var url = 'http://bootstrap.herokuapp.com';

var defaults = {
  js: [],
  css: [],
  vars: [],
  imgs: ['glyphicons-halflings.png','glyphicons-halflings-white.png']
};

module.exports = function(config, callback) {

  config = aug({}, defaults, config);
  for (var key in config) {
    config[key] = JSON.stringify(config[key]);
  }

  var stream = fs.createWriteStream(tmpfile);
  stream.on('close', function() {
    if (callback) callback(null, tmpfile);
  });
  request({
    url: url,
    method: 'POST',
    form: config
  }).pipe(stream);
};

