define([
    'jquery',         // lib/jquery
    'underscore', // lib/underscore
    'backbone',        // lib/backbone
    'single',
    'views/blog/blog.view',
    'views/blog/home/home.view',
    'views/blog/post/post.view',
    'views/blog/contact/contact.view'
], function($, _, Backbone, Single, BlogView, HomeView, PostView, ContactView) {
    var BlogRouter = Backbone.Router.extend({
        initialize: function() {
        },

        routes: {
            'blog': 'defaultAction',
            'blog/post/:id': 'showPost',
            'blog/contact' : 'showContact',
            'blog/*action' : 'defaultAction',
        },

        initView: function() {
            Single("blogview", BlogView, [], {refresh: false});
            $("#masthead").show();
            $("#footer").show();
        },

        showContact: function() {
            this.initView();
            Single("contactview", ContactView, [], 
                    {refresh: false}).render();
        },

        showPost: function(id) {
            this.initView();
            Single("postview" + id, PostView, 
                    [{id: id}]).render();
        },

        defaultAction: function() {
            this.initView();
            homeView = Single('homeview', HomeView, []);
            homeView.render();
        },
    });
    var initialize = function() {
        var blogRouter = new BlogRouter();
    };
    return {
        initialize: initialize
    };
});
