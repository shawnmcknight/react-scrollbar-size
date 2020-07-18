## HEAD

## 3.0.0-rc.0
###### _2020-07-18_
**BREAKING CHANGE**
- Library has been completely rewritten in TypeScript, complies with React >=16.8, and all tooling has been updated (#11) @shawnmcknight
  - The API has been changed significantly; there are no longer separate `onLoad` and `onChange` props in favor of a single `onChange` prop.  The callback for `onChange` returns `height` and `width` instead of `scrollbarHeight` and `scrollbarWidth`.

## 2.1.0
###### _2020-01-31_
- Lodash as a peerDependency was causing missing peerDependency errors.  Lodash peerDep replaced with stifle dep (#7) @shawnmcknight
- Bump several dependency versions @shawnmcknight
- Configure npm to not generate package-lock file @shawnmcknight

## 2.0.0

###### _2017-05-30_
Major version bump to facilitate new dependency requirements:
- Make react a peerDependency to avoid running module duplication (#3) @shawnmcknight
- Make lodash a peerDependency due to its common use and avoid inflating build size unnecessarily @shawnmcknight

## 1.0.2

###### _2017-05-28_
- Remove separate lodash modules in favor of direct import of functions @shawnmcknight
- Add support for prettier and update libraries to conform to rules @shawnmcknight
- Update all dependencies to latest version and make updates to conform to API changes @shawnmcknight
- Update all devDependencies to latest version and make updates to conform to API changes @shawnmcknight
- Eliminate usage of lodash isEqual in favor of separate instance variables @shawnmcknight
- Updated test suite to check for returned values rather than simply calling @shawnmcknight

## 1.0.1

###### _2017-04-26_
- Cancel throttled events when unmounting component @shawnmcknight

## 1.0.0

###### _2017-04-17_
- Add unit tests through mocha/chai/enzyme to reach 100% code coverage @shawnmcknight
- Add code coverage tooling through istanbul/nyc @shawnmcknight
- Update to React separate prop-types package @shawnmcknight
- Update all dependencies to latest versions @shawnmcknight
- Correct instruction link in README @shawnmcknight

## 0.1.0

###### _2017-03-25_
- Initial creation of this repository!  Thanks for using it!
