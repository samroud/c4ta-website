let grid = []
let myText = []

//Load font
let myFont
function preload(){
  myFont = loadFont('../font/font.woff')
}

function setup(){
    let canvas = createCanvas(600, 600);
    canvas.parent("p5Div")
  frameRate(60)

  //GIF
  //createLoop({duration:6, gif:true})
  
  //Font
  textFont(myFont)
  textAlign(CENTER)

  //Form
  // input = createInput();
  // input.position(10, 10);
  // button = createButton('submit');
  // button.position(input.x + input.width, 10);
  //button.mousePressed(changeText);;

  //function changeText(){
    //Text
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ.,–!"//input.value();
    console.log(text)
    for (let i=0; i < text.length; i++){
      myText.push(text[i])
    }

    //Grid
    let gridSize = {col: 5, row: 6}
    let cellSize = {width: width/gridSize.col, height:height/gridSize.row}
  
    for(let col = 0; col < gridSize.col; col++){
      for(let row = 0; row < gridSize.row; row++){
        let posX = col * cellSize.width
        let posY = row * cellSize.height
        let pos = {x: posX, y: posY}
        let letter
        if(row == 0){
          letter = myText[col]
        } else if(row == 1){
          letter = myText[col + gridSize.col]
        } else if(row == 2){
          letter = myText[col + gridSize.col * 2]
        } else if(row == 3){
          letter = myText[col + gridSize.col * 3]
        } else if(row == 4){
          letter = myText[col + gridSize.col * 4]
        } else if(row == 5){
          letter = myText[col + gridSize.col * 5]
        }
        grid.push(new Cell(pos, cellSize, letter))
      }
    }
  //}
}

function draw(){
  background(0,0,0,15)

  for (let i = 0; i < grid.length; i++){
    let myCell = grid[i]
    myCell.show()
  }
}
