canvasHeight = 600
canvasWidth = 600
function setup() {
    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent("p5Div")
  rectMode(CENTER)
}

let angleLine =0
let angleTriangle =0
let angleEllipse =0
let angleArc =0
let angleRect =0

function draw() {
  background(0);
  let numRows = 5
  let numbCols = 5
  let cellSizeWidth = canvasHeight/numbCols
  let cellSizeHeight = canvasWidth/numRows
  
  
  for (let row=0; row < numRows; row+=1){
      for (let col=0; col < numbCols ; col+=1){
        //console.log("Row: " + row +" Col " + col)
        push()
        translate(col*cellSizeWidth + cellSizeWidth/2, row*cellSizeHeight + cellSizeHeight/2)
        fill(0)
        stroke(255)
        if (col % 5 ==0) {
          rotate(angleLine)
          line(-cellSizeWidth/2,-cellSizeHeight/2,cellSizeWidth/2,cellSizeHeight/2)
        } else if (col % 5 ==1) {
          rotate(angleTriangle)
          triangle(-cellSizeWidth/2,-cellSizeHeight/2,0,cellSizeHeight/2,cellSizeWidth/2,-cellSizeHeight/2)
        } else if (col % 5 ==2) {
          rotate(angleEllipse)
          ellipse(0,0,cellSizeWidth,cellSizeHeight)
        } else if (col % 5 ==3) {
          rotate(angleArc)
          arc(0, 0, 80, 80, 2, PI + QUARTER_PI, PIE);
        } else{
          rotate(angleRect)
          rect(0,0,cellSizeWidth,cellSizeHeight)
        }
        pop()
    }
  }
  angleLine +=0.1
  angleTriangle +=0.04
  angleEllipse +=0.03
  angleArc +=0.02
  angleRect +=0.01
}