define([
    'underscore', 
    'backbone',
    'events'
], function(_, Backbone, Events){
    var PostTitleModel = Backbone.Model.extend({
        url: function() {
            return "/api/posts/title";
        }
    });
    return PostTitleModel;
});

