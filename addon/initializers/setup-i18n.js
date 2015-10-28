import Ember from 'ember';
import gettext from 'ember-cli-gettext/gettext';

export function initialize (registry, application) {

  // Registration
  application.register('service:gettext', gettext, { instantiate: false });

}

export default {
  name: 'gettext',
  initialize: initialize
};
