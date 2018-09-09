var sun;

function preload(){
//preload goes above setup and will be used and loaded before project starts
//this loads our image into memory
//find the image and keep it there til I want to use it

sun = loadImage('assets/sun.png');
//use png because you can use transparency


}

function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  image(sun,100,100);
}
