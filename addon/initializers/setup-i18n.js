import gettext from 'ember-cli-gettext/gettext';

export function initialize (application) {
  application.register('service:gettext', gettext, { instantiate: false });
}

export default {
  name: 'gettext',
  initialize
};
