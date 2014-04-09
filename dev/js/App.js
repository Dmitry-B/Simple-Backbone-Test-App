define([
    'marionette'
], function () {
    var App = new Backbone.Marionette.Application();

    App.addRegions({
        contentRegion: '#content'
    });

    App.addInitializer(function () {
        Backbone.history.start({pushState: true});
    });

    return App;
});