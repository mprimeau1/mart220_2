var mainColor =  255;
var strokeColor = 255;

function setup() {
    createCanvas(1000, 800);
    background('black');
    frameRate(40);
    strokeWeight(5);
    rectMode(CORNER);
}
function draw() {
    push();
  
    stroke(random(strokeColor),random(strokeColor),random(strokeColor),random(100));
    fill(random(mainColor),random(mainColor),random(mainColor), random(50));

    var size= random(250);
    var size2= random(250);
    circle(random(width), random(height), size, size2);
    
    size= random(150);
    size2= random(150);
    rect(random(width), random(height), size, size2);

    size= random(100);
    size2= random(100);
    square(random(width), random(height), size,size2);

    if (frameCount % 4 == 0) {
        mainColor = 255 - mainColor; 
        strokeColor = 255 - strokeColor; 
    }

    if (frameCount > 80) {
        noLoop();
    }
    
    pop();
    
    
    push();
    fill('pink');
    stroke('pink');
    strokeWeight(10);
    
    rect(50, 50, 25, 200);
    rect(150, 50, 25, 200);
    line(75, 50, 110, 150);
    line(150, 50, 110, 150);
    
    pop();
    
    push();
    
    stroke('pink');
    fill('pink');
    strokeWeight(10);
    
    rect(250, 50, 25, 200);
    ellipse(300, 90, 100, 100);

    
    pop();

    

}