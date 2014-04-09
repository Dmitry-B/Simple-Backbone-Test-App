module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

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
            options: {
                wrap: true,
                name: "js/vendor/almond",
                preserveLicenseComments: false,
                optimize: "uglify",
                mainConfigFile: "js/config.js",
                include: ["js/main"],
                out: "../web/js/main.min.js"
            }
        },

        concat: {
            options: {
                separator: ''
            },

            css: {
                src: ['css/reset.css', 'css/normalize.css', 'css/*.css'],
                dest: '../web/css/styles.min.css'
            }
        },

        watch: {
            options: {
                livereload: true
            },

            scripts: {
                files: ['js/**/*.js'],
                tasks: ['requirejs'],
                options: {
                    interrupt: true
                }
            },

            css: {
                files: ['css/*.css'],
                tasks: ['concat'],
                options: {
                    interrupt: true
                }
            },

            html: {
                files: ['../web/**/*.html', '**/*.html'],
                options: {
                    interrupt: true
                }
            }
        }
    });

    grunt.registerTask('default', ['connect', 'watch']);

};
