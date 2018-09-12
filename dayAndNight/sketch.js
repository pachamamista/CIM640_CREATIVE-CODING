var sun;
var moon;
var bgColor=('yellow');


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
  background(bgColor);
//console.log("mouseX: " + mouseX + " mouseY: " + mouseY);

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

if(mouseX <= width/2){
//  console.log("Day Side");
  image(sun,35,75);
  bgColor=('yellow');

}

if(mouseX >= width/2){
//  console.log("Night Side");
  image(moon,350,75);
  bgColor=('blue');


}


}
