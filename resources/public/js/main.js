require.config({
    baseURL: "/js",

    paths: {
        jquery: 'libs/jquery/jquery',
        underscore: 'libs/underscore/underscore',
        backbone: 'libs/backbone/backbone',
        templates: '../templates',
        bootstrap: 'libs/bootstrap/bootstrap',
        text: 'libs/require/text',
        domReady: 'libs/require/domReady',
        markdownConverter: 'libs/pagedown/Markdown.Converter',
        markdownEditor: 'libs/pagedown/Markdown.Editor',
        markdownSanitizer: 'libs/pagedown/Markdown.Sanitizer',
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
        },
        'markdownConvertor': {
            exports: "Markdown.Converter"
        },
        'markdownEditor': {
            deps: ["markdownConverter"],
            exports: "Markdown.Editor"
        },
        'markdownSanitizer': {
            deps: ["markdownConverter"],
            exports: "Markdown.getSanitizingConverter"
        },
    }

});

require([
    'motb',
], function(Motb, Events){
    Motb.initialize();
});
