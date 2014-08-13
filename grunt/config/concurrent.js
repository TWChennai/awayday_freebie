/**
 * Configuration for concurrent task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('concurrent', {
        compile: [
            'pngmin:dist',
            'imagemin:dist',
            'svgmin:dist',
            'jade:dist',
            'less:dist',
            'browserify:dist'
        ]
    });

    // grunt.loadNpmTasks('grunt-concurrent');
};