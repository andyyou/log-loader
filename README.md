# log-loader

Loader for webpack to dev and `console.log` compile result during development.

### Install

```bash
$ npm i log-loader -D
```

### Usage

Add loader to `module.rules`

```js
const path = require('path');

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'log-loader',
            options: {
              startMessage: 'After resolve-url-loader',
            }
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ],
      },
    ]
  }
}
```

### Options

|option|description|type|default|
|---|---|---|---|---|
|beforeMessage|show message before console result|string|`''`|
|afterMessage|show message after console result|string|`''`|


### Testing script

```js
// test.js
const webpack = require('webpack');
const config = require('./webpack.config');

const compiler = webpack(config);
compiler.run((err, stats) => {
  console.log('Compiled');
});
```

```bash
$ node test.js
```
