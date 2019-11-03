# Fooxly Babel Preset for React

The default [Babel](https://babeljs.io/) preset for [Fooxly](https://www.fooxly.com) projects  using React.

[![npm version](https://img.shields.io/npm/v/@fooxly/babel-preset-react.svg?style=flat)](https://www.npmjs.com/package/@fooxly/babel-preset-react)

## :rocket:&nbsp; Powered By

- [@fooxly/babel-preset](https://www.npmjs.com/package/@fooxly/babel-preset)
- [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react)
- [@wordpress/babel-plugin-import-jsx-pragma](https://www.npmjs.com/package/@wordpress/babel-plugin-import-jsx-pragma)

## ❤&nbsp; Support us

> About **40%** of your donation goes to one of the charities we support. For further information or questions please visit [our website](https://www.fooxly.com/charity) or contact us via [charity@fooxly.com](mailto:charity@fooxly.com).

<p>
  <a title="BuyMeACoffee" href="https://www.buymeacoffee.com/fooxly">
    <img src="https://developer.fooxly.com/general/assets/images/buymeacoffee.png" alt="BuyMeACoffee" width="25%" style="max-width: 180px" />
  </a>&nbsp;&nbsp;
  <a title="Patreon" href="https://www.patreon.com/fooxly">
    <img src="https://developer.fooxly.com/general/assets/images/patreon.png" alt="Patreon" width="25%" style="max-width: 180px"/>
  </a>&nbsp;&nbsp;
  <a title="PayPal" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3GEYSYZFXV9GE">
    <img src="https://developer.fooxly.com/general/assets/images/paypal.png" alt="PayPal" width="25%" style="max-width: 180px" />
  </a>
</p>

<br/>

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
