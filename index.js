var basePreset = require('@fooxly/babel-preset')
var reactPreset = require('@babel/preset-react')
var importJSX = require('@wordpress/babel-plugin-import-jsx-pragma')

module.exports = function (context, options = {}) {
  return {
    presets: [basePreset, reactPreset],
    plugins: [importJSX]
  }
}
