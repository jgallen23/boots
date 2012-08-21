//scrapes all options from bootstrap download page

var jsdom = require('jsdom');
var config = require('./config');
var path = require('path');
var fs = require('fs');

var url = 'http://twitter.github.com/bootstrap/customize.html';



var scrape = function(callback) {
  jsdom.env(url, [
    'http://code.jquery.com/jquery-1.7.2.min.js'
  ],function(errors, window) {
    var $ = window.$;

    var opts = {
      js: [],
      css: []
      //vars: [],
      //imgs: ['glyphicons-halflings.png', 'glyphicons-halflings-white.png']
    };

    var cssInputs = $('#components input');
    cssInputs.each(function() {
      var val = $(this).val();
      opts.css.push(val);
    });

    var jsInputs = $('#plugins input');
    jsInputs.each(function() {
      var val = $(this).val();
      opts.js.push(val);
    });

    callback(opts);

  });
};

module.exports = scrape;

if (!module.parent) {

  scrape(function(components) {
    var json = JSON.stringify(components);
    var dataFile = path.join(__dirname, '../data/data.json');
    fs.writeFile(dataFile, json, function() {
      console.log('Done');
    });
  })
}
