import Ember from 'ember';

export function i18nT(params, hash) {
  return new Ember.Handlebars.SafeString(Ember.I18n._t(...params, hash));

}

export default Ember.Helper.helper(i18nT);
