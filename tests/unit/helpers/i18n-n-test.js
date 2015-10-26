import { i18nN } from '../../../helpers/i18n-n';
import { module, test } from 'qunit';

module('Unit | Helper | i18n n');

test('It should handle singular forms', function(assert) {
  var result = i18nN(["Singular", "Plural"], {count: 1});
  assert.equal(result.string, "Singular");
});

test('It should handle plural forms', function(assert) {
  var result = i18nN(["Singular", "Plural"], {count: 2});
  assert.equal(result.string, "Plural");
});
