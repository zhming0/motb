define([
    'jquery',         // lib/jquery
    'underscore', // lib/underscore
    'backbone',        // lib/backbone
    'text!templates/blog/contact/contact.html'
], function($, _, Backbone, contactTemplate) {
    var ContactView = Backbone.View.extend({
        el: "#page",
        
        template: contactTemplate,

        render: function() {
            this.$el.slideToggle();
            $("#masthead ul li").removeClass("active");
            $("#motb-blog-nav-contact").addClass("active");
            this.$el.html(contactTemplate);
            this.$el.slideToggle();
        }

    });
    return ContactView;
});
