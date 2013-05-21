define([
    'jquery',         // lib/jquery
    'underscore', // lib/underscore
    'backbone',        // lib/backbone
    'events',
    'views/admin/admin.view',
], function($, _, Backbone, Events, AdminView) {
    var AdminRouter = Backbone.Router.extend({
        initialize: function() {
            var that = this;
            Events.on("admin:loginNeeded", function(){
                that.loginAction();
            });
        },
        routes: {
            'admin': 'defaultAction',
            'admin/*action' : 'defaultAction',
            'admin/login' : 'loginAction',
        },
        defaultAction: function() {
            this.adminView = new AdminView();
        },
        loginAction: function() {
            require([
                'views/admin/login/adminlogin.view'
            ], function(AdminLoginView) {
                adminLoginView = new AdminLoginView();
                adminLoginView.render();
            });
        }
    });
    var initialize = function() {
        var adminRouter = new AdminRouter();
    };
    return {
        initialize: initialize
    };
});
