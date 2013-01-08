IndexView = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        // Compile the template using underscore
//        var template = _.template( $("#index_template").html(), {} );
//        // Load the compiled HTML into the Backbone "el"
//        this.$el.html( template );
    }
});

ApplicationRouter = Backbone.Router.extend({
    routes: {
        "" : "index",
        "#index" : "index"
    },
    index: function (action) {
        var index_view = new IndexView({ el: $("#index_container") });
    }
});

var applicationRouter = new ApplicationRouter();

Backbone.history.start();

