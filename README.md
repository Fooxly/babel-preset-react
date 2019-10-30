# Fooxly Babel Preset for React

The default [Babel](https://babeljs.io/) preset for [Fooxly](https://www.fooxly.com) projects  using React.

[![npm version](https://img.shields.io/npm/v/@fooxly/babel-preset-react.svg?style=flat)](https://www.npmjs.com/package/@fooxly/babel-preset-react)

## :rocket:&nbsp; Powered By

- [@fooxly/babel-preset](https://www.npmjs.com/package/@fooxly/babel-preset)
- [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react)
- [@wordpress/babel-plugin-import-jsx-pragma](https://www.npmjs.com/package/@wordpress/babel-plugin-import-jsx-pragma)

## :cloud:&nbsp; Installation

### using npm

```sh
npm install --save-dev @fooxly/babel-preset-react
```

### using yarn

```sh
yarn add -D @fooxly/babel-preset-react
```

## :triangular_ruler:&nbsp; Usage

### using .babelrc

```json
{
  "presets": ["@fooxly/babel-preset-react"]
}
```

### using package.json

```json
...
"babel": {
  "presets": ["@fooxly/babel-preset-react"]
}
...
```

### using React Native

Make sure to check out the README of the [Metro Babel preset](https://www.npmjs.com/package/metro-react-native-babel-preset) in order to use the latest available React Native technologies.

```json
{
  "presets": [
    "module:metro-react-native-babel-preset",
    "@fooxly/babel-preset-react"
  ]
}
```
