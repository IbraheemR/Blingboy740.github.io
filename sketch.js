function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255,255,100);
  fill(random(0,255),random(0,255),random(0,255));
  noStroke();
  textSize(windowWidth/10);
  text("EDDY AND BOG GAY",(windowWidth/2)-300,windowHeight/2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
