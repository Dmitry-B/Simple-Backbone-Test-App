define([
	'text!templates/form-list-item.html',

    'marionette',
    'stickit'
], function (
	template
) {
    return Backbone.Marionette.ItemView.extend({
    	tagName: 'li',
    	className: 'form_list_item',
    	template: _.template(template),

    	events: {
    		'click .delete': 'onClickDelete'
    	},

    	bindings: {
    		'input[name="key"]': 'key',
    		'input[name="value"]': 'value'
    	},

    	onClickDelete: function () {
    		this.model.collection.remove(this.model);
    	},

    	onRender: function () {
    		this.stickit();
    	}
    });
});