// Generated by CoffeeScript 1.7.1
(function() {
  var Metalsmith, assertDirEqual, coffee, exists, fs, path, resolve, rimraf;

  path = require('path');

  resolve = path.resolve;

  fs = require('fs');

  exists = fs.existsSync;

  rimraf = require('rimraf');

  assertDirEqual = require('assert-dir-equal');

  coffee = require('../../');

  Metalsmith = require('metalsmith');

  describe('metalsmith-coffee', function() {
    var expected, source, target;
    expected = source = target = void 0;
    return it('should compile coffee script', function(done) {
      source = resolve('./test/fixtures/basic');
      target = resolve('./test/fixtures/basic/build');
      expected = resolve('./test/fixtures/basic/expected');
      return Metalsmith(source).use(coffee()).build(function(err) {
        if (err) {
          return done(err);
        }
        assertDirEqual(expected, target);
        return done();
      });
    });
  });

}).call(this);
