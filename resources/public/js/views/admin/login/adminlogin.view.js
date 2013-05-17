define([
    'jquery',         // lib/jquery
    'underscore', // lib/underscore
    'backbone',        // lib/backbone
    'models/admin/auth',
    'text!templates/admin/login/adminlogin.html'
], function($, _, Backbone, AuthModel, adminLoginTemplate) {
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
                    alert("Login success");
                    Backbone.history.navigate("admin", true);
                },
                error: function(model, response) {
                    alert(response.responseText);
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
