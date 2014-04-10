define([
    'models/RequestsListItemModel',

    'backbone'
], function (
    RequestsListItemModel
) {
    return Backbone.Collection.extend({
        model: RequestsListItemModel
    });
});