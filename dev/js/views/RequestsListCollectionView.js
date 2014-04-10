define([
	'App',
	'views/RequestsListItemView',

    'marionette'
], function (
	App,
	RequestsListItemView
) {
    return Backbone.Marionette.CollectionView.extend({
    	tagName: 'ul',
    	className: 'request_list',
		itemView: RequestsListItemView,

		initialize: function () {
			_.bindAll(this);

			App.vent.on('requestList:add', this.onRequestListAdd);
		},

		onRequestListAdd: function (data) {
			data.jsonParsed = JSON.stringify(data, '', 4);
			this.collection.add(data);
		}
	});
});