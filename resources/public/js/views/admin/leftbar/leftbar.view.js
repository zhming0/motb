define([
    'jquery',         
    'underscore', 
    'backbone',
    'events',
    'text!templates/admin/leftbar/leftbar.html'
], function($, _, Backbone, Events, leftbarTemplate){
    var LeftbarView = Backbone.View.extend({
        el: "#motb-admin-leftbar",

        initialize: function() {
        },

        events: {
            "click .motb-admin-sidenav li": "changeControl",
            "click .motb-admin-sidenav a": "prevent",
        },

        changeControl: function(events) {
            $(".motb-admin-sidenav li").removeClass("active");
            var target = $(events.currentTarget);
            target.addClass("active");
            Events.trigger("admin:changeControl", target.children("a").attr("href"));
            events.preventDefault();
        },
        
        render: function() {
            this.$el.html(leftbarTemplate);
        }
    });
    return LeftbarView;
});
