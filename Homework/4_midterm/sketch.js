
var xPos = 600;
var yPos = 230;
var currentImage;
var speed = 10;

var colorDW = '#ffffff'; //white
var speed = 10;

var rectX = []; // start with empty list
var rectY = []; // start with empty list


var frameAmounts = 3;
var frameArray = [];
var currentFrame = 0;

var interval = 200;
var prevMillis = 0;

var interval2 = 200;
var prevMillis2 = 0;

var interval3 = 200;
var prevMillis3 = 0;

var counter = 0;

var itemMove = false;

var curCat = 0;
var swatting = false;

var catsXY = [];
var catsImgArray = [];
var makeItrain = false;

var value = 0;

function preload(){
  hearts=loadImage("assets/hearts.png");
  ball=loadImage("assets/ball.png");
  mouse=loadImage("assets/mouse.png")
  blank=loadImage("assets/blank.png")
  interior=loadImage("assets/interior.png");


  for(var frames = 0; frames< frameAmounts; frames++){
    var frameString = "assets/mambe" + frames +".png";
    frameArray[frames] = loadImage(frameString);
  }

  for(var frames = 0; frames< frameAmounts; frames++){
    var frameString = "assets/kitty" + frames +".png";
    catsImgArray[frames] = loadImage(frameString);
  }
}



function setup() {
  // put setup code here


  for(i = 0; i <= 25; i++){
    catsXY[i] = [random(1024),0,"assets/ball.png"];
  }

  selection = createSelect();
  selection.position(20,70);
  selection.option(""); //every option needs a selection.option line
  selection.option("Ball of Yarn"); //every option needs a selection.option line
  selection.option("Mouse");
  selection.changed(function(){

  console.log(selection.value()); //console will show either Mambe or Tigre string
  //if user chooses Mambe we want image to pop out

  if(selection.value() == "Mouse"){
    xPos = 600;
    yPos = 230;
    currentImage = mouse;
    swatting = false;
    itemMove = false;
    curCat = 0;

  } else if (selection.value() == "Ball of Yarn") {
    xPos = 600;
    yPos = 230;
    currentImage = ball;
    swatting = false;
      itemMove = false;
      curCat = 0;

  }


  });

  pressButton = createButton("Press to see what happens");
  pressButton.position(20,95);
  pressButton.mousePressed(function(){
    swatting = true;
  })

  currentImage = blank;

  pressButton2 = createButton("Make it Rain Cats");
  pressButton2.position(20,200);
  pressButton2.mousePressed(function(){
  makeItrain = true;
  for(i = 0; i < catsImgArray.length; i++){
    catsXY[i][1] = 0;
    catsXY[i][0] = random(1024);

  }
  })


 }


function draw() {
  // put drawing code here
createCanvas(1800,800);
textSize(30);

fill(value);
  ellipse(100, 100, 50, 50)

// "#a8dbda"
background(interior,100);

image(frameArray[curCat],700,100);


if(millis() - prevMillis> interval && swatting == true){
  curCat++;
  prevMillis = millis();
}

if(curCat > frameAmounts-1){
  curCat = 1;
  swatting = false;
  itemMove = true;
}

// != means does not equal
if(selection.value() != ""){
  image(currentImage,xPos,yPos);
  if(itemMove == true){
    if(xPos != 200){
      xPos--;
      yPos++;
    }

  }
}

if(makeItrain) {
  for(i = 0; i < catsImgArray.length; i++){
    catsXY[i][1] += 1;
    image(catsImgArray[i],catsXY[i][0],catsXY[i][1] );
  }
}


text(colorDW);
textSize (18);
text("Hi there kitty!",20,30)
text("Select from the dropdown menu",20,60);

  for (var i = 0; i < rectY.length; i++) {
    image(hearts,rectX[i], rectY[i]);
    rectY[i] += 1;
  }
}
function mousePressed() {
  rectX.push(mouseX);
  rectY.push(mouseY);
}


function mouseDragged() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}
