define([
    'jquery',         // lib/jquery
    'underscore', // lib/underscore
    'backbone',        // lib/backbone
    'router',
    'bootstrap'
], function($, _, Backbone, Router, Bootstrap){
    var initialize = function() {
        Router.initialize();
    };
    return {
        initialize: initialize
    };
});
