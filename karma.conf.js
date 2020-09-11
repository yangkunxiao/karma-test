// Karma configuration
// Generated on Mon Apr 13 2020 22:15:23 GMT+0800 (GMT+08:00)

module.exports = function (config) {
	config.set({
		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],
		//jasmine mocha jest

		// list of files / patterns to load in the browser
		//需要测试的文件
		files: [
            'unitTest/**/*.js',
            'interfaceTest/**/*.js'
			// "unitTest/**/*.spec.js"
		],

		// list of files / patterns to exclude
		//需要排除的文件
		exclude: [],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'unitTest/**/!(*.spec.js)': ['coverage'],
			'interfaceTest/**/!(*.spec.js)': ['coverage'],
		},

		coverageReporter: {
			type: 'html',
			dir: 'coverage/',
		},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress', 'coverage'],

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity,
	})
}