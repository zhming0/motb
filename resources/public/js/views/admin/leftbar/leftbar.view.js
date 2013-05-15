define([
    'jquery',         
    'underscore', 
    'backbone',
    'events',
    'text!templates/admin/leftbar/leftbar.html'
], function($, _, Backbone, Events, leftbarTemplate){
    var LeftbarView = Backbone.View.extend({
        el: "#leftbar",

        initialize: function() {
            //this.render();
        },

        events: {
            "click .motb-admin-sidenav li": "changeControl"
        },

        changeControl: function(events) {
            $(".motb-admin-sidenav li").removeClass("active");
            $(events.currentTarget).addClass("active");
            Events.trigger("admin:changeControl", "someone");
            events.preventDefault();
        },

        render: function() {
            this.$el.html(leftbarTemplate);
            
        }
    });
    return LeftbarView;
});
