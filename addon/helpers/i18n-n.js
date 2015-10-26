import Ember from 'ember';
import strfmt from '../utils/strfmt';

export function i18nN(params, hash) {
  Ember.I18n = Ember.I18n || window.i18n();

  Ember.I18n._n = function (msgid, msgid_plural, hash={}) {
    Ember.assert('You must pass a count attribute to translate plural forms', 'undefined' !== typeof hash.count);
    return strfmt(Ember.I18n.ngettext(msgid, msgid_plural, hash.count), hash);
  };

  return new Ember.Handlebars.SafeString(Ember.I18n._n(...params, hash));
}

export default Ember.Helper.helper(i18nN);
