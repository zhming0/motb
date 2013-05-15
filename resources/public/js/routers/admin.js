define([
    'jquery',         // lib/jquery
    'underscore', // lib/underscore
    'backbone',        // lib/backbone
    'views/admin/admin.view'
], function($, _, Backbone, AdminView) {
    var AdminRouter = Backbone.Router.extend({
        initialize: function() {
            this.adminView = new AdminView();
        },
        routes: {
            'admin': 'defaultAction',
            'admin/*action' : 'defaultAction',
        },
        defaultAction: function() {
            this.adminView.render();
        },
    });
    var initialize = function() {
        var adminRouter = new AdminRouter();
    };
    return {
        initialize: initialize
    };
});
