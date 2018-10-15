
var posX = [0,100,200,300];

var posY = [0,100,200,300];

var curImage,horse,moon;
var selection, textInput, submitButton;
var numberOfImages = 0;

function preload(){
  horse=loadImage("assets/horse.png");
  moon=loadImage("assets/moon.png");

}


function setup() {
  // put setup code here
createCanvas(400,400);
selection = createSelect();
selection.position(10,10);
selection.option("horse"); //every option needs a selection.option line
selection.option("moon");
selection.changed(function(){

console.log(selection.value()); //console will show either horse or moon string
//if user chooses horse we want image to pop out

});

textInput = createInput("# of Images");
textInput.position(10,30);

submitButton = createButton("Create Pattern");
submitButton.position(10,50);
submitButton.mousePressed(function(){
  numberOfImages = textInput.value();
  console.log(numberOfImages);

  if(selection.value() == "horse"){
    curImage = horse;
  }
  else if (selection.value() == "moon"){
    curImage = moon;
  }

posX = [];
posY = [];

for(var a = 0; a < numberOfImages; a++){
posX[a] = random(width);
posY[a] = random(height);
console.log("x: " + posX[a] + " y: " + posY[a]);
}

});

curImage = moon;

console.log(posX[1]);

}

function draw() {
//  frameRate(5);
  background(255);
  /**for loop
  for(var i = 0; i<numberOfImages; i++){
console.log(i);
image(curImage,random(width),random(height),curImage.width/random(1,5), curImage.height/random(1,5));
}**/

for(var i = 0; i < numberOfImages; i++){
image(curImage,posX[i],posY[i],curImage.width/4,curImage.height/4);
};

}


//End of code
