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
            $("#contact").addClass("active");
            this.$el.slideToggle();
            this.$el.html(contactTemplate);
            this.$el.slideToggle();
        }

    });
    return ContactView;
});
