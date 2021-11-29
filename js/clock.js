
let gridSize = 9*3
let a = 0

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("p5Div")
  frameRate(30)
  noStroke()
}

function draw() {
  background(0)


  //SCALE
  let minDia = 1
  let maxDia = gridSize
  let factorX = cos(a)
  let factorY = sin(a)
  translate(width/2,height/2)
  let scaledDia = map(factorX, -1, 1, minDia, maxDia)
  scale(scaledDia)

  //GRID
  let grid = width/gridSize
  translate(-width/2,-height/2)
  for (let row = 0; row < gridSize+1; row++){
    for (let col = 0; col < gridSize + 1; col++){
      push()
      translate(grid*col - grid/2, grid*row - grid/2)
    
      
      if (col%2==0 && row%2==1){
        fill(255,255,0)
          ellipse(0,0,grid)
          fill(0,255,255)
          arc(0, 0, grid, grid, 0, (PI-grid/2)*factorY);
        } else if (col%2==1 && row%2==0){
          fill(255,255,0)
          ellipse(0,0,grid)
          fill(0,255,255)
          arc(0, 0, grid, grid, PI*1.5, (PI-grid/2)*factorX);
        } else {
          fill(255,0,255)
          ellipse(0,0,grid)
          fill(0,255,125)
          arc(0, 0, grid, grid, PI*1.5, (PI-grid/2)*-factorY);
        }
     
      pop()
    }
  }
  
  const increment = TAU/360
  a += increment

 
}