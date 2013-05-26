define([
    'jquery',         // lib/jquery
    'underscore', // lib/underscore
    'backbone',        // lib/backbone
    'events',
    'bootstrap',
    'domReady',
    'routers/blog',
    'routers/admin',
], function($, _, Backbone, Events, Bootstrap, domReady, Blog, Admin) {

    var MotbRouter = Backbone.Router.extend({
        routes: {
            '': 'defaultAction'
        },
        defaultAction: function() {
            //alert("Navigating to blog");
            Backbone.history.navigate("blog", true);
        }
    }); 

    var initialize = function() {

        Blog.initialize();
        Admin.initialize();
        new MotbRouter();

        Backbone.history.start({pushState: true});

        domReady(function(){
            /*
             * Refer to https://github.com/tbranyen/backbone-boilerplate
             */
            $(document).on("click", 
                "a[href]:not('[data-bypass]')", function(evt) {

                var href = { 
                    prop: $(this).prop("href"), 
                    attr: $(this).attr("href") 
                };

                evt.preventDefault();
                Backbone.history.navigate(href.attr, true);
            });

            Events.on("login-needed", function(msg) {
                Backbone.history.navigate("user/login", true); 
            });
        });
    };
    return {
        initialize: initialize
    };
});
