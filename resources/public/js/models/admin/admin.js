define([
    'underscore', 
    'backbone'        
], function(_, Backbone){
    var AdminModel = Backbone.Model.extend({
        url: function() {
            return "https://api.github.com/users/mjzshd";
        },
    });
    return AdminModel;
});
