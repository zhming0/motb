define([
    'jquery',         // lib/jquery
    'underscore', // lib/underscore
    'backbone',        // lib/backbone
    'single',
    'events',
    'views/admin/admin.view',
    'views/admin/login/adminlogin.view',
    'views/admin/postcontrol/postcontrol.view'
], function($, _, Backbone, Single, Events, AdminView, AdminLoginView, PostControlView) {
    var AdminRouter = Backbone.Router.extend({

        initialize: function() {
        },

        routes: {
            'admin': 'defaultAction',
            'admin/posts': 'postControlAction',
            'admin/posts/new': 'postAddAction',
            'admin/posts/edit/:id': 'postEditAction',
            'admin/photos': 'photosControlAction',
            'admin/settings': 'settingsAction',
            'admin/login' : 'loginAction',
            'admin/logout' : 'logoutAction',
            'admin/*action' : 'defaultAction',
        },

        initAdmin: function() {
            return Single("adminview", AdminView, [], {refresh: false});
        },

        initAdminWith: function(func) {
            var adminView = this.initAdmin();
            adminView.once("authorized", func);
            adminView.render();
        },

        defaultAction: function() {
            this.initAdminWith(function() {
                Single("postcontrol", PostControlView, 
                        [], {parent: "adminview"}).render(); 
            });
        },

        photosControlAction: function() {
            this.initAdmin().render();
        },

        settingsAction: function() {
            this.initAdmin().render();
        },

        postControlAction: function() {
            this.initAdminWith(function() {
                Single("postcontrol", PostControlView, 
                        [], {parent: "adminview"}).render(); 
            });
        },

        postEditAction: function(id) {
            this.initView();
        },

        loginAction: function() {
            adminLoginView = new AdminLoginView();
            adminLoginView.render();
        },

        logoutAction: function() {
            $.ajax("/api/users/logout").done(function() {
                Backbone.history.navigate("/", true);
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
