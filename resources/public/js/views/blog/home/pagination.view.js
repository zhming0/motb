define([
    'jquery',
    'underscore', 
    'backbone',
    'events',
    'text!templates/blog/home/pagination.html'
], function($, _, Backbone, Events, paginationTemplate){

    var PaginationModel = Backbone.Model.extend({
        url: "/api/posts/count",
    });

    var PagenationView = Backbone.View.extend({

        el: '#pagination',

        initialize: function(options) {
            this.currentPage = options.currentPage ? options.currentPage : 0;
            this.pageSize = options.pageSize ? options.pageSize : 0;
            this.model = new PaginationModel();
        },

        template: _.template(paginationTemplate),
        
        render: function() {
            var that = this;
            var handler = function() {
                var tmp = that.model.toJSON().count; 
                var data = {
                    currentPage: that.currentPage,
                    pageCount: Math.ceil(tmp / that.pageSize)
                };
                var rendered = that.template(data);
                that.$el.html(rendered);
            };
            this.model.fetch({
                success: handler, 
                error: function() {
                    alert("Can't get pagination");
                },
                dataType: "json"
            });
        }

    });
    return PagenationView;
});
