var a = 1;
var num1 = 3;
var b = 'b';
var word1 = "word";
var trueFalse = true;
var sentences = "I'm a sentence";
var setupVariable = 5;
var charColor = 'orange';
var eyeSize = 40;
var facePosX = 120;

function setup() {
  // put setup code here
createCanvas(400,400);
background(245);
background(12,200,185);
background("orange");
background("#565433");
background(12,200,185);
}

console.log(a+num1);
console.log(a-num1);
console.log(a + b);
//single line comment

//console.log(a+b);

/*
Block of Comments
*/

function draw() {
  // put drawing code here
stroke('white');
strokeWeight(num1);
//does not work, setupVariable's scope is only in the setup.
//strokeWeight(setupVariable);

fill(charColor);
//eyes
  ellipse(facePosX,120,eyeSize,eyeSize);
  ellipse(200,facePosX,eyeSize,eyeSize);

//pupils
    ellipse(120,facePosX,20,20);
  ellipse(200,120,20,20);

  //mouth
  strokeWeight(5);
 rect(70,275,200,20);
/**

line(70,70,25,70);

**/

point(width/2, height/2);


//pacperson
  arc(100,200,100,100,QUARTER_PI, TWO_PI - QUARTER_PI);


}
