define([
    'jquery',         
    'underscore', 
    'backbone',        
    'events',
    'collections/postslist',
    'views/blog/post/post.view',
    'views/blog/home/pagination.view',
    'text!templates/blog/home/home.html'
], function($, _, Backbone, Events, PostsList, PostView, PaginationView, homeTemplate){
    var HomeView = Backbone.View.extend({
        el: '#page',
        initialize: function(){
            this.collection = new PostsList([], {
                currentPage: 1,
                pageSize: 4,
            });
        },

        events: {
            "click .motb-blog-selectpost": 'selectPost',
            "click #motb-blog-pagination li": 'changePage',
        },

        template: _.template(homeTemplate),    

        changePage: function(evt) {
            var target = $(evt.currentTarget);
            var idx = target.index(); 
            if (idx == target.parent().children(":first-child").index()) {
                this.collection.currentPage = 1;
            } else if (idx == target.parent().children(":last-child").index()) {
                this.collection.currentPage = idx - 1;
            } else {
                this.collection.currentPage = idx;
            }
            this.render();
        },

        selectPost: function(evt) {
            evt.preventDefault();
            var target = $(evt.currentTarget);
            var index = target.parent().parent().parent().index();
            var model = this.collection.at(index);

            Backbone.history.navigate("blog/post/" + model.id, true);
        },

        render: function() {
            $("#masthead ul li").removeClass("active");
            $("#motb-blog-nav-home").addClass("active");
            var that = this;
            var handler = function() {
                that.$el.slideToggle();
                var data = {
                    postslist: that.collection.toJSON()
                };
                var rendered = that.template(data);
                that.$el.html(rendered);
                that.$el.slideToggle('fast');
                (new PaginationView({
                    currentPage: that.collection.currentPage,
                    pageSize: that.collection.pageSize,
                })).render();
            };
            this.collection.fetch({
                success: handler,
                error: function() {
                    alert("Can't get posts");
                },
                dataType: "json"
            });
        }
    });
    return HomeView;
});
