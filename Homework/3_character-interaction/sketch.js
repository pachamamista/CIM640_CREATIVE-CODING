


var imgCurr;

var a = 125;
var b = a + 75; //200
var c = 300;
var d = c + 400; //700
var colorA = '#f26d7d'; //pink
var colorB = '#000000'; //black
var colorC = '#c2f33f'; //green
var colorDW = '#ffffff'; //white
var colorBr = "#48442b"; //brown
var strColor = (219, 238, 237);//LTgreen
var bgColor = '#dee6d5';
var strCWeight = (0);

var tigreShow = false;


function preload(){
  mambe=loadImage("assets/mambe.png");
  tigre=loadImage("assets/tigre.png");
  frame=loadImage("assets/frame.png");
  hills=loadImage("assets/hills-scroll.png");

}

function setup() {
 createCanvas(1300,d);
 strokeWeight(0);
 background(bgColor);

 textSize(25);
 text("These are my cats",10,20);

 selection = createSelect();
 selection.position(10,35);
 selection.option("Mambe"); //every option needs a selection.option line
 selection.option("Tigre");
 selection.changed(function(){

 console.log(selection.value()); //console will show either Mambe or Tigre string
 //if user chooses Mambe we want image to pop out

 });

 sunButton = createButton("Press to show/hide cat");
 sunButton.position(10,60);
 sunButton.mousePressed(function(){
   if(selection.value() == "Mambe"){
     imgCurr = mambe;
     textSize(25);
     strokeWeight(0);
     text("Mambe",600,50);
}
   else if (selection.value() == "Tigre"){
     imgCurr = tigre;
     textSize(25);
     strokeWeight(0);
     text("Tigre",1050,50);
    }

 });


 imgCurr = frame;

}


function draw() {
	//interface

image(imgCurr, 100, 100, 400, 533);
image(hills,200,450);

//MAMBE
//body
fill(colorB);
ellipse(675, 450, c, c);


//Tigre
fill(colorBr);
ellipse(1100,450,c,c);

//head
fill(colorB);
ellipse(650, 250, b, b);

fill(colorBr);
ellipse(1095, 250, b, b);


//ears-mambe
fill(colorB);
stroke(colorB);
triangle(580, 100, 640, 160, 580, 185);
triangle(700, 100, 720, 185, 655, 165);
//ears-tigre
fill(colorBr);
stroke(colorBr);
triangle(1025, 100, 1075, 160, 1025, 185);
triangle(1140, 100, 1085, 185, 1160, 185);

//eyes-mambe
fill (colorC);
//stroke(colorDW);
ellipse(625, b, 50, 50);
ellipse(670, b, 50, 50);

//eyes-tigre
fill (colorC);
//stroke(colorDW);
ellipse(1115, b, 50, 50);
ellipse(1070, b, 50, 50);

//eye line-mambe
stroke(colorB);
line(625, 210, 625, 190);
line(665, 210, 665, 190);

//eye line-tigre
stroke(colorB);
line(1115, 210,1115, 190);
line(1070, 210, 1070, 190);


//nose
stroke(colorA);
fill (colorA);
beginShape(TRIANGLES);
vertex(655, 260);
vertex(640, 275);
vertex(625, 260);
endShape();
line(640, 290, 640, 270);

beginShape(TRIANGLES);
vertex(1100, 260);
vertex(1085, 275);
vertex(1070, 260);
endShape();
line(1085, 290, 1085, 270);


//mouth-mambe
noFill();
arc(605, 290, 70, 15, 0, QUARTER_PI+HALF_PI);
arc(655, 280, 70, 25, 0, QUARTER_PI+HALF_PI);

//mouth-tigre;
arc(1090, 285, 70, 15, 0, QUARTER_PI+HALF_PI);
arc(1050, 285, 70, 25, 0, QUARTER_PI+HALF_PI);

//mambe
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

//tigre
//whiskers right
stroke(colorDW);
line(1000, 225, 1060, 250);
line(1000, 250, 1060, 250);
line(1000, 275, 1060, 250);
//whiskers left
stroke(colorDW);
line(1130, 250, 1190, 225);
line(1130, 250, 1190, 250);
line(1130, 250, 1190, 275);

//tail-mambe
stroke(colorDW);
strokeWeight(3);
arc(829, 560, 80, 80, PI+QUARTER_PI, TWO_PI);
arc(898, 550, 60, 60, HALF_PI, PI);
arc(835, 550, 80, 80, PI+QUARTER_PI, TWO_PI);
arc(905, 550, 60, 60, HALF_PI, PI);
//tail-tigre
arc(1255, 560, 80, 80, PI+QUARTER_PI, TWO_PI);
arc(1323, 550, 60, 60, HALF_PI, PI);
arc(1260, 550, 80, 80, PI+QUARTER_PI, TWO_PI);
arc(905, 550, 60, 60, HALF_PI, PI);

//feet-mambe
fill(colorDW);
ellipse(625, 600, 80, 80);
ellipse(725, 600, 80, 80);
//feet-tigre
fill(colorDW);
ellipse(1050, 600, 80, 80);
ellipse(1150, 600, 80, 80);


}
