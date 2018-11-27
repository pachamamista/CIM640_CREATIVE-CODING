//This example uses https://trackingjs.com/ library


var frameAmounts = 3;
var frameArray = [];
var currentFrame = 0;

var curfeather1 = 0;
var capture;
var colors;
var found;
var redAmount = 130;

var feathersXY = [];
var redfImgArray = [];
var bluefImgArray = [];
var yellowfImgArray = [];
var makeItrain = false;

var value = 0;



function preload(){
  mountain=loadImage("assets/mountain1.png");
  birdred=loadImage("assets/birdred.png");
  birdblue=loadImage("assets/birdblue.png")
  birdyellow=loadImage("assets/birdyellow.png")
  }

function setup() {
  createCanvas(600,400);
  capture = createCapture(VIDEO);
  capture.size(400,200);
  // capture.id("myVideo");
  // capture.hide();

  //
  // function preload(){
  //   mountain=loadImage("assets/mountain1.png");
  //   birdred=loadImage("assets/birdred.png");
  //   birdblue=loadImage("assets/birdblue.png")
  //   birdyellow=loadImage("assets/birdyellow.png")
  //   }

for(var frames = 0; frames< frameAmounts; frames++){
  var frameString1 = "assets/bluef" + frames +".png";
  bluefImgArray[frames] = loadImage(frameString1);
}


for(var frames = 0; frames< frameAmounts; frames++){
  var frameString2 = "assets/redf" + frames +".png";
  redfImgArray[frames] = loadImage(frameString2);
}


for(var frames = 0; frames< frameAmounts; frames++){
  var frameString3 = "assets/yellowf" + frames +".png";
  yellowfImgArray[frames] = loadImage(frameString3);
}


pressButton2 = createButton("Feathers!");
pressButton2.position(20,230);
pressButton2.mousePressed(function(){
makeItrain = true;
for(i = 0; i < redfImgArray.length; i++){
  feathersXY[i][1] = 0;
  feathersXY[i][0] = random(1024);

}
})
  //
  // //colors = new tracking.ColorTracker(['yellow']);
  // colors = new tracking.ColorTracker(['red']);
  //
  //
  // colors.on('track', function(event) {
  //   if (event.data.length === 0) {
  //     // No colors were detected in this frame.
  //   } else {
  //     event.data.forEach(function(rect) {
  //       //console.log(rect);
  //       found = rect;
  //     });
  //   }
  // });
  //
  // tracking.track('#myVideo', colors);

  // initGUIControllers(tracker);

}

function draw() {

  createCanvas(800,600);
  textSize(30);

  background(mountain,100);
  //image(capture, 0, 0, 320, 240);
  // if(found != null){
  //     rect(found["x"],found["y"],found["width"],found["height"]);
  // }



  image(birdred,40,350);
  image(birdblue,300,375);
  image(birdyellow,550,350);



    if(makeItrain) {
      for(i = 0; i < redfImgArray.length; i++){
        feathersXY[i][1] += 1;
        image(redfImgArray[i],feathersXY[i][0],feathersXY[i][1] );
      }
    }

}


function keyPressed(){
  if(keyCode === UP_ARROW){
    redAmount+=1
  }

  if(keyCode === DOWN_ARROW){
    redAmount-=1
  }

  console.log(redAmount);

}
