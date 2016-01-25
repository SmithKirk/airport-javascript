module.exports = function(grunt) {

  grunt.initConfig ({
    jasmine: {
      airport: {
        src: 'src/*.js',
        options: {
          specs: 'spec/*spec.js'
        }
      }
    },

    jshint: {
      all: ['src/*.js', 'spec/*spec.js']
    },

    watch: {
      airport: {
        files: ['src/*.js', 'spec/*spec.js'],
        tasks: ['jasmine']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.registerTask('default', ['jasmine', 'jshint']);


};
