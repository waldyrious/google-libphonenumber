
/**
 * Module dependencies.
 */

var libphonenumber = require('..');

/**
 * Test `exports`.
 */

describe('Exports', function () {
  it('should export all provided modules', function() {
    Object.keys(libphonenumber).should.eql([
      'NumberFormat',
      'PhoneMetadata',
      'PhoneMetadataCollection',
      'PhoneNumberDesc',
      'PhoneNumber',
      'metadata',
      'Error',
      'PhoneNumberFormat',
      'PhoneNumberType',
      'PhoneNumberUtil',
      'phoneUtil'
      ]);
  });

  it('should export an instance of `PhoneNumberUtil`', function() {
    libphonenumber.phoneUtil.should.be.instanceOf(libphonenumber.PhoneNumberUtil);
  });
});
