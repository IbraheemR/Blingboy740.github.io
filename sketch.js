function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill(random(0,255),random(0,255),random(0,255));
  noStroke();
  textSize(50);
  text("EDDY AND BOG GAY",(windowWidth/2)-200,windowHeight/2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
