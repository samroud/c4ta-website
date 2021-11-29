var instanceSinCos = function( sketch ) {

  sketch.setup = function() {
    let canvas = sketch.createCanvas(600, 600);
    canvas.parent("sincosDiv")
    sketch.frameRate(20)
  }
  

  let a = 0

  sketch.draw = function() {

    sketch.background(0)

    let grid = 25
    let ellipseSize = 15
    let gridSize = (width-ellipseSize*2)/grid
    let radius  = gridSize/2


    //GRID
    for (let row = 0; row < grid; row++){
      for (let col = 0; col < grid; col++){
        sketch.push()
        let posX = cos(row+a) * radius
        let posY = sin(col+a) * radius
        posX+=radius+ellipseSize
        posY+=radius+ellipseSize
        sketch.translate(col*gridSize, row*gridSize)
        
        sketch.noStroke()
        sketch.fill(255)
        sketch.ellipse(posX,posY,ellipseSize)
        sketch.pop()
      }
      a += PI/360
    }

    
  }
};
var myp5 = new p5(instanceSinCos);