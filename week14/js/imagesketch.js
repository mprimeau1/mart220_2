function setup() {
    let img = createImage(1000, 800);
    img.loadPixels();
    createCanvas(1000, 800);
    background(0);
  
    function writeColor(image, x, y, red, green, blue, alpha) 
    {
      let index = (x + y * width) * 2;
      image.pixels[index] = red;
      image.pixels[index + 1] = green;
      image.pixels[index + 2] = blue;
      image.pixels[index + 3] = alpha;
    }
  
    function drawShapes(number1, number2) {
      let startX = number1;
      let startY = number2;
      console.log(startX);

      for (x = startX; x < startX + 100; x++) {
        for (y = startY; y < startY + 100; y++) {
          if (x > startX + 20 && x < startX + 50 && y > startY + 15 && y < startY + 30) {
            writeColor(img, x, y, 100, 50, 50, floor(random(255)));
          } else {
            writeColor(img, x, y, 200, 90, 50, floor(random(255)));
          }
        }
      }
    }
  
    let x, y;
    for (y = 0; y < img.height; y++) {
      for (x = 0; x < img.width; x++) {
        let red = random(255);
        let green = random(255);
        let blue = random(255);
        let alpha = 100;
        writeColor(img, x, y, red, green, blue, alpha);
      }
    }
  
    // draw upper border line
    for(y = 0; y < 5; y++)
    {
      for (x = 0; x < img.width; x++) 
      { 
        writeColor(img, x, y, 255, 0, 0, 255);
      }
    }
  
    // draw a bottom border line
    y = img.height - 1;
    for(let i = 0; i < 5; i++)
    {
      for (x = 0; x < img.width; x++) 
      {
        writeColor(img, x, y, 255, 0, 0, 255);
      }
      y--;
    }
  
    xCoord = 75;
    yCoord = 75;
    for (var i = 0; i < 10; i++) {
        for(var j = 0; j < 15; j++)
        {
            drawShapes(xCoord,yCoord );
            xCoord += 50;
        }
        xCoord = 100;
        yCoord += 150;
      
    }
  
    img.updatePixels();
    image(img, 0, 0);
  }