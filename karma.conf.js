// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
'use strict';

module.exports = function(config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['mocha', 'chai','browserify'],

        // list of files / patterns to load in the browser
        files: [
            'dev/bower_components/jquery/dist/jquery.js','dev/bower_components/bootstrap/js/affix.js',
            'dev/bower_components/bootstrap/js/alert.js',
            'dev/bower_components/bootstrap/js/button.js',
            'dev/bower_components/bootstrap/js/carousel.js',
            'dev/bower_components/bootstrap/js/collapse.js',
            'dev/bower_components/bootstrap/js/dropdown.js',
            'dev/bower_components/bootstrap/js/modal.js',
            'dev/bower_components/bootstrap/js/scrollspy.js',
            'dev/bower_components/bootstrap/js/tab.js',
            'dev/bower_components/bootstrap/js/tooltip.js',
            'dev/bower_components/bootstrap/js/popover.js',
            'dev/bower_components/bootstrap/js/transition.js',
            'test/**/*-spec.js'
        ],

        // list of files to exclude
        exclude: [],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress'],

        // web server port
        port: 8080,

        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome'],

        // Browserify config (all optional)
        browserify: {
            // extensions: ['.coffee'],
            // ignore: [],
            // transform: ['browserify-shim'],
            // debug: true,
            // noParse: ['jquery'],
            watch: true,
        },

        // Add browserify to preprocessors
        preprocessors: {'test/**/*-spec.js': ['browserify']},

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};
