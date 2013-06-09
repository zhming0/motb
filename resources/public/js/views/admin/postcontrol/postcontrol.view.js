define([
    'jquery',         
    'underscore', 
    'backbone',        
    'events',
    'views/admin/postcontrol/postedit.view',
    'collections/postslist',
    'models/post/post',
    'text!templates/admin/postcontrol/postcontrol.html'
], function($, _, Backbone, Events, PostEditView, PostsList, PostModel, postControlTemplate){
    var PostControlView = Backbone.View.extend({
        el: "#main",

        template: _.template(postControlTemplate),

        initialize: function() {
            this.collection = new PostsList([], {});
            var that = this;
            /*Events.on("postedit:done", function() {
                that.render();
            });*/
        },

        events: {
            "click #edit-post": "edit",
            "click #delete-post" : "del",
            "click #add-post" : "newpost"
        },

        newpost: function(evt) {
            Backbone.history.navigate("admin/posts/edit");
            this.renderEdit(new PostModel()); 
        },

        renderEdit: function(model) {
            (new PostEditView(model)).render();
        },

        edit: function(evt) {
            var target = $(evt.currentTarget);
            var index = target.parent().parent().index();
            var model = this.collection.at(index);
            this.renderEdit(model);
        },

        del: function(evt) {
            var target = $(evt.currentTarget);
            var index = target.parent().parent().index();
            var model = this.collection.at(index);
            var that = this;
            model.destroy({
                success: function() {
                    alert("Successfully delete this post!");
                    that.render(); 
                }
            });
        },

        render: function() {
            var that = this;
            var handler = function() {
                var data = {
                    postslist: that.collection.toJSON()
                };
                var renderedContent = that.template(data);
                that.$el.html(renderedContent);
            }
            this.collection.fetch({
                success: handler,
                error: function() {
                    alert("Shit");
                },
                dataType: "json"
            });
        }
    });
    return PostControlView;
});
