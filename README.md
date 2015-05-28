[![Build Status](https://travis-ci.org/buildo/require-noop.svg)](https://travis-ci.org/buildo/require-noop)

# require-noop
Inhibits `require` on selected extensions.

Useful in isomorphic setups, where - for instance - we want `require('asset.png')` to use a webpack loader on the client, but result in a noop on the server.

## Installation

```
npm install require-noop
````

## Usage

```js
require('require-noop')({
  extensions: ['.png']
});
```
