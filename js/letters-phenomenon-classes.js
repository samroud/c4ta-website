class Cell{
    constructor(pos, cellSize, letter){
      this.pos = pos
      this.size = cellSize
      this.letter = letter
      this.myLetters = []
      this.myLetters.push(new Letter(this.size, this.letter))
    }
    show(){
      push()
      translate(this.pos.x, this.pos.y)
      noFill()
      noStroke()
      //stroke(255)
      rect(0, 0, this.size.width, this.size.height)
      this.myLetters[0].show()
      pop()
    }
}

class Letter{
    constructor(size, letter){
      this.size = size
      this.letter = letter
      this.posX = this.size.width/2
      this.posY = this.size.height/2
      this.a = 0
      this.a2 = 0
      this.tempo = random(90, 180) + 90
      this.tempo2 = random(90) + 90
      this.myAnimations = ["rotation", "scale", "translateX", "translateY", "translateXY", "translateXY2", "3D", "3D2"]
      this.animationSelect = this.myAnimations[round(random(0,this.myAnimations.length-1))]
    }
    show(){
      push()
      translate(this.posX,this.posY)
      fill(0)
      textSize(50)
      this.animation()
      noStroke()
      fill(255)
      text(this.letter, 0, 19)
      pop()
    }

    animation(){
      if (this.animationSelect == "rotation"){
         rotate(this.a2)
      } else if (this.animationSelect == "scale"){
        let m = map(cos(this.a), -1, 1, -2, 2);
        scale(m, m)
      } else if (this.animationSelect == "translateX"){
        let m = map(cos(this.a), -1, 1, this.size.width/4, this.size.width/4 *3);
        //console.log(sin(this.a))
        this.posX = m
      } else if (this.animationSelect == "translateY"){
        let m = map(cos(this.a), -1, 1, this.size.height/4, this.size.height/4 *3);
        //console.log(sin(this.a))
        this.posY = m
      } else if (this.animationSelect == "translateXY"){
        let m = map(cos(this.a), -1, 1, this.size.width/4, this.size.width/4 *3);
        //console.log(sin(this.a))
        this.posX = m
        this.posY = m
      } else if (this.animationSelect == "translateXY2"){
        let m = map(sin(this.a), -1, 1, this.size.height/4 *3, this.size.height/4);
        //console.log(sin(this.a))
        this.posX = m
        this.posY = -m + this.size.height
        rotate(this.a)
      } else if (this.animationSelect == "3D"){
        let m = map(cos(this.a), -1, 1, -2, 2);
        let m2 = map(sin(this.a), -1, 1, -2, 2);
        scale(m, m2)
      } else if (this.animationSelect == "3D2"){
        let m = map(cos(this.a), -1, 1, -2, 2);
        let m2 = map(sin(this.a), -1, 1, -2, 2);
        scale(m2, m)
        rotate(this.a)
    }
      this.a += TAU/this.tempo
      this.a2 += TAU/this.tempo2
    }

}