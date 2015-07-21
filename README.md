# miel-loader
Miel loader module for webpack

See [Miel](https://github.com/collardeau/miel) repo for more information on Miel syntax.

## Install
```javascript
npm install miel-loader --save-dev
```
or simply
```javascript
npm i miel-loader -D
```

## Usage

```javascript
// in webpack.config.js

module: {
  loaders: [
    { test: /\.js$/, loader: "miel-loader" }
  ]
}

```
or in combination with Babel (order matters):

```javascript
module: {
  loaders: [
    { test: /\.js$/, loaders: ['babel', 'miel'], exclude: /node_modules/}
  ]
}

```