import Ember from 'ember';
import strfmt from 'ember-cli-gettext/utils/strfmt';

window.i18n = window.i18n || {};
var i18n = new window.i18n();

i18n._t = function (msgid, hash) {
  return strfmt(i18n.gettext(msgid), hash);
};

i18n._n = function (msgid, msgid_plural, hash={}) {
  Ember.assert('You must pass a count attribute to translate plural forms', 'undefined' !== typeof hash.count);
  return strfmt(i18n.ngettext(msgid, msgid_plural, hash.count), hash);
};

export default i18n;
