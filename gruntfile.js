'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
        build: {
            files: [{
                src: 'app/scss/spongetest2.scss',
                dest:'app/css/styles.css'
            }]
        
        }
    },
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('sass', ['sass']);

};

    

 