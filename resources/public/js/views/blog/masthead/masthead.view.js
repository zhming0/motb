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
            $('#search-icon').mouseenter(function() {
                $(this).hide();
                $("#search-input").show("fast");
                $("#search-input").focus();
            });
            $('#search-input').focusout(function(){
                $(this).hide();
                $('#search-icon').fadeToggle("slow");
            });
            $('.user-menu li:not(:last)').click(function() {
                $(".user-menu li").removeClass("active");
                $(this).addClass("active");
            });
        }
    });
    return MastheadView;
});
