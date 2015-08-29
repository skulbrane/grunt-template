'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            dist: {
                files: {
                    'dest/output.min.js': [
                        'src/input1.js',
                        'src/input2.js'
                    ]
                }
        }
    }
    });

    // Load tasks...
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Optionally create custom tasks...
    grunt.registerTask('default', ['uglify']);
};
