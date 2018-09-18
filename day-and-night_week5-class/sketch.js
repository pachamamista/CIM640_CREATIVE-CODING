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
  fill(r,g,b);
rect(rectX,rectY,rectSize,rectSize);

}

function mousePresssed(){
r = random(0,256);
g = random(0,256);
b = random(0,256);

}
