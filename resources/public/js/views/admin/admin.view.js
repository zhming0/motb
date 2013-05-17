define([
    'jquery',         
    'underscore', 
    'backbone',        
    'events',
    'models/admin/auth',
    'text!templates/admin/admin.html'
], function($, _, Backbone, Events, AuthModel, adminTemplate){
    var AdminView = Backbone.View.extend({
        el: 'body',

        initialize: function() {
            var that = this;
            var handler = function() {
                alert("success");
                that.render();
            }
            this.model = new AuthModel(); // Auth
            this.model.fetch({
                success: handler,
                error: function() {
                    Events.trigger("admin:loginNeeded");
                }, 
                dataType: "json"
            });
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
