define([
    'marionette'
], function () {
    var App = new Backbone.Marionette.Application();

    App.addRegions({
        formRegion: '#form_block',
        listRegion: '#request_block'
    });

    App.addInitializer(function () {
        Backbone.history.start({pushState: true});
    });

    return App;
});