define([
    'jquery',         
    'underscore', 
    'backbone',        
    'events',
    'collections/postslist',
    'text!templates/admin/postcontrol/postcontrol.html'
], function($, _, Backbone, Events, PostsList, postControlTemplate){
    var PostControlView = Backbone.View.extend({
        el: "#control",

        template: _.template(postControlTemplate),

        initialize: function() {
            this.collection = new PostsList([], {});
            var that = this;
            Events.on("postedit:done", function() {
                that.render();
            });
        },

        events: {
            "click .motb-postcontrol-btn-edit": "edit",
            "click .motb-postcontrol-btn-delete" : "del",
            "click .motb-postcontrol-btn-add" : "newpost"
        },

        newpost: function(evt) {
            var that = this;
            require([
                'models/post/post'
            ], function(PostModel){
                that.renderEdit(new PostModel()); 
            });
        },

        renderEdit: function(model) {
            require([
                'views/admin/postcontrol/postedit.view'
            ], function(PostEditView) {
                (new PostEditView(model)).render();
            });
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
                //console.log(that.collection.toJSON());
                //console.log(JSON.stringify(that.collection));
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
