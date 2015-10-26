import Ember from 'ember';
import strfmt from '../utils/strfmt';

export function i18nT(params) {
  Ember.I18n = Ember.I18n || window.i18n();

  Ember.I18n._t = function (msgid, hash) {
    return strfmt(Ember.I18n.gettext(msgid), hash);
  };

  return new Ember.Handlebars.SafeString(Ember.I18n._t(...params));
}

export default Ember.Helper.helper(i18nT);
