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

        render: function() {
            this.$el.html(postControlTemplate);
        }
    });
    return PostControlView;
});
