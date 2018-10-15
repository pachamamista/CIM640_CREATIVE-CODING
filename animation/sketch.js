
var xPos = 0;
var yPos = 0;
var ballSize = 20;

var trigger = false;

var speed = 10;

function setup() {
  // put setup code here
createCanvas(600,600);
//yPos = width/2;   // took this out to make ball start at 0,0

}

function draw() {
  // put drawing code here
  background(255);

ellipse(xPos, yPos, ballSize, ballSize);

if(trigger == false){
//bounces up and down based on speed
// yPos = yPos + speed;
  xPos+=speed;

//diagonal
  yPos+=speed;

  } else{
    // yPos = yPos - speed;
      xPos-=speed;
    //diagonal
      yPos-=speed;
}

if(xPos > height){
  trigger = true;
}

if (xPos < 0){
  trigger = false;
}

  //we have to set up a trigger that says when you reach a point, you do another state so
  //ball moves in another direction

}
