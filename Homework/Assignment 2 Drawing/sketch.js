



var a = 125;
var b = a + 75; //200
var c = 300;
var d = c + 400; //700
var colorA = '#f26d7d'; //pink
var colorB = '#000000'; //black
var colorC = '#c2f33f'; //green
var colorDW = '#ffffff'; //white
var strColor = (219, 238, 237);//LTgreen


function setup() {
 createCanvas(1350,d);
 strokeWeight(3);

 background('#bfbeac');
}


function draw() {
stroke(colorDW);
//body
fill (colorB);
ellipse(675, 450, c, c);

//head
fill(colorB);
ellipse(650, 250, b, b);


//ears
fill(colorC);
stroke(colorB);
triangle(580, 100, 640, 160, 580, 185);
triangle(700, 100, 720, 185, 655, 165);

//eyes
fill (colorC);
stroke(colorDW);
ellipse(625, b, 50, 50);
ellipse(665, b, 50, 50);

//eye line
stroke(colorB);
line(625, 210, 625, 190);
line(660, 210, 660, 190);

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
line(740, 225, 680, 250);
line(740, 250, 680, 250);
line(740, 275, 680, 250);

//whiskers left
line(610, 250, 550, 225);
line(610, 250, 550, 250);
line(610, 250, 550, 275);


stroke(colorDW);
arc(829, 560, 80, 80, PI+QUARTER_PI, TWO_PI);
arc(898, 550, 60, 60, HALF_PI, PI);


arc(835, 550, 80, 80, PI+QUARTER_PI, TWO_PI);
arc(905, 550, 60, 60, HALF_PI, PI);





//feet
fill (colorDW);
stroke(colorB);
ellipse(625, 600, 80, 80);
ellipse(725, 600, 80, 80);



}
