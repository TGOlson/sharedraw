App.DrawingsView = Em.View.extend({

    didInsertElement: function() {
      // This creates a new DrawingController upon index load
      // And then calls the setCanvas function, ensuring the canvas exists
      var controller = App.DrawingsController.create();
      controller.setCanvas()
    }
}) ;
