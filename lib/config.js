var fs = require('fs');

exports.read = function(file, callback) {

  fs.readFile(file, 'utf8', function(err, str) {
    if (err) throw err;

    var config = JSON.parse(str);

    if (callback) callback(config);
  });
};

exports.write = function(file, opts, callback) {

  var contents = JSON.stringify(opts, null, 2);

  fs.writeFile(file, contents, function(err) {
    if (err) throw err;

    if (callback) callback();
  });

};
