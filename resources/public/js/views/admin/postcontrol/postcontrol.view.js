define([
    'jquery',         
    'underscore', 
    'backbone',        
    'events',
    'text!templates/admin/postcontrol/postcontrol.html'
], function($, _, Backbone, Events, postControlTemplate){
    var PostControlView = Backbone.View.extend({
        el: "#control",

        initialize: function() {
            //this.render();
        },

        events: {
            "click .motb-postcontrol-btn-edit": "edit"
        },

        edit: function(evt) {
            require([
                'views/admin/postcontrol/postedit.view'
            ], function(PostEditView){
                (new PostEditView).render();
            });
        },

        render: function() {
            this.$el.html(postControlTemplate);
        }
    });
    return PostControlView;
});
