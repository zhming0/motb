define([
    'jquery',         
    'underscore', 
    'backbone',        
    'text!templates/login/login.html'
], function($, _, Backbone, loginTemplate){
    var LoginView = Backbone.View.extend({
        el: '#page',

        events: {
            "click #loginButton": "login"
        },

        render: function() {
            var that = this;
            this.$el.hide('fast', function() {
                that.$el.html(loginTemplate);
                that.$el.show('fast');
            });
        },
        login: function(event) {
            event.preventDefault(); 
            alert("我要登陆啦！>.<");
        }
    });
    return LoginView;
});
