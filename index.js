
'use strict';

const babel = require('mako-babel')
const buffer = require('mako-buffer')
const defaults = require('defaults')
const output = require('mako-output')
const stat = require('mako-stat')
const write = require('mako-write')


module.exports = function (options) {
  const config = defaults(options, {
    extensions: 'js',
    output: 'lib',
    sourceMaps: true
  })

  return function (mako) {
    mako.use(
      stat(config.extensions),
      buffer(config.extensions),
      output(config.extensions, { dir: config.output }),
      write(config.extensions),
      babel({ extensions: config.extensions, sourceMaps: true })
    )
  };
};
