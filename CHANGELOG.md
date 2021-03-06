<!-- markdownlint-disable -->
# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.0] - 2019-11-25
### Added
- [CI workflow](https://github.com/Fooxly/babel-preset-react/actions?query=workflow%3Atests)

### Changed
- Updated dependencies
- Documentation for supporting React Native
- Passing through all options to [@fooxly/babel-preset] (to support `noEnv`, necessary for React Native)

## [2.1.0] - 2019-11-04
### Added
- More keywords to [package.json]

### Changed
- Updated [@fooxly/babel-preset] dependency (now supporting [Export From](https://babeljs.io/docs/en/next/babel-plugin-proposal-export-default-from.html), for more information check the preset itself)

### Fixed
- [.npmignore](.npmignore) to support refactored tests

## [2.0.0] - 2019-11-03
### Added
- More keywords to [package.json]
- Caching preset for better performance
- Our support section to the [README.md]

### Changed
- Refactored tests
- Updated [@fooxly/babel-preset] dependency (now supporting [Async/Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) & [Class Properties](https://javascript.info/class#class-properties), for more information check the preset itself)

## [1.0.1] - 2019-10-30
### Changed
- Updated [@fooxly/babel-preset] dependency

## [1.0.0] - 2019-10-30
### Added
- The default [Babel] preset [Fooxly] uses for React projects

[README.md]: README.md
[package.json]: package.json
[Babel]: https://babeljs.io/
[Fooxly]: https://www.fooxly.com/
[@fooxly/babel-preset]: https://www.npmjs.com/package/@fooxly/babel-preset

[3.0.0]: https://github.com/Fooxly/babel-preset-react/compare/v2.1.0...v3.0.0
[2.1.0]: https://github.com/Fooxly/babel-preset-react/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/Fooxly/babel-preset-react/compare/v1.0.2...v2.0.0
[1.0.1]: https://github.com/Fooxly/babel-preset-react/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/Fooxly/babel-preset-react/releases/tag/v1.0.0
