define([
    'App',
    'marionette'
], function (App) {
    return Backbone.Marionette.Controller.extend({
        initialize: function (options) {

        },

        index: function () {
            console.log('index page');
        }
    });
});