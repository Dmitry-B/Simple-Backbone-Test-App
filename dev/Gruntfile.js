module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8000,
                    protocol: 'http',
                    hostname: 'localhost',
                    base: '../web/'
                }
            }
        },

        requirejs: {
            compile: {
                options: {
                    baseUrl: "js",
                    wrap: true,
                    name: 'vendor/almond',
                    preserveLicenseComments: false,
                    optimize: 'none',
                    mainConfigFile: 'js/config/config.js',
                    include: ['main'],
                    out: '../web/js/main.min.js'
                }
            }
        },

        cssmin: {
            combine: {
                files: {
                    '../web/css/styles.min.css': ['css/*.css']
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true
                },
                files: {
                    '../web/index.html': 'index.html'
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },

            scripts: {
                files: ['js/**/*.js', 'js/**/*.html'],
                tasks: ['requirejs'],
                options: {
                    interrupt: true
                }
            },

            css: {
                files: ['css/*.css'],
                tasks: ['cssmin'],
                options: {
                    interrupt: true
                }
            },

            html: {
                files: ['**/*.html'],
                tasks: ['htmlmin'],
                options: {
                    interrupt: true
                }
            }
        }
    });

    grunt.registerTask('default', ['connect', 'watch']);

};
