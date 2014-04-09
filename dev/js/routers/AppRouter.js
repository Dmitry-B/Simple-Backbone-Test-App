define([
    'marionette'
], function() {
    return Backbone.Marionette.AppRouter.extend({
        appRoutes: {
           '': 'index'
        }
    });
});