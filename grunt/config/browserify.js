/**
 * Configuration for browserify task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('browserify', {
        server: {
            options: {
                bundleOptions: {
                    debug: true
                }
            },
            files: {
                '<%= yeogurt.server %>/scripts/main.js': ['<%= yeogurt.dev %>/scripts/main.js']
            }
        },
        dist: {
            options: {
                bundleOptions: {
                    debug: true
                },
                preBundleCB: function(b) {
                    return b.plugin('minifyify', {
                        map: 'main.js.map',
                        output: 'dist/scripts/main.js.map'
                    });
                }
            },
            files: {
                '<%= yeogurt.dist %>/scripts/main.js': ['<%= yeogurt.dev %>/scripts/main.js']
            }
        }
    });

    // grunt.loadNpmTasks('grunt-browserify');
};