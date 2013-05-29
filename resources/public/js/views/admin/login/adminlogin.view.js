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
            'click #motb-adminlogin-loginButton': 'login'
        },

        login: function(evt) {
            evt.preventDefault();
            var uname = $('#motb-adminlogin-inputUsername').val();
            var passwd = $('#motb-adminlogin-inputPassword').val();
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
            this.$el.html(adminLoginTemplate);
        }
    });
    return AdminLoginView;
});
