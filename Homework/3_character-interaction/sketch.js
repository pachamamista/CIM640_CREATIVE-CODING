



var a = 125;
var b = a + 75; //200
var c = 300;
var d = c + 400; //700
var colorA = '#f26d7d'; //pink
var colorB = '#000000'; //black
var colorC = '#c2f33f'; //green
var colorDW = '#ffffff'; //white
var strColor = (219, 238, 237);//LTgreen
var bgColor = '#9edbe0';
var strCWeight = (0);
var eyesOpen =



function setup() {
 createCanvas(1350,d);
 strokeWeight(0);
 background(bgColor);

}


function draw() {
	background(bgColor);
	//interface

  selection = createSelect();
  selection.position(10,10);
  selection.option("Eyes Open"); //every option needs a selection.option line
  selection.option("Eyes Closed");
  selection.changed(function(){

  console.log(selection.value()); //console will show either sun or moon string
  //if user chooses sun we want image to pop out

  });


submitButton = createButton("Reset");
submitButton.position(10,50);
submitButton.mousePressed(function(){

  if(selection.value() == "Eyes Open"){
    curImage = sun;
  }
  else if (selection.value() == "Eyes Closed"){
    curImage = moon;

});


	strokeWeight(strCWeight);
	textSize(30);
		text("This is my cat Mambe!",10,150);
	strokeWeight(3);

//stroke(colorDW);
//body
fill (colorB);
ellipse(675, 450, c, c);

//head
fill(colorB);
ellipse(650, 250, b, b);


//ears
fill(colorB);
stroke(colorB);
triangle(580, 100, 640, 160, 580, 185);
triangle(700, 100, 720, 185, 655, 165);

//eyes
fill (colorC);
//stroke(colorDW);
ellipse(625, b, 50, 50);
ellipse(670, b, 50, 50);

//eye line
stroke(colorB);
line(625, 210, 625, 190);
line(665, 210, 665, 190);

//nose
stroke(colorA);
fill (colorA);
beginShape(TRIANGLES);
vertex(655, 260);
vertex(640, 275);
vertex(625, 260);
endShape();
line(640, 290, 640, 270);
//line(660, 300, 640, 290);
//line(620, 300, 640, 290);

//mouth
noFill();
arc(605, 290, 70, 15, 0, QUARTER_PI+HALF_PI);
arc(655, 280, 70, 25, 0, QUARTER_PI+HALF_PI);

//whiskers right
stroke(colorDW);
line(740, 225, 680, 250);
line(740, 250, 680, 250);
line(740, 275, 680, 250);

//whiskers left
stroke(colorDW);
line(610, 250, 550, 225);
line(610, 250, 550, 250);
line(610, 250, 550, 275);

//tail
stroke(colorDW);
strokeWeight(3);
arc(829, 560, 80, 80, PI+QUARTER_PI, TWO_PI);
arc(898, 550, 60, 60, HALF_PI, PI);


arc(835, 550, 80, 80, PI+QUARTER_PI, TWO_PI);
arc(905, 550, 60, 60, HALF_PI, PI);



//feet
fill(colorDW);
ellipse(625, 600, 80, 80);
ellipse(725, 600, 80, 80);

}
