define([
    'jquery',         
    'underscore', 
    'backbone',        
    'text!templates/blog/home/home.html'
], function($, _, Backbone, homeTemplate){
    var HomeView = Backbone.View.extend({
        el: '#page',
        initialize: function(){
        },
        render: function() {
            this.$el.html(homeTemplate);
        }
    });
    return HomeView;
});
