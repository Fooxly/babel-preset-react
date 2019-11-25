var basePreset = require('@fooxly/babel-preset')
var reactPreset = require('@babel/preset-react')
var importJSX = require('@wordpress/babel-plugin-import-jsx-pragma')

module.exports = function (api, opts) {
  api.cache(true)
  return {
    presets: [[basePreset, opts], reactPreset],
    plugins: [importJSX]
  }
}
