/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-gettext',

  included: function (app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/gettext.js/dist/gettext.js');
  }

};
