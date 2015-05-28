var expect = require('expect')
var requireNoop = require('../index.js');

describe('require-noop', function() {
  it('should noopify required assets', function() {
    expect(function() {
      require('./test.gif');
    }).toThrow();

    requireNoop({
      extensions: ['.gif']
    });

    expect(function() {
      require('./test.gif');
    }).toNotThrow();
  });
});