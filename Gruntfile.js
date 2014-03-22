
module.exports = function(grunt) {

	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// our config
	grunt.initConfig({

		// watch for changes and trigger compass, jshint, uglify and livereload
		watch: {
			css: {
				files: ['*.scss'],
				tasks: ['sass']
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
					'demo.css': 'demo.scss',
				}
			}
		},

	});

	// register task
	grunt.registerTask('default', ['watch']);
};