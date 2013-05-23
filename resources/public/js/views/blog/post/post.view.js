define([
    'jquery',         
    'underscore', 
    'backbone',        
    'events',
    'models/post/post',
    'text!templates/blog/post/post.html',
    'domReady',
    'markdownConverter',
    'markdownSanitizer',
], function($, _, Backbone, Events, PostModel, postTemplate, domReady){
    var PostView = Backbone.View.extend({
        el: '#page',

        initialize: function(){
            if (typeof(this.model) == "undefined") {
                this.model = new PostModel({_id: this.id});
            }
            var that = this;
            domReady(function() {
                that.converter = new Markdown.getSanitizingConverter();
            });
        },

        events: {
        },

        template: _.template(postTemplate),    

        render: function() {
            var that = this;
            var handler = function() {
                $('.masthead').hide("fast");
                $('footer').hide("fast");
                var data = {
                    post: that.model.toJSON()
                };
                data.post.content = that.converter.makeHtml(data.post.content);
                console.log(that.model.toJSON()); 
                var rendered = that.template(data);
                that.$el.html(rendered);
            };
            this.model.fetch({
                success: handler,
                error: function() {
                    alert("Can't get posts");
                },
                dataType: "json"
            });
            //this.$el.html(homeTemplate);
        }
    });
    return PostView;
});
