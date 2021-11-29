var instanceTextToPoint = function( sketch ) {


let font;
  sketch.preload = function() {
    font = sketch.loadFont('../font/font.otf')
  };

  let points;
  let bounds;
  sketch.setup = function() {
    let canvas = sketch.createCanvas(600, 600);
      canvas.parent("textToPointDiv")
      sketch.frameRate(30)
  }

  let a = 0;

  sketch.draw = function() {
    sketch.background(0);

    let fontPoints = font.textToPoints('S', 0, 0, 500, {
      sampleFactor: 1,
      simplifyThreshold: 0
    });

    for (let i = 0; i < fontPoints.length; i++) {
      let p = fontPoints[i];
      let posX = p.x;
      let posY = p.y;
      sketch.push()
      sketch.stroke(255)
      // let mapX = map(cos(a), -1, 1, -10, 10);
      // let mapY = map(sin(a), -1, 1, -10, 10);
      // posX += mapX*i/100
      // posY += mapY*i/100
      sketch.translate(posX + width/2 - 160, posY + height/1.15, 1)
      sketch.ellipse(cos(a * i) * 55, sin(a * i) , 2)
      sketch.pop()
    }
    a += TAU/720
    
  }
};
var myp5 = new p5(instanceTextToPoint);