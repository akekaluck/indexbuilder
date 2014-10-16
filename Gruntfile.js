module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify : {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'lib/*.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
        all: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js']
    },
    mocha_istanbul: {
        coverage: {
            recursive: true,
            src: ['test/spec-mocha'], // a folder works nicely
            options: {
                mask: '**/*.spec.js'
            }
        }
    },
    mochaTest: {
        test: {
            options: {
                  reporter: 'spec',
                  captureFile: 'results.txt', // Optionally capture the reporter output to a file
                  quiet: false // Optionally suppress output to standard out (defaults to false)
            },
            src: ['test/**/*.js']
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-istanbul');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('default', ['jshint','mocha_istanbul.coverage']);
  grunt.registerTask('coverage', ['mocha_istanbul:coverage']);
  grunt.registerTask('test', ['jshint','mocha_istanbul:coverage']);
  grunt.registerTask('mocha', ['mochaTest']);
//
//  grunt.registerTask('default', 'Log some stuff.', function() {
//    grunt.log.write('Logging some stuff...').ok();
//  });
};