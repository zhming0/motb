define([
    'underscore', 
    'backbone',
    'events',
    'models/post/post'
], function(_, Backbone, Events, PostModel) {
    var PostsList = Backbone.Collection.extend({
        model: PostModel,

        initialize: function(models, options) {
            this.currentPage = options.currentPage ? options.currentPage : 0;
            this.pageSize = options.pageSize ? options.pageSize : 0;
        },

        url: function() {
            return "/api/posts/from" + 
                    ((this.currentPage - 1) * this.pageSize) + 
                    "/num" + 
                    this.pageSize;
        },

    });
    return PostsList;
});
