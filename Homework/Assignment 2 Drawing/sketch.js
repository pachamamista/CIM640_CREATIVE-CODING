/** var a = 400;
var b = 700 - a;
var newColor = "red";



function setup(){
	createCanvas(900,750);
  rectMode(CENTER);
}
function draw(){
	background(230);

	// move the origin to the pivot point
	translate(a, b);
	// then rotate the grid around the pivot point by a
	// number of degrees equal to the frame count of the sketch
	rotate(radians(frameCount));

	// and draw the square at the origin
	fill('green');
strokeWeight(0);
  rect(0, 0, 150, 150);

  // move the origin to the pivot point
	translate(100, 100);

	// then rotate the grid around the pivot point by a
	// number of degrees equal to the frame count of the sketch
	rotate(radians(frameCount));

	// and draw the square at the origin
	fill('#ff581d');
strokeWeight(0);
  rect(0, 0, 100, 100);

  //mole
    stroke('red');
    strokeWeight(10);
    point(width/4, height/4);

    line(70,a,250,270);

}
**/



/**
function setup(){
	createCanvas(400, 400);
	rectMode(CENTER);	// now the first two arguments of a rect are its center point, not corner
}
function draw(){
	background(240);

	// move the origin to the pivot point
	translate(150, 150);

	// then rotate the grid around the pivot point by a
	// number of degrees equal to the frame count of the sketch
	rotate(radians(frameCount));

	// and draw the square at the origin
	fill('#ff581d');
	strokeWeight(0);
	rect(0, 0, 100, 100);
}

**/

var a = 125;
var b = a + 75; //200
var colorA = '#f26d7d'; //pink
var colorB = '#1ddcff'; //blue
var colorC = '#c2f33f'; //green



function setup() {
 createCanvas(1200,700);
 strokeWeight(8)
}


function draw() {
stroke(colorA);
triangle(30, 75, 58, 20, 86, 75);

fill(colorB);
ellipse(120, 120, 50, 50);

ellipse(200, 200, 100, 100);


fill (colorC);
triangle(b, 150, 250, 25, 310, 150);

// move the origin to the pivot point
	translate(b, b+a);

	// then rotate the grid around the pivot point by a
	// number of degrees equal to the frame count of the sketch
//	rotate(radians(frameCount));


	// and draw a square at the origin
	fill(colorC);
	rect(0, 0, a, a);
//  line(mouseX, 30, mouseX, 50);

}
