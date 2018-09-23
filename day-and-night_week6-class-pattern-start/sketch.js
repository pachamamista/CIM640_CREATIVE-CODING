
var curImage,sun,moon;

var selection, textInput, submitButton;

var numberOfImages = 0;

function preload(){
  sun=loadImage("assets/sun.png");
  moon=loadImage("assets/moon.png");

}


function setup() {
  // put setup code here
createCanvas(400,400);
selection = createSelect();
selection.position(10,10);
selection.option("sun"); //every option needs a selection.option line
selection.option("moon");
selection.changed(function(){

console.log(selection.value()); //console will show either sun or moon string
//if user chooses sun we want image to pop out

});

textInput = createInput("# of Images");
textInput.position(10,30);

submitButton = createButton("Create Pattern");
submitButton.position(10,50);
submitButton.mousePressed(function(){
  numberOfImages = textInput.value();
  console.log(numberOfImages);

  if(selection.value() == "sun"){
    curImage = sun;
  }
  else if (selection.value() == "moon"){
    curImage = moon;
  }

});

curImage = moon;

}

function draw() {
  frameRate(5);
  background(255);
  //for loop
  for(var i = 0; i<numberOfImages; i++){
//console.log(i);
image(curImage,random(width),random(height),curImage.width/random(1,5), curImage.height/random(1,5));

  }
}


//End of code
