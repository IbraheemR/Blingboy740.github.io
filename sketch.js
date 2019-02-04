let points = [];
let start = false;
let s = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,200,50);
}

function draw() {
  fill(0);
  stroke(0);
  strokeWeight(1);
  textSize(25);
  text("Press 'k' to clear canvas",10,20);
  if (start) {
    points.push(createVector(mouseX, mouseY));
  }
  stroke(255);
  strokeWeight(1);
  noFill();
  beginShape();
  for (let i = 0; i < points.length; i++) {
    let xcord = points[i].x;
    let ycord = points[i].y;
    vertex(xcord, ycord);
  }
  endShape();
  if (s < 1) {
    s = 1
  }



}

function mousePressed() {
  start = true;
  points = [];
}

function mouseReleased() {
  start = false;
}

function keyPressed() {
  if (keyCode == 75) {
    background(255);
    points = [];

  }
}
function keyReleased() {
  if (keyCode == 75) {
    background(255,200,50)
    points = [];
    fill(0);
    stroke(0);
    strokeWeight(1);
    textSize(25);
    text("Press 'k' to clear canvas",10,20);

  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
  background(0);
  fill(0);
  stroke(0);
  strokeWeight(1);
  textSize(25);
  text("Press 'k' to clear canvas",10,20);
}
