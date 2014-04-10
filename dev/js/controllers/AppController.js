define([
    'App',
    'views/FormListCollectionView',
    'collections/FormListCollection',
    'views/RequestsListCollectionView',
    'collections/RequestsListCollection',

    'marionette'
], function (
	App,
	FormListCollectionView,
	FormListCollection,
	RequestsListCollectionView,
	RequestsListCollection
) {
    return Backbone.Marionette.Controller.extend({
        initialize: function (options) {
        },

        index: function () {
        	App.formRegion.show(new FormListCollectionView({
        		collection: new FormListCollection([{}])
        	}));

        	App.listRegion.show(new RequestsListCollectionView({
        		collection: new RequestsListCollection()
        	}));
        }
    });
});