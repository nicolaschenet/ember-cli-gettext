import Ember from 'ember';
import gettext from 'ember-cli-gettext/gettext';

export function getText(params, hash) {
  return new Ember.String.htmlSafe(gettext._t(...params, hash));
}

export default Ember.Helper.helper(getText);
