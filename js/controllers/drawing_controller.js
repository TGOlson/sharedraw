App.DrawingController = Ember.ObjectController.extend({

  color: '#000',
  pixelSize: 8,
  drawing: false,
  dataRef: null,
  ctx: null,

  init: function() {
    this._super()
    this.dataRef = new Firebase('https://sharedraw.firebaseio.com/');
    this.createContext()
    this.setListeners()
  },

  nextDrawing: function(){
    return 1
  },

  createContext: function(){
    var canvas = $("#drawingCanvas").get(0);
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
  },

  actions: {
    new: function() {
      setCanvas()
    },

    clearCanvas: function(){
      dataRef.remove()
    }

  }
});