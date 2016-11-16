var path = require('path');
var jasmineReporters = require('jasmine-reporters');
jasmine.VERBOSE = true;
jasmine.getEnv().addReporter(
    new jasmineReporters.JUnitXmlReporter({
        consolidateAll: false,
        savePath: path.resolve(__dirname, '../test-reports'),
        filePrefix: 'test-results-'
    })
);
