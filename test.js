const assert = require('assert');
const UrlValidator = require('./index');

// Test 1: adds http:// if protocol is missing
assert.strictEqual(
  UrlValidator.getValidUrl('example.com'),
  'http://example.com',
  'should add http:// to example.com'
);

// Test 2: leaves https:// unchanged
assert.strictEqual(
  UrlValidator.getValidUrl('https://google.com'),
  'https://google.com',
  'should leave https:// unchanged'
);

// Test 3: leaves http:// unchanged
assert.strictEqual(
  UrlValidator.getValidUrl('http://site.org'),
  'http://site.org',
  'should leave http:// unchanged'
);

// Test 4: works with uppercase protocol
assert.strictEqual(
  UrlValidator.getValidUrl('HTTPS://site.com'),
  'HTTPS://site.com',
  'should leave HTTPS:// unchanged'
);

console.log('All tests passed ✅');
