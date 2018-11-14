function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill(random(0,255),random(0,255),random(0,255));
  text("EDDY AND BOG GAY",100,windowHeight/2);
  for (i=0;i<1000;i++){
    noStroke();
    fill(random(255), random(255), random(255));
    push();
    translate(random(width), random(height));
    rotate(random(TWO_PI));
    winky();
    pop();
  }
  stroke(255);
  strokeWeight(10);
  textSize(windowWidth/11);
  text("EDDY AND BOG GAY",100,windowHeight/2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function winky() {
  ellipse(0, 0, 20)
  ellipse(0, 20, 20)
  rect(0, 0, 60, 20,50)
}