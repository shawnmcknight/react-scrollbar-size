## HEAD

## 3.1.0
###### _2020_11_07_
- Update dependency ranges to support react `^17.0.1` ([#140](https://github.com/STORIS/react-scrollbar-size/pull/140) by [@shawnmcknight](https://github.com/shawnmcknight))

## 3.0.1
###### _2020-07-25_
- Internalized `debounce` function ([#30](https://github.com/STORIS/react-scrollbar-size/pull/30) by [@shawnmcknight](https://github.com/shawnmcknight))
  - Repo now has zero production dependencies!

## 3.0.0
###### _2020-07-18_
**BREAKING CHANGE**
- Library has been completely rewritten in TypeScript, complies with React >=16.8, and all tooling has been updated ([#11](https://github.com/STORIS/react-scrollbar-size/pull/11) by [@shawnmcknight](https://github.com/shawnmcknight))
  - The API has been changed significantly; there are no longer separate `onLoad` and `onChange` props in favor of a single `onChange` prop.  The callback for `onChange` returns `height` and `width` instead of `scrollbarHeight` and `scrollbarWidth`.

## 3.0.0-rc.0
###### _2020-07-18_
**BREAKING CHANGE**
- Library has been completely rewritten in TypeScript, complies with React >=16.8, and all tooling has been updated ([#11](https://github.com/STORIS/react-scrollbar-size/pull/11) by [@shawnmcknight](https://github.com/shawnmcknight))
  - The API has been changed significantly; there are no longer separate `onLoad` and `onChange` props in favor of a single `onChange` prop.  The callback for `onChange` returns `height` and `width` instead of `scrollbarHeight` and `scrollbarWidth`.

## 2.1.0
###### _2020-01-31_
- Lodash as a peerDependency was causing missing peerDependency errors.  Lodash peerDep replaced with stifle dep (#7 by [@shawnmcknight](https://github.com/shawnmcknight))
- Bump several dependency versions
- Configure npm to not generate package-lock file

## 2.0.0

###### _2017-05-30_
Major version bump to facilitate new dependency requirements:
- Make react a peerDependency to avoid running module duplication (#3 by [@shawnmcknight](https://github.com/shawnmcknight))
- Make lodash a peerDependency due to its common use and avoid inflating build size unnecessarily

## 1.0.2

###### _2017-05-28_
- Remove separate lodash modules in favor of direct import of functions
- Add support for prettier and update libraries to conform to rules
- Update all dependencies to latest version and make updates to conform to API changes
- Update all devDependencies to latest version and make updates to conform to API changes
- Eliminate usage of lodash isEqual in favor of separate instance variables
- Updated test suite to check for returned values rather than simply calling

## 1.0.1

###### _2017-04-26_
- Cancel throttled events when unmounting component

## 1.0.0

###### _2017-04-17_
- Add unit tests through mocha/chai/enzyme to reach 100% code coverage
- Add code coverage tooling through istanbul/nyc
- Update to React separate prop-types package
- Update all dependencies to latest versions
- Correct instruction link in README

## 0.1.0

###### _2017-03-25_
- Initial creation of this repository!  Thanks for using it!
