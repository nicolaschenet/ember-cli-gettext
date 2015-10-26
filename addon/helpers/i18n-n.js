import Ember from 'ember';

export function i18nN(params, hash) {
  return new Ember.Handlebars.SafeString(Ember.I18n._n(...params, hash));
}

export default Ember.Helper.helper(i18nN);
