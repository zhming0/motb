define([
    'underscore', 
    'backbone',
    'events',
    'models/post/post'
], function(_, Backbone, Events, PostModel){
    var PostsList = Backbone.Collection.extend({
        model: PostModel,

        url: function() {
            return "/api/posts";
        },

    });
    return PostsList;
});
