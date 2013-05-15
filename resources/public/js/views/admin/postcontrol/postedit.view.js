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

        initialize: function() {
            var that = this;
            domReady(function(){
                that.converter = new Markdown.getSanitizingConverter();
                that.editor = new Markdown.Editor(that.converter);
            });
        },

        events: {
        },

        render: function() {
            this.$el.html(postEditTemplate);
            this.editor.run();
        }
    });
    return PostEditView;
});
