import Ember from 'ember';
import strfmt from 'ember-cli-gettext/utils/strfmt';

export function initialize (registry, application) {
  window.i18n = window.i18n || {};
  Ember.I18n = new window.i18n();

  Ember.I18n._t = function (msgid, hash) {
    return strfmt(Ember.I18n.gettext(msgid), hash);
  };

  Ember.I18n._n = function (msgid, msgid_plural, hash={}) {
    Ember.assert('You must pass a count attribute to translate plural forms', 'undefined' !== typeof hash.count);
    return strfmt(Ember.I18n.ngettext(msgid, msgid_plural, hash.count), hash);
  };

  application.register('utils:i18n', Ember.I18n, { instantiate: false });
}

export default {
  name: 'i18n-utils',
  initialize: initialize
};
