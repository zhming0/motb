define([
    'jquery',         
    'underscore', 
    'backbone',        
    'events',
    'collections/postslist',
    'views/blog/post/post.view',
    'text!templates/blog/home/home.html'
], function($, _, Backbone, Events, PostsList, PostView, homeTemplate){
    var HomeView = Backbone.View.extend({
        el: '#page',
        initialize: function(){
            this.collection = new PostsList();
        },

        events: {
            "click .motb-blog-selectpost": 'selectPost'
        },

        template: _.template(homeTemplate),    

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
                var data = {
                    postslist: that.collection.toJSON()
                };
                var rendered = that.template(data);
                that.$el.html(rendered);
            };
            this.collection.fetch({
                success: handler,
                error: function() {
                    alert("Can't get posts");
                },
                dataType: "json"
            });
            //this.$el.html(homeTemplate);
        }
    });
    return HomeView;
});
