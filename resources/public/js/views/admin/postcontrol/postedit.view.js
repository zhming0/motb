define([
    'jquery',         
    'underscore', 
    'backbone',        
    'events',
    'domReady',
    'text!templates/admin/postcontrol/postedit.html',
    'markdownConverter',
    'markdownEditor',
    'markdownSanitizer'
], function($, _, Backbone, Events, domReady, postEditTemplate){
    var PostEditView = Backbone.View.extend({
        el: "#control",

        initialize: function(model) {
            this.model = model;
            //console.log(model.get("name"));
            //console.log(model.url());
            var that = this;
            domReady(function(){
                that.converter = new Markdown.getSanitizingConverter();
                that.editor = new Markdown.Editor(that.converter);
            });
        },

        events: {
        },

        template: _.template(postEditTemplate),

        render: function() {
            var that = this;
            var handler = function() {
                //console.log(that.model.toJSON());
                var data = {
                    post: that.model.toJSON()
                };
                var rendered = that.template(data);
                that.$el.html(rendered);
                that.editor.run();
            };
            this.model.fetch({
                success: handler,
                error: function() {},
                dataType: "json"
            });
            //this.$el.html(postEditTemplate);
            //this.editor.run();
        }
    });
    return PostEditView;
});
