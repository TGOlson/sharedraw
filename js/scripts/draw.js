
Draw = {

  color: '#000',
  pixelSize: 8,
  drawing: false,
  dataRef: null,
  ctx: null,

  setCanvas: function() {
    this.dataRef = new Firebase('https://sharedraw.firebaseio.com/');
    this.createContext()
    this.setListeners()
  },

  createContext: function(){
    var canvas = $("#drawingCanvas").get(0);
    this.ctx = canvas.getContext("2d");
  },

  setListeners: function(){
    $('#drawingCanvas').on('mousedown', function(e) {
      Draw.drawing = true;
      e.preventDefault();
    });

    $('#drawingCanvas').on('mousemove', function(e){
      if(Draw.drawing){
        var x = Math.floor(e.offsetX / 8) * 8
        var y = Math.floor(e.offsetY / 8) * 8
        Draw.dataRef.child(x + ':' + y).set(Draw.color)
      }
    });

    $('#drawingCanvas').on('mouseup mouseout', function() {
      Draw.drawing = false
    });

    $('body').on('click', '#color-samples li', function(){
      Draw.color = this.style['background-color']
    })

    this.dataRef.on('child_added', function(snapshot) {
      var coords = snapshot.name().split(':')
      var color  = snapshot.val()
      Draw.drawFromCoords(coords[0], coords[1], color)
    })
  },

  drawFromCoords: function(x, y, color){
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, this.pixelSize, this.pixelSize);
  }
}

$(function(){
  Draw.setCanvas()
})