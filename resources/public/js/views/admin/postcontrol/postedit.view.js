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
        el: "#main",

        initialize: function(model) {
            this.model = model;
            var that = this;
            domReady(function(){
                that.converter = new Markdown.getSanitizingConverter();
                that.editor = new Markdown.Editor(that.converter);
            });
        },

        events: {
            'click #cancel': 'cancelEdit',
            'click #publish': 'publish'
        },

        cancelEdit: function() {
            this.undelegateEvents();
            //Events.trigger('postedit:done');
        },

        publish: function() {
            var that = this;
            this.model.set("name", $("#title").val());
            this.model.set("content", $("#wmd-input").val());
            this.model.save({}, {
                success: function() {
                    that.cancelEdit();
                }, error: function() {
                    alert("Error");
                }
            });
        },

        template: _.template(postEditTemplate),

        render: function() {
            var that = this;
            var handler = function() {
                var data = {
                    post: that.model.toJSON()
                };
                var rendered = that.template(data);
                that.$el.html(rendered);
                that.editor.run();
            };
            if (this.model.isNew()) {
                handler();
            } else {
                this.model.fetch({
                    success: handler,
                    error: function() {},
                    dataType: "json"
                });
            }
        }
    });
    return PostEditView;
});
