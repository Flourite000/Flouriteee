function setup() {
    createCanvas(700,500);
     background("black");
  }
  
  function draw() {
  
    stroke("blue");
    fill("whithe");
    
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 25, 25);
    }
  }