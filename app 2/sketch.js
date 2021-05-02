let textInfo;

var organics = [];
var change, colors;
var dots = "connect the dots...";
var anything = "or just doodle whatever you want.";
var creative = "get creative, can you ~disrupt~ this duck?";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(247, 251, 198);
  frameRate(15);
  ducky = loadImage(
    "https://cdn.glitch.com/f22d7c01-a796-4c07-9ba0-86881efb24e7%2FDucky.png?v=1619223404331"
  );

  change = 0;

  textInfo = new Words();

  colors = [
    color(237, 246, 125, 50),
    color(248, 150, 216, 50),
    color(202, 125, 249, 50),
    color(114, 76, 249, 50),
    color(86, 69, 146, 50)
  ];
}

function draw() {
  circle.organic;
  textInfo.display()

  image(ducky, 100, 200);
  ducky.resize(10, 10);

  for (var i = 0; i < organics.length; i++) {
    organics[i].show(change);
  }

  //makes the petals move
  change += 0.05;

  for (var i = 0; i < 10; i++) {
    organics.push(
      new Organic(
        i * random(2),
        mouseX,
        mouseY,
        i / 2,
        i * random(10),
        colors[floor(random(5))]
      )
    );
  }
}

class Words {
  display() {
    textSize(60);
    fill(114, 76, 249, 100);
    textFont("Patua One");
    text(dots, 100, 100);

    textSize(20);
    fill(114, 76, 249, 100);
    textFont("Patua One");
    text(anything, 100, 125);

    textSize(20);
    fill(114, 76, 249, 50);
    textFont("Patua One");
    text(creative, 100, 175);
  }
}

//organic shapes created with tutorial from medium post linked below
//https://medium.com/creative-coding-space/meet-blobby-in-p5-js-5d9d99232400
function Organic(radius, xpos, ypos, roughness, angle, color) {
  this.radius = radius;
  this.xpos = xpos;
  this.ypos = ypos;
  this.roughness = roughness;
  this.angle = angle;
  this.color = color;

  this.show = function(change) {
    noStroke();
    fill(this.color);
    push();
    translate(xpos, ypos);
    rotate(this.angle + change);
    beginShape();
    var off = 0;
    for (var i = 0; i < 6; i += 0.05) {
      var offset = map(
        noise(off, change),
        0,
        1,
        -this.roughness,
        this.roughness
      );
      var r = this.radius + offset;
      var x = r * cos(i);
      var y = r * sin(i);
      vertex(x, y);
      off += 0.5;
    }
    endShape();
    pop();
  };
}