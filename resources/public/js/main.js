require.config({
    paths: {
        jquery: 'libs/jquery/jquery',
        underscore: 'libs/underscore/underscore',
        backbone: 'libs/backbone/backbone',
        templates: '../templates',
        bootstrap: 'libs/bootstrap/bootstrap',
        text: 'libs/require/text',
        domReady: 'libs/require/domReady'
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
    'motb',
], function(Motb, Events){
    Motb.initialize();
});
