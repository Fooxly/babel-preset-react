const { transformSync } = require('@babel/core')
const preset = require('..')

const source = require('./source')
const snapshot = require('./snapshot')

const { code } = transformSync(source, {
	babelrc: false,
	presets: [preset]
})

if (code !== snapshot) {
  console.error('\x1b[31mError: \x1b[37mInvalid Babel transform')
  console.error('-------------------------------------------------')
  console.error(`\x1b[33mExpected:\x1b[37m\n-------------------------------------------------\n${snapshot}\n-------------------------------------------------`)
  console.error(`\x1b[33mRecieved:\x1b[37m\n-------------------------------------------------\n${code}\n-------------------------------------------------`)
  return process.exit(1)
}

if (typeof preset !== 'function') {
  console.error('Error: Invalid preset export')
  console.error('Expected: function')
  console.error('Recieved:', typeof preset)
}

console.log('Success!')
process.exit(0)
