define([
    'jquery',         
    'underscore', 
    'backbone',        
    'views/blog/masthead/masthead.view',
    'views/blog/footer/footer.view',
    'text!templates/blog/blog.html'
], function($, _, Backbone, MastheadView, FooterView, blogTemplate) {
    var BlogView = Backbone.View.extend({
        el: "body",
        render: function() {
            this.$el.html(blogTemplate);
            (new FooterView()).render();
            (new MastheadView()).render();
        }
    });
    return BlogView;
});
