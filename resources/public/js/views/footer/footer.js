define([
    'jquery',         
    'underscore', 
    'backbone',
    'text!templates/footer/footer.html'
], function($, _, Backbone, footerTemplate){
    var FooterView = Backbone.View.extend({
        el: '#footer',
        initialize: function() {
            this.render();
        },
        render: function() {
            this.$el.html(footerTemplate);
        }
    });
    return FooterView;
});
