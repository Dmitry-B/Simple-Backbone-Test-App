define([
	'text!templates/requests-list-item.html',

    'marionette'
], function (
	template
) {
    return Backbone.Marionette.ItemView.extend({
    	tagName: 'li',
    	template: _.template(template),

        events: {
            'click .view': 'onClickView'
        },

        ui: {
            'viewBlock': '.view_block'
        },

        onClickView: function () {
            this.ui.viewBlock.toggle();
        }
    });
});