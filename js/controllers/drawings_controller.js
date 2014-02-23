App.DrawingsController = Ember.ArrayController.extend({

  color: '#000',
  pixelSize: 8,
  drawing: false,
  dataRef: new Firebase('https://sharedraw.firebaseio.com/'),
  ctx: null,

  actions: {
    clearCanvas: function(){
      this.dataRef.remove()
    }
  },

  setCanvas: function() {
    console.log('creating')
    this.createContext()
    this.setListeners()
  },

  createContext: function(){
    console.log('looking for canvas')
    var canvas = $("#drawingCanvas").get(0);
    console.log(canvas)
    this.ctx = canvas.getContext("2d");
  },

  setListeners: function(){
    var self = this;

    $('#drawingCanvas').on('mousedown', function(e) {
      self.drawing = true;
      e.preventDefault();
    });

    $('#drawingCanvas').on('mousemove', function(e){
      if(self.drawing){
        var x = Math.floor(e.offsetX / 8) * 8
        var y = Math.floor(e.offsetY / 8) * 8
        self.dataRef.child(x + ':' + y).set(self.color)
      }
    });

    $('#drawingCanvas').on('mouseup mouseout', function() {
      self.drawing = false
    });

    $('body').on('click', '#color-samples li', function(){
      self.color = this.style['background-color']
    })

    this.dataRef.on('child_added', function(snapshot) {
      var coords = snapshot.name().split(':')
      var color  = snapshot.val()
      self.drawFromCoords(coords[0], coords[1], color)
    })
  },

  drawFromCoords: function(x, y, color){
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, this.pixelSize, this.pixelSize);
  }
});
