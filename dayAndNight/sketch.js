var sun;
var moon;
var bgColor=('yellow');

var r = 255;
var g = 255;
var b = 255;

var cX = 50;
var cY = 50;
var cEdge = 20;

var rectX = 50;
var rectY = 75;
var rectSize = 100;

function preload(){
//preload goes above setup and will be used and loaded before project starts
//this loads our image into memory
//find the image and keep it there til I want to use it

sun = loadImage('assets/sun.png');
//use png because you can use transparency
moon = loadImage('assets/moon.png');

}

function setup() {
  // put setup code here
  createCanvas(700,400);
}

function draw() {
  // put drawing code here
  frameRate(3);
  background(r,g,b);
console.log("mouseX: " + mouseX + " mouseY: " + mouseY);

  //interface
  textSize(14);
 text("Instructions: Hover over the canvas to reveal a surprise!",20,30);

//separating line
line (width/2, 0, width/2, height);

//interaction
text("Day", 20,360);
text("Night", 400,360);

/**if statement. If this condition is true, execute this code
if(true){}
**/

if(mouseX > 0 && mouseX < width/2){
//console.log("Day Side");
  image(sun,35,75);
  bgColor=('yellow');

}

if(mouseX >= width/2 && mouseX < width){
//console.log("Night Side");
  image(moon,350,75);
  bgColor=('blue');

}

ellipse (cX,cY,cEdge,cEdge);
var cDist = dist(cX,cY,mouseX,mouseY);
console.log("cDist: " + cDist);

if(cDist < 10){
r = 255;
g = 0;
b = 0;

}else{
  r = 255;
  g = 255;
  b = 255;
}

rect(rectX,rectY,rectSize,rectSize); //rectX = 50, rectY = 75, rectSize = 100;

// if(mouseX > rectX && mouseX < rectX + rectSize){
//   if(mouseY > rectX && mouseY < rectY + rectSize){
//     console.log("In Here");
//   }
// }

if(mouseX > rectX && mouseX < rectX + rectSize && mouseY > rectX && mouseY < rectY + rectSize)
{
console.log("In Here");
r = random(256);
g = random(0,256);
b = random(256);
}

// fill(r,g,b);
// rect(rectX,rectY,rectSize,rectSize);

}
