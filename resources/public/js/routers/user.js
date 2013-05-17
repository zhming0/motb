define([
    'jquery',         
    'underscore', 
    'backbone',
    'events',
    'views/user/user.view'
], function($, _, Backbone, Events, UserView) {
    var UserRouter = Backbone.Router.extend({
        routes: {
            'user/login': 'loginAction'
        },
        loginAction: function() {
            (new UserView()).render();
            alert("I'm logining >.<");
        }
    });
    
    var initialize = function() {
        (new UserRouter());
    }

    return {
        initialize: initialize
    };
});
