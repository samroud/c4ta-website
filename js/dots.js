function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent("p5Div")
  frameRate(20)
  // createLoop({duration:3, gif:true})
}

let a = 0

function draw() {

  background(0)

  let grid = 25
  let ellipseSize = 15
  let gridSize = (width-ellipseSize*2)/grid
  let radius  = gridSize/2


  //GRID
  for (let row = 0; row < grid; row++){
    for (let col = 0; col < grid; col++){
      push()
      let posX = cos(row+a) * radius
      let posY = sin(col+a) * radius
      posX+=radius+ellipseSize
      posY+=radius+ellipseSize
      translate(col*gridSize, row*gridSize)
      
      noStroke()
      fill(255)
      ellipse(posX,posY,ellipseSize)
      pop()
    }
    a += PI/360
  }

  
}