define([
    'underscore', 
    'backbone',
    'events'
], function(_, Backbone, Events){
    var PostModel = Backbone.Model.extend({
        defaults: {
            test: "我是默认值！",
            date: "1970/7/1",
            content: ''
        },

        idAttribute: "_id",

        initialize: function() {
            this.setDate();
            this.on("change:date", function() {
                this.setDate();
            }, this);
        },

        url: function() {
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

