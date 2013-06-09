define([
    'jquery',         // lib/jquery
    'underscore', // lib/underscore
    'backbone',        // lib/backbone
    'events',
    'models/admin/auth',
    'text!templates/admin/login/adminlogin.html'
], function($, _, Backbone, Events, AuthModel, adminLoginTemplate) {
    var AdminLoginView = Backbone.View.extend({
        el: "body", 

        initialize: function() {
            this.model = new AuthModel();
        },

        events: {
            'click #login': 'login'
        },

        login: function(evt) {
            evt.preventDefault();
            var uname = $('#username').val();
            var passwd = $('#password').val();
            var that = this;
            this.model.save({
                username: uname,
                password: passwd,
            }, {
                success: function() {
                    Backbone.history.navigate("admin", true);
                    that.undelegateEvents();
                },
                error: function(model, response) {
                    alert("error " + response.responseText);
                },
                dataType: "json"
            });
        },

        render: function() {
            $("body").removeClass().addClass("admin-login");
            this.$el.html(adminLoginTemplate);
        }
    });
    return AdminLoginView;
});
