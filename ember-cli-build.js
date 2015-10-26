/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
  });

  app.import(app.bowerDirectory+ '/gettext.js/dist/gettext.js');

  return app.toTree();
};
