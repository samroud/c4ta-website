var instanceClock = function( sketch ) {

  let gridSize = 9*3
  let a = 0
  

  sketch.setup = function() {
    let canvas = sketch.createCanvas(600, 600);
    canvas.parent("clockDiv")
    sketch.frameRate(30)
    sketch.noStroke()
  }

  sketch.draw = function() {
    sketch.background(255)


    //SCALE
    let minDia = 1
    let maxDia = gridSize
    let factorX = sketch.cos(a)
    let factorY = sketch.sin(a)
    sketch.translate(width/2,height/2)
    let scaledDia = sketch.map(factorX, -1, 1, minDia, maxDia)
    sketch.scale(scaledDia)

    //GRID
    let grid = width/gridSize
    sketch.translate(-width/2,-height/2)
    for (let row = 0; row < gridSize+1; row++){
      for (let col = 0; col < gridSize + 1; col++){
        sketch.push()
        sketch.translate(grid*col - grid/2, grid*row - grid/2)
      
        
        if (col%2==0 && row%2==1){
          sketch.fill(255,255,0)
          sketch.ellipse(0,0,grid)
          sketch.fill(0,255,255)
          sketch.arc(0, 0, grid, grid, 0, (PI-grid/2)*factorY);
          } else if (col%2==1 && row%2==0){
            sketch.fill(255,255,0)
            sketch.ellipse(0,0,grid)
            sketch.fill(0,255,255)
            sketch.arc(0, 0, grid, grid, PI*1.5, (PI-grid/2)*factorX);
          } else {
            sketch.fill(255,0,255)
            sketch.ellipse(0,0,grid)
            sketch.fill(0,255,125)
            sketch.arc(0, 0, grid, grid, PI*1.5, (PI-grid/2)*-factorY);
          }
      
        sketch.pop()
      }
    }
    
    const increment = TAU/360
    a += increment

  
  }

};
var myp5 = new p5(instanceClock);