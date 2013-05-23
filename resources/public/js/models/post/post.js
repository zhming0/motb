define([
    'underscore', 
    'backbone',
    'events'
], function(_, Backbone, Events){
    var PostModel = Backbone.Model.extend({
        defaults: {
            content: '请在这里输入内容'
        },

        idAttribute: "_id",

        initialize: function() {
            if (!this.isNew())
                this.setDate();
            this.on("change", function() {
                this.setDate();
            }, this);
        },

        url: function() {
            if (this.isNew())
                return "/api/posts";
            return "/api/posts/" + this.id;
        },

        setDate: function() {
            var d = new Date(this.get("time"));
            var day = d.getDate();
            var mon = d.getMonth() + 1;
            var year = d.getFullYear();
            this.set("date", year + "/" + mon + "/" + day)
        }
    });
    return PostModel;
});

