// Reference: https://github.com/thomasdavis/backboneboilerplate/blob/gh-pages/js/vm.js
// I didn't use it
define([
    'jquery',
    'underscore',
    'backbone',
], function($, _, Backbone){
    var views = {};
    var create = function (name, View, options) {
        // View clean up isn't actually implemented yet but will simply call .clean, .remove and .unbind
        if(typeof views[name] !== 'undefined') {
            views[name].undelegateEvents();
            if(typeof views[name].clean === 'function') {
                views[name].clean();
            }
        }
        var view = new View(options);
        views[name] = view;
        return view;
    };
    
    return {
        create: create
    };
});
