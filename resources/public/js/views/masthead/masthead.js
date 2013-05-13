define([
    'jquery',         
    'underscore', 
    'backbone',
    'text!templates/masthead/masthead.html'
], function($, _, Backbone, mastheadTemplate){
    var MastheadView = Backbone.View.extend({
        el: '#masthead',
        initialize: function() {
            this.render();
        },
        render: function() {
            this.$el.html(mastheadTemplate);
        }
    });
    return MastheadView;
});
