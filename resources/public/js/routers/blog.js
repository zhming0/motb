define([
    'jquery',         // lib/jquery
    'underscore', // lib/underscore
    'backbone',        // lib/backbone
    'views/blog/blog.view',
    'views/blog/home/home.view',
    'views/blog/post/post.view',
    'views/blog/contact/contact.view'
], function($, _, Backbone, BlogView, HomeView, PostView, ContactView) {
    var BlogRouter = Backbone.Router.extend({
        initialize: function() {
            this.blogView = new BlogView();
        },
        routes: {
            'blog': 'defaultAction',
            'blog/post/:id': 'showPost',
            'blog/contact' : 'showContact',
            'blog/*action' : 'defaultAction',
        },

        showContact: function() {
            this.blogView.render();
            (new ContactView()).render();
        },

        showPost: function(id) {
            this.blogView.render();
            (new PostView({id: id})).render();
        },

        defaultAction: function() {
            this.blogView.render();
            (new HomeView()).render();
        },
    });
    var initialize = function() {
        var blogRouter = new BlogRouter();
    };
    return {
        initialize: initialize
    };
});
