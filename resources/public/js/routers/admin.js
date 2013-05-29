define([
    'jquery',         // lib/jquery
    'underscore', // lib/underscore
    'backbone',        // lib/backbone
    'events',
    'views/admin/admin.view',
    'views/admin/login/adminlogin.view',
    'single'
], function($, _, Backbone, Events, AdminView, AdminLoginView, Single) {
    var AdminRouter = Backbone.Router.extend({

        initialize: function() {
            var that = this;
            this.instances = {};
        },

        routes: {
            'admin': 'defaultAction',
            'admin/posts': 'postControlAction',
            'admin/posts/edit/:id': 'postEditAction',
            'admin/login' : 'loginAction',
            'admin/*action' : 'defaultAction',
        },
        defaultAction: function() {
            this.adminView = new AdminView();
        },

        postControlAction: function() {

        },

        postEditAction: function() {
        },

        loginAction: function() {
            adminLoginView = Single(AdminLoginView);
            adminLoginView.render();
        },
    });
    var initialize = function() {
        var adminRouter = new AdminRouter();
    };
    return {
        initialize: initialize
    };
});
