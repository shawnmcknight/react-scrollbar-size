# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [5.0.0] - 2022-05-07

### Breaking changes

- Browser targets have been changed to the default targets of [browserslist](https://github.com/browserslist/browserslist#full-list) (`> 0.5%, last 2 versions, Firefox ESR, not dead`) plus `not ie 11`. Browsers outside of that range may be supported, but are not guaranteed. ([#705](https://github.com/shawnmcknight/react-scrollbar-size/pull/705))

### Added

- Disable dependabot ([#655](https://github.com/shawnmcknight/react-scrollbar-size/pull/655)) and enable renovate ([#656](https://github.com/shawnmcknight/react-scrollbar-size/pull/656))
- Add support for React 18 ([#693](https://github.com/shawnmcknight/react-scrollbar-size/pull/693))
- Improved CHANGELOG format ([#704](https://github.com/shawnmcknight/react-scrollbar-size/pull/704))

### Fixed

- Fix use of `act` in test scripts ([#598](https://github.com/shawnmcknight/react-scrollbar-size/pull/598))
- Bypass `babel` for example launches to eliminate warnings emitted by parcel ([#705](https://github.com/shawnmcknight/react-scrollbar-size/pull/705))
- Fix launch configuration for vscode debugging ([#705](https://github.com/shawnmcknight/react-scrollbar-size/pull/705))

## [4.0.0] - 2021-05-15

### Breaking changes

- Deprecated the legacy component syntax in favor of the custom hook syntax introduced in [#263](https://github.com/shawnmcknight/react-scrollbar-size/pull/263). The custom hook is now the default export from the library. See the [README](https://github.com/shawnmcknight/react-scrollbar-size/blob/main/README.md) for information on how to use the custom hook syntax. ([#309](https://github.com/shawnmcknight/react-scrollbar-size/pull/309))

## [4.0.0-rc.0] - 2021-04-04

### Breaking changes

- Deprecated the legacy component syntax in favor of the custom hook syntax introduced in [#263](https://github.com/shawnmcknight/react-scrollbar-size/pull/263). The custom hook is now the default export from the library. See the [README](https://github.com/shawnmcknight/react-scrollbar-size/blob/main/README.md) for information on how to use the custom hook syntax. ([#309](https://github.com/shawnmcknight/react-scrollbar-size/pull/309))

## [3.2.0] - 2021-03-11

### Added

- Updated library to export a custom hook to provide the same functionality as the component syntax. This is much easier to use as a consumer. ([#263](https://github.com/shawnmcknight/react-scrollbar-size/pull/263))
  - The component syntax is now considered legacy and will be deprecated in a future major release.

## [3.1.1] - 2021-03-06

### Added

- Update links to reference new repository location and main branch ([#260](https://github.com/shawnmcknight/react-scrollbar-size/pull/260))
- Change from `master` branch to `main` branch

## [3.1.0] - 2020-11-07

### Added

- Update dependency ranges to support react `^17.0.1` ([#140](https://github.com/shawnmcknight/react-scrollbar-size/pull/140))

## [3.0.1] - 2020-07-25

### Added

- Internalized `debounce` function ([#30](https://github.com/shawnmcknight/react-scrollbar-size/pull/30))
  - Repo now has zero production dependencies!

## [3.0.0] - 2020-07-18

### Breaking changes

- Library has been completely rewritten in TypeScript, complies with React >=16.8, and all tooling has been updated ([#11](https://github.com/shawnmcknight/react-scrollbar-size/pull/11))
  - The API has been changed significantly; there are no longer separate `onLoad` and `onChange` props in favor of a single `onChange` prop. The callback for `onChange` returns `height` and `width` instead of `scrollbarHeight` and `scrollbarWidth`.

## [3.0.0-rc.0] - 2020-07-18

### Breaking changes

- Library has been completely rewritten in TypeScript, complies with React >=16.8, and all tooling has been updated ([#11](https://github.com/shawnmcknight/react-scrollbar-size/pull/11))
  - The API has been changed significantly; there are no longer separate `onLoad` and `onChange` props in favor of a single `onChange` prop. The callback for `onChange` returns `height` and `width` instead of `scrollbarHeight` and `scrollbarWidth`.

## [2.1.0] - 2018-01-31

### Fixed

- Lodash as a peerDependency was causing missing peerDependency errors. Lodash peerDep replaced with stifle dep (#7)

### Added

- Bump several dependency versions
- Configure npm to not generate package-lock file

## [2.0.0] - 2017-05-30

### Breaking changes

- Make react a peerDependency to avoid running module duplication (#3)
- Make lodash a peerDependency due to its common use and avoid inflating build size unnecessarily

## [1.0.2] - 2017-05-28

### Added

- Remove separate lodash modules in favor of direct import of functions
- Add support for prettier and update libraries to conform to rules
- Update all dependencies to latest version and make updates to conform to API changes
- Update all devDependencies to latest version and make updates to conform to API changes
- Eliminate usage of lodash isEqual in favor of separate instance variables
- Updated test suite to check for returned values rather than simply calling

## [1.0.1] - 2017-04-26

### Fixed

- Cancel throttled events when unmounting component

## [1.0.0] - 2017-04-17

### Added

- Add unit tests through mocha/chai/enzyme to reach 100% code coverage
- Add code coverage tooling through istanbul/nyc
- Update to React separate prop-types package
- Update all dependencies to latest versions
- Correct instruction link in README

## 0.1.0 - 2017-03-25

### Added

- Initial creation of this repository! Thanks for using it!

[unreleased]: https://github.com/shawnmcknight/react-scrollbar-size/compare/5.0.0...HEAD
[5.0.0]: https://github.com/shawnmcknight/react-scrollbar-size/compare/4.0.0...5.0.0
[4.0.0]: https://github.com/shawnmcknight/react-scrollbar-size/compare/4.0.0-rc.0...4.0.0
[4.0.0-rc.0]: https://github.com/shawnmcknight/react-scrollbar-size/compare/3.2.0...4.0.0-rc.0
[3.2.0]: https://github.com/shawnmcknight/react-scrollbar-size/compare/3.1.1...3.2.0
[3.1.1]: https://github.com/shawnmcknight/react-scrollbar-size/compare/3.1.0...3.1.1
[3.1.0]: https://github.com/shawnmcknight/react-scrollbar-size/compare/3.0.1...3.1.0
[3.0.1]: https://github.com/shawnmcknight/react-scrollbar-size/compare/3.0.0...3.0.1
[3.0.0]: https://github.com/shawnmcknight/react-scrollbar-size/compare/3.0.0-rc.0...3.0.0
[3.0.0-rc.0]: https://github.com/shawnmcknight/react-scrollbar-size/compare/2.1.0...3.0.0-rc.0
[2.1.0]: https://github.com/shawnmcknight/react-scrollbar-size/compare/2.0.0...2.1.0
[2.0.0]: https://github.com/shawnmcknight/react-scrollbar-size/compare/1.0.2...2.0.0
[1.0.2]: https://github.com/shawnmcknight/react-scrollbar-size/compare/1.0.1...1.0.2
[1.0.1]: https://github.com/shawnmcknight/react-scrollbar-size/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/shawnmcknight/react-scrollbar-size/releases/tag/1.0.0
