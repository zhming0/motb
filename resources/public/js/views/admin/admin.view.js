define([
    'jquery',         
    'underscore', 
    'backbone',        
    'events',
    'models/admin/auth',
    'views/admin/leftbar/leftbar.view',
    'text!templates/admin/admin.html'
], function($, _, Backbone, Events, AuthModel, LeftbarView, adminTemplate){
    var AdminView = Backbone.View.extend({
        el: 'body',

        initialize: function() {
            this.model = new AuthModel(); // Auth
        },

        teardown: function() {
            this.off();
        },

        render: function() {
            var that = this;
            var handler = function() {
                $("body").removeClass().addClass("admin");
                that.$el.html(adminTemplate);
                that.trigger("authorized");
                //(new LeftbarView()).render();
            };

            this.model.fetch({
                success: handler,
                error: function() {
                    Backbone.history.navigate("admin/login", true);
                }, 
                dataType: "json"
            });
        }
    });
    return AdminView;
});
