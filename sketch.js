function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(random(0,255), random(0,255), random(0,255));
  fill(0);
  translate(width/2, height/2);
  ellipse(0, 0, 50);
  ellipse(0, 50, 50);
  rect(0, 0, 50, 300);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
