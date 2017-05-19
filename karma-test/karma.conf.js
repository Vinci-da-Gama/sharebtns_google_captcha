// Karma configuration
// Generated on Sun May 01 2016 16:09:59 GMT+1000 (AEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    // Since basePath is set as karma.conf.js, it need go out one time to fetch other files.
    files: [
        '../lib/jquery/dist/jquery.min.js',
        '../lib/angular/angular.min.js',
        '../lib/angular-ui-router/release/angular-ui-router.min.js',
        '../lib/bootstrap/dist/js/bootstrap.min.js',
        '../lib/angular-animate/angular-animate.min.js',
        '../lib/angular-cookies/angular-cookies.min.js',
        '../lib/angular-messages/angular-messages.min.js',
        '../lib/angular-bootstrap/ui-bootstrap.min.js',
        '../lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
        '../lib/angular-mocks/angular-mocks.js',
        '../app/**/*.js',
        './unitTest/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        '../public/index.html': ['ng-html2js'],
        '../public/_partials/**/*.html': ['ng-html2js'],
        '../app/**/*.js': 'coverage'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    // add coverageReporter
    coverageReporter: {
        type: 'html',
        dir: './coverage/'
    },

    // web server port
    port: 3333,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
