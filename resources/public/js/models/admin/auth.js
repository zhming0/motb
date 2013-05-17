define([
    'underscore', 
    'backbone',
    'events'
], function(_, Backbone, Events){
    var AuthModel = Backbone.Model.extend({
        url: function() {
            return "/api/users/login";
        },
    });
    return AuthModel;
});
