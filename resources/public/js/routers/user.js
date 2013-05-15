define([
    'jquery',         
    'underscore', 
    'backbone',
    'events'
], function($, _, Backbone, Events) {
    var UserRouter = Backbone.Router.extend({
        routes: {
            'user/login': 'loginAction'
        },
        loginAction: function() {
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
