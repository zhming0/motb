define([
    'jquery',         
    'underscore', 
    'backbone',        
    'events',
    'models/admin/auth',
    'views/admin/leftbar/leftbar.view',
    'views/admin/postcontrol/postcontrol.view',
    'views/blog/footer/footer.view',
    'text!templates/admin/admin.html'
], function($, _, Backbone, Events, AuthModel, LeftbarView, PostControlView, FooterView, adminTemplate){
    var AdminView = Backbone.View.extend({
        el: 'body',

        initialize: function() {
            var that = this;
            var handler = function() {
                that.render();
            }
            this.model = new AuthModel(); // Auth
            this.model.fetch({
                success: handler,
                error: function() {
                    Backbone.history.navigate("admin/login", true);
                }, 
                dataType: "json"
            });
        },
        render: function() {
            this.$el.html(adminTemplate);
            (new LeftbarView()).render();
            (new PostControlView()).render();
            (new FooterView()).render();

            Events.on("admin:changeControl", function(msg) {
                if (msg == "post") {
                    (new PostControlView()).render();
                }
            }); 
        }
    });
    return AdminView;
});
