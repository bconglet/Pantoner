
module.exports = function(grunt) {

	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// our config
	grunt.initConfig({

		// watch for changes and trigger compass, jshint, uglify and livereload
		watch: {
			sass: {
				files: ['dev/demo.scss','scss/_pantone.scss','scss/test.scss'],
				tasks: ['sass']
			},
			build: {
				files: ['dev/*.*','json/*.json'],
				tasks: ['shell']
			}
		},


		// we use the Sass
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: { 
					// process demo styles
					'demo.css': 'dev/demo.scss',
					'scss/test.css': 'scss/test.scss',
				}
			}
		},


		// generate the sass and html files with node scripts
		shell: {
			build: {
				command: 'node dev/build.js'
			}
		}

	});

	// register task
	grunt.registerTask('default', ['watch']);
};