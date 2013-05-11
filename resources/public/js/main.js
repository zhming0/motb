require.config({
    paths: {
        jquery: 'libs/jquery',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone',
        templates: '../templates',
        bootstrap: 'libs/bootstrap'
    },
    
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'bootstrap': {
            deps: ["jquery"],
            exports: "$.fn.popover"
        }
    }

});

require([
    'app',
], function(App){
    App.initialize();
});
