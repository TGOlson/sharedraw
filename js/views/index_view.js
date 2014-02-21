App.IndexView = Em.View.extend({
    templateName: 'index',

    didInsertElement: function() {
      // This creates a new DrawingController upon index load
      // Which in turn run the init function, setting the canvas
      App.DrawingController.create();
    }
}) ;
