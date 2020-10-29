module.exports = function(grunt) {
    // Task configuration will go here
	grunt.initConfig({
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass', 'cssmin'],
                options: {
                    livereload: true,
                },
            }
		},		
		cssmin: { // Begin CSS Minify Plugin
        	  target: {
        	    files: [{
        	      expand: true,
        	      cwd: 'css',
        	      src: ['*.css', '!*.min.css','!jquery*.css'],
        	      dest: 'css',
        	      ext: '.min.css'
        	}]
        	  }
		},
		sass: {
			dist: {
			  options: {

			  },
			  files: [{
				expand: true,
				cwd: 'scss',
				src: ['*.scss'],
				dest: 'css',
				ext: '.css'
			}]
			}
	  	},
		browserSync: {
		    bsFiles: {
		      src: [
		        "css/*.css", "js/.js", "./*.html" //search file/folders
		      ]
		    },
		    options: {
		      watchTask: true,
		      server: {
		        baseDir: "./"  //server base directory, a index.html on this directory will be loaded into browser
		      }
		    }
		}
	});


	// Load tasks dependencies
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

 	// Setup default task
 	// both browserSync and watch will run when running >grunt command
	grunt.registerTask('default', ['browserSync', 'watch']);

};