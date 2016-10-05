'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.concat_in_order = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default_options.js');
    var expected = grunt.file.read('test/expected/default_options.js');
    test.equal(actual, expected, 'should concatenate files respecting file order');

    test.done();
  },
  filebased_options : function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/filebased_options.js');
    var expected = grunt.file.read('test/expected/filebased_options.js');
    test.equal(actual, expected, 'should include files automatically when filebased');

    var actualDependencies = grunt.file.read('tmp/ordered_dependencies.json');
    var expectedDependencies = grunt.file.read('test/expected/ordered_dependencies.json');
    test.equal(actualDependencies, expectedDependencies, 'should write the dependencies in order');

    test.done();
  }
};
