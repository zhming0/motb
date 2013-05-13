define([
    'jquery',         // lib/jquery
    'underscore', // lib/underscore
    'backbone',        // lib/backbone
    'bootstrap',
    'views/masthead/masthead',
    'views/home/home',
    'views/footer/footer',
    'views/login/login',
    'views/admin/admin'
], function($, _, Backbone, Bootstrap, MastheadView, HomeView, FooterView, LoginView, AdminView){
    var MainRouter = Backbone.Router.extend({
        routes: {
            'login' : 'loginAction',
            'admin' : 'adminAction',
            '*action' : 'defaultAction'
        },
        defaultAction: function() {
            var homeView = new HomeView();
        },
        loginAction: function() {
            var loginView = new LoginView();
            loginView.render();
        },
        adminAction: function() {
            var adminView = new AdminView();
        }
    });
    var initialize = function() {
        var mainRouter = new MainRouter();
        
        var mastheadView = new MastheadView(); 

        var footerView = new FooterView();

        $('a').click(function (e) {
            mainRouter.navigate($(this).attr('href'), true);
            return false;
        });  

        Backbone.history.start({pushState: true});
    };
    return {
        initialize: initialize
    };
});
