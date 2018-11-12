function setup() {
  createCanvas(1000, 1000);
}

function draw() {
    noStroke();
    
    for (i=0;i<10000;i++){
            fill(random(255), random(255), random(255));
            push();
            translate(random(width), random(height));
            rotate(random(TWO_PI));
            winky();
            pop();
    }
}

function winky() {
    ellipse(0, 0, 20)
    ellipse(0, 20, 20)
    rect(0, 0, 60, 20)
}