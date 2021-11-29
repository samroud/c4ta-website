class Cell{
    constructor(pos, size) {
      this.pos = pos
      this.size = size
      this.subGrid = new SubGrid(this.size)
    }
    show(){
      noStroke()
      fill(0)
      rect(this.pos.x,this.pos.y,this.size)
      push()
      translate(this.pos.x,this.pos.y)
      this.subGrid.show()
      pop()
    }
  }
  
  class SubGrid{
    constructor(size){
      this.size = size
      this.cells = []
      this.rowCols = round(random(2,20))
      this.cellSize = this.size/this.rowCols
      
      for (let col = 0; col < this.rowCols; col += 1){
        for (let row = 0; row < this.rowCols; row += 1){
          let posX = col * this.cellSize
          let posY = row * this.cellSize
          //this.cells.push({x: posX, y: posY})
          this.cells.push(new SubCell(posX, posY, this.cellSize))
        }
      }
    }
    show(){
      for (let i = 0; i < this.cells.length; i += 1){
        let currentCell = this.cells[i]
        rect(currentCell.pos.x,currentCell.pos.y,this.cellSize)
        this.cells[i].show()
      }
    }
  }

  class SubCell{
      constructor(posX, posY, size){
        this.pos = {x: posX, y: posY}
        this.dia = size
        this.radius = this.dia/2
        this.a = 0
        this.aInc = TAU/random(360, 720)
      }
      show(){
          let currentRadius = map(sin(this.a), 0, 1, 0, this.dia)
          push()
          translate(this.pos.x + this.dia/2, this.pos.y + this.dia/2)
          fill(cos(this.a)*255,sin(this.a)*255,255)
          noStroke()
          ellipse(0, 0, currentRadius)
          pop()
          this.a = (this.a + this.aInc) % TAU
      }
  }