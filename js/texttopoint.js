let font;
function preload() {
  font = loadFont('../font/font.woff')
}

let points;
let bounds;
function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("p5Div")
  frameRate(30)
}

let a = 0;

function draw() {
  background(0);

  let fontPoints = font.textToPoints('S', 0, 0, 500, {
    sampleFactor: 1,
    simplifyThreshold: 0
  });

  for (let i = 0; i < fontPoints.length; i++) {
    let p = fontPoints[i];
    let posX = p.x;
    let posY = p.y;
    push()
    stroke(255)
    // let mapX = map(cos(a), -1, 1, -10, 10);
    // let mapY = map(sin(a), -1, 1, -10, 10);
    // posX += mapX*i/100
    // posY += mapY*i/100
    translate(posX + width/2 - 160, posY + height/1.15, 1)
    ellipse(cos(a * i) * 55, sin(a * i) , 2)
    pop()
  }
  a += TAU/720
  
}