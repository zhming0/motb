define([
    'jquery',         // lib/jquery
    'underscore', // lib/underscore
    'backbone',        // lib/backbone
    'views/blog/blog.view',
], function($, _, Backbone, BlogView) {
    var BlogRouter = Backbone.Router.extend({
        initialize: function() {
            this.blogView = new BlogView();
        },
        routes: {
            'blog': 'defaultAction',
            'blog/*action' : 'defaultAction',
        },
        defaultAction: function() {
            this.blogView.render();
            require(['views/blog/home/home.view'], function(HomeView) {
                (new HomeView()).render();
            });
        },
    });
    var initialize = function() {
        var blogRouter = new BlogRouter();
    };
    return {
        initialize: initialize
    };
});
