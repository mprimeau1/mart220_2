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
}