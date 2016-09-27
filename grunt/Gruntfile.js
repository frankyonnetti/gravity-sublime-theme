// npm install grunt grunt-contrib-concat grunt-contrib-watch grunt-notify load-grunt-tasks time-grunt --save-dev

module.exports = function(grunt) {
  'use strict';

  // Load tasks
  require('load-grunt-tasks')(grunt);

  // Display task timing
  require('time-grunt')(grunt);

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        banner: '[\n',
        footer: ']',
        stripBanners: true
      },
      gravity: {
        src: ['theme_source/base.json', 'theme_source/gravity.json'],
        dest: '../Gravity/Gravity.sublime-theme',
      },
      reverse: {
        src: ['theme_source/base.json', 'theme_source/r_gravity.json'],
        dest: '../Reverse Gravity/Reverse Gravity.sublime-theme',
      },
      gravity_one: {
        src: ['theme_source/base.json', 'theme_source/gravity_one.json'],
        dest: '../Gravity One/Gravity One.sublime-theme',
      },
    },

    watch: {
      grunt: {
        files: ['Gruntfile.js']
      },
      concat: {
        files: ['theme_source/*.json'],
        tasks: ['concat', 'notify:concat'],
      },
    },

    notify: {
      concat: {
        options: {
          message: 'Concatenation finished, no errors!',
        },
      },
    }

  }); // end jSON

  // Default task(s)
  grunt.registerTask('default', ['concat', 'watch']);

};
