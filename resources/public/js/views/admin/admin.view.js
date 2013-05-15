define([
    'jquery',         
    'underscore', 
    'backbone',        
    'events',
    'text!templates/admin/admin.html'
], function($, _, Backbone, Events, adminTemplate){
    var AdminView = Backbone.View.extend({
        el: 'body',

        initialize: function() {
            var that = this;
            var handler = function() {
                //that.render();
            }
            /*this.model = new AdminModel(); // Auth
            this.model.fetch({
                success: handler,
                error: function() {alert("hey");},
                dataType: "jsonp"
            });*/
        },
        render: function() {
            this.$el.html(adminTemplate);
            require([
                'views/admin/leftbar/leftbar.view',
                'views/admin/postcontrol/postcontrol.view',
                'views/blog/footer/footer.view'
            ], function(LeftbarView, PostControlView, FooterView) {
                (new LeftbarView()).render();
                (new PostControlView()).render();
                (new FooterView()).render();
            });

            Events.on("admin:changeControl", function(msg) {
                if (msg == "post") {
                    require([
                        'views/admin/leftbar/leftbar.view'
                    ], function(PostControlView){
                        (new PostControlView()).render();
                    });
                }
            }); 
        }
    });
    return AdminView;
});
