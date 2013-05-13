define([
    'jquery',         
    'underscore', 
    'backbone',        
    'models/admin/admin',
    'views/admin/leftbar',
    'views/admin/control',
], function($, _, Backbone, AdminModel, LeftbarView, ControlView){
    var AdminView = Backbone.View.extend({
        el: 'body',

        initialize: function() {
            var that = this;
            console.log(this);
            var handler = function() {
                console.log(this);
                that.render();
            }
            this.model = new AdminModel();
            this.model.fetch({
                success: handler,
                error: function() {alert("hey");},
                dataType: "jsonp"
            });
        },
        render: function() {
            /*
             * Hide all element under body
             */
            var leftbarView = new LeftbarView();
            var controlView = new ControlView();
        }
    });
    return AdminView;
});
