define([
    'models/FormListItemModel',

    'backbone'
], function (
    FormListItemModel
) {
    return Backbone.Collection.extend({
    	url: 'http://httpbin.org/post',
        model: FormListItemModel
    });
});