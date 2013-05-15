define([
    'jquery',         
    'underscore', 
    'backbone',        
    'text!templates/admin/admin.html'
], function($, _, Backbone, adminTemplate){
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
                'views/admin/postcontrol/postcontrol.view'
            ], function(LeftbarView, PostControlView) {
                (new LeftbarView()).render();
                (new PostControlView()).render();
            });

            Events.on("admin:changeControl", function(msg) {
            }); 
        }
    });
    return AdminView;
});
