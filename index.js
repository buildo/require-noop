var fs = require('fs');

function noop(module, filename) {
  module._compile('', filename);
};

var installed = false;

function install(options) {
  if (installed) {
    return;
  }

  options = options || {};

  if (!options.extensions) {
    options.extensions = [];
  }

  options.extensions.forEach(function(ext) {
    require.extensions[ext] = noop;
  });

  installed = true;
}

module.exports = install;