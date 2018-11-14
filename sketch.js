function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(random(0,255), random(0,255), random(0,255));
  fill(0);
  rect(windowWidth/2,windowHeight/2,100,500)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
