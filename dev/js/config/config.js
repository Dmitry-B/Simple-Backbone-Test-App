requirejs.config({

    baseUrl: './js/',

    // urlArgs: 'v=' + (new Date()).getTime(),

    paths: {
        'jquery':                   'vendor/jquery-1.11.0.min',
        'underscore':               'vendor/lodash.underscore.min',
        'backbone':                 'vendor/backbone-min',
        'marionette':               'vendor/backbone.marionette.min',
        'backbone.wreqr':           'vendor/backbone.wreqr.min',
        'backbone.babysitter':      'vendor/backbone.babysitter.min',
        'stickit':                  'vendor/backbone.stickit.min',
        'text':                     'vendor/text'
    },

    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },

        marionette: {
            deps: ['underscore', 'backbone', 'jquery', 'backbone.wreqr', 'backbone.babysitter'],
            exports: 'Marionette'
        },

        stickit: {
            deps: ['backbone']
        }
    }
});