define([
    'jquery',         
    'underscore', 
    'backbone',
    'text!templates/blog/masthead/masthead.html'
], function($, _, Backbone, mastheadTemplate){
    var MastheadView = Backbone.View.extend({
        el: '#masthead',
        initialize: function() {
            //this.render();
        },
        render: function() {
            this.$el.html(mastheadTemplate);
            $('#inputButton').mouseenter(function() {
                $(this).hide();
                $("#searchInput").show("fast");
                $("#searchInput").focus();
            });
            $('#searchInput').focusout(function(){
                $(this).hide();
                $('#inputButton').show("slow");
            });
        }
    });
    return MastheadView;
});
