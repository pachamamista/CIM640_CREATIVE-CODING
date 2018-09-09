

function setup() {
 createCanvas(displayWidth, displayHeight);
 strokeWeight(10)
 stroke(255);
}


function draw() {
  facePosX = mouseX;
  facePosY = mouseY;
  background(50, 89, 100);
  bug.move();
  bug.display();
}
/**
function touchMoved() {
 line(mouseX, mouseY, pmouseX, pmouseY);
 return false;
}
**/
