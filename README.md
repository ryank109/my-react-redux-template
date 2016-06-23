## React + Redux Template

### Setup
 1. Requires [nodeJS](https://nodejs.org/en/) - get the current, not LTS
 2. Run `npm i`

### NPM Tasks (`npm run [task_name]`)
 - build - build the distribution files
 - clean - cleans the output directories
 - coverage - run the test and create coverage report in `cobertura` format for Jenkins report. Change `coverageReport.type` to `html` to see the coverage locally
 - lint - lint javascript
 - lint-no-cache - lint javascript without cache
 - start - start the dev server @[http://localhost:3000](http://localhost:3000)
 - test - runs unit test
 - test-dev - runs unit test in debug mode

### Directory Structure

```
app                            // application directory
 - [feature/module dirs]       // feature/module directory
    - actions.js               // action creators
    - index.jsx                // view component
    - selectors.js             // selectors
    - reducer.js               // reducers
 - app.jsx                     // top level application view
 - main.jsx                    // main bootstrap file
 - reducers.jsx                // this is where all the reducers are collected
 - router.jsx                  // router definition
 - store.jsx                   // redux store
configs                        // directory where webpack/test configurations are
mocks                          // if you need to define any mock .json files
styles                         // sass styles - make use of BEM css style guidelines
test                           // javascript tests
.babelrc                       // babel (es2015) configuration
.eslintrc                      // lint configuration
index.html                     // main index file
package.json                   // configuration file that defines npm dependencies and build scripts
```
