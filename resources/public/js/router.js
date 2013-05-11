define([
    'jquery',         // lib/jquery
    'underscore', // lib/underscore
    'backbone',        // lib/backbone
    'views/masthead/masthead', 
    'views/footer/footer',
    'views/home/home'
], function($, _, Backbone, MastheadView, FooterView, HomeView){
    var AppRouter = Backbone.Router.extend({
        routes: {
            'content': 'content',
            'test'   : 'test',
            '*action': 'defaultAction',
        },
        
        defaultAction: function() {
            var homeView = new HomeView();
        },
        content: function() {
            alert('content function');
        },
        test: function() {
            this.navigate('content', {trigger: true});
        }
    });
    var initialize = function() {
        var appRouter = new AppRouter();

        var mastheadView = new MastheadView();
        var footer = new FooterView();
        
        //appRouter.on('route:defaultAction', function(actions){
        //    alert("hello");
        //});
        
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});
