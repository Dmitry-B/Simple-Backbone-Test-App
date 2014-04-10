define([
	'App',
	'views/FormListItemView',
	'text!templates/form-list-block.html',

    'marionette'
], function (
	App,
	FormListItemView,
	template
) {
    return Backbone.Marionette.CompositeView.extend({
    	template: _.template(template),
		itemView: FormListItemView,
		itemViewContainer: '.form_list',

		events: {
			'click .add_field': 'onClickAddField',
			'click .send': 		'onClickSend'
		},

		onClickAddField: function () {
			this.collection.add({});
		},

		onClickSend: function () {
			var self = this;

			$.ajax({
				url: 'http://httpbin.org/post',
				type: 'POST',
				dataType: 'json',
				data: self.serializeCollection(),
				success: function (data) {
					self.collection.reset([{}]);
					App.vent.trigger('requestList:add', data);
				}
			});
		},

		serializeCollection: function() {
			var data = {};

			this.collection.each(function(model) {
				data[model.get('key')] = model.get('value')
			});

			return data;
		}
	});
});