# @dominicbarnes/mako-babel-precompile

> My personal [mako][mako] plugin bundle for precompiling ES6 modules using
> [babel][babel] before publishing to npm.

[![npm version][npm-badge]][npm]
[![npm dependencies][david-badge]][david]
[![npm dev dependencies][david-dev-badge]][david-dev]

## Usage

This plugin is for precompiling ES6 code prior to publishing on npm. Thus, it
generally does a 1:1 transformation of `src/*.js` into `lib/*.js`.

## API

### precompile(options)

Available configuration `options`:
 - `extensions` the input file extensions to process (default: "js")
 - `output` the output directory (default: "lib")
 - `sourceMaps` include sourcemaps on the output files (inline)


[babel]: https://babeljs.io/
[david-badge]: https://img.shields.io/david/dominicbarnes/mako-babel-precompile.svg
[david-dev-badge]: https://img.shields.io/david/dev/dominicbarnes/mako-babel-precompile.svg
[david-dev]: https://david-dm.org/dominicbarnes/mako-babel-precompile#info=devDependencies
[david]: https://david-dm.org/dominicbarnes/mako-babel-precompile
[mako]: https://github.com/makojs/core
[npm-badge]: https://img.shields.io/npm/v/@dominicbarnes/mako-babel-precompile.svg
[npm]: https://www.npmjs.com/package/@dominicbarnes/mako-babel-precompile
