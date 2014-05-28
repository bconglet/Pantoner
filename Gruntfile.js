
module.exports = function(grunt) {

	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// our config
	grunt.initConfig({

		// watch for changes and trigger compass, jshint, uglify and livereload
		watch: {
			css: {
				files: ['dev/demo.scss','_pantone.scss'],
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
					// nested, compact, compressed, expanded
					style: 'compressed'
				},
				files: { 
					// core admin styles
					'demo.css': 'dev/demo.scss',
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