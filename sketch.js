function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill(random(0,255),random(0,255),random(0,255));
  noStroke();
  textSize(windowWidth/15);
  text("EDDY AND BOG GAY",20,windowHeight/2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
