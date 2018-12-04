//This example uses https://trackingjs.com/ library
var frameAmounts = 3;
var frameArray = [];
var currentFrame = 0;

var curfeather1 = 0;
var capture;
var colors;
var found;
var redAmount = 130;

var value = 0;

var redFeatherAmount = 30;
var redFeatherImg;
var redFeathers = [];

var greenFeatherAmount = 30;
var greenFeatherImg;
var greenFeathers = [];

var yellFeatherAmount = 12;
var yellFeatherImg;
var yellFeathers = [];

var blueFeatherAmount = 12;
var blueFeatherImg;
var blueFeathers = [];


var howtoplay;


function preload(){
  mountain=loadImage("assets/mountain.png");
  birdred=loadImage("assets/birdred.png");
  birdblue=loadImage("assets/birdblue.png");
  birdgreen=loadImage("assets/birdgreen.png");
  birdyellow=loadImage("assets/birdyellow.png");
  redFeatherImg = loadImage("assets/redf0.png");
  yellFeatherImg = loadImage("assets/yellowf0.png");
  blueFeatherImg = loadImage("assets/bluef1.png");
  greenFeatherImg = loadImage("assets/greenf1.png");
  greenFeatherImg = loadImage("assets/greenf1.png");
  howtoplay = loadImage("assets/howtoplay.png");


  }

function setup() {
  createCanvas(900,600);
  capture = createCapture(VIDEO);
  capture.size(320,240);
  capture.id("myVideo");
  // capture.hide();
// Map video size to canvas size
// reverse the capture coordinates
  for(var i = 0; i < redFeatherAmount; i++){
    var currentFeather = {"x" : random(width), "y" : random(-250,-200), "image" : redFeatherImg, "caught" : false, "randomPos": 0};
    redFeathers.push(currentFeather);
  }

  for(var i = 0; i < yellFeatherAmount; i++){
    var currentFeather = {"x" : random(width), "y" : random(-250,-200), "image" : yellFeatherImg, "caught" : false};
    yellFeathers.push(currentFeather);
  }

  for(var i = 0; i < blueFeatherAmount; i++){
    var currentFeather = {"x" : random(width), "y" : random(-250,-200), "image" : blueFeatherImg, "caught" : false};
    blueFeathers.push(currentFeather);
  }

  for(var i = 0; i < greenFeatherAmount; i++){
    var currentFeather = {"x" : random(width), "y" : random(-250,-200), "image" : greenFeatherImg, "caught" : false};
    greenFeathers.push(currentFeather);
  }

  console.log(redFeathers);


draw(function(){
makeItrain = true;
for(i = 0; i < redfImgArray.length; i++){
  feathersXY[i][1] = 0;
  feathersXY[i][0] = random(1024);

}

// for(i = 0; i < yellfImgArray.length; i++){
//   feathersXY[i][1] = 0;
//   feathersXY[i][0] = random(1024);
//
// }

// for(i = 0; i < bluefImgArray.length; i++){
//   feathersXY[i][1] = 0;
//   feathersXY[i][0] = random(1024);
//
// }

for(i = 0; i < greenfImgArray.length; i++){
  feathersXY[i][1] = 0;
  feathersXY[i][0] = random(1024);

}

})
  //
  //colors = new tracking.ColorTracker(['yellow']);
  colors = new tracking.ColorTracker(['red']);
  colors = new tracking.ColorTracker(['green']);
  //colors = new tracking.ColorTracker(['blue']);


  //
  //
  colors.on('track', function(event) {
    if (event.data.length === 0) {
      // No colors were detected in this frame.
    } else {
      event.data.forEach(function(rect) {
        console.log(rect);
        found = rect;
        // Begin yellow collide
        featherCaught(yellFeathers, rect);
      //  featherCaught(redFeathers, rect);
        //featherCaught(blueFeathers, rect);
        featherCaught(greenFeathers, rect);
      });
    }
  });

  tracking.track('#myVideo', colors);

//initGUIControllers(tracker);

}

function draw() {

  createCanvas(1442,845);
  textSize(30);

  background(mountain,100);
  //image(capture, 0, 0, 320, 240);
  // if(found != null){
  //     rect(found["x"],found["y"],found["width"],found["height"]);
  // }


  image(howtoplay,1000,20);


    for(var i in redFeathers){

      if(redFeathers[i]["caught"] == true){
        push();
        translate(redFeathers[i]["x"],redFeathers[i]["y"]);
        rotate(redFeathers[i]["randomPos"]);
        image(redFeathers[i]["image"], 0,0);
        pop();
      }else{
        image(redFeathers[i]["image"], redFeathers[i]["x"],redFeathers[i]["y"]);
      }

      if(redFeathers[i]["y"] > height){
        redFeathers[i]["y"] = random(-500,-300)
      }
    var hit = collidePointRect(mouseX,mouseY,redFeathers[i]["x"],redFeathers[i]["y"],82,140);

    //console.log(hit);

    if(hit == true){
      redFeathers[i]["caught"] = true;
      redFeathers[i]["x"] = 225;
      redFeathers[i]["y"] = 625;
      redFeathers[i]["randomPos"] = random(360);
    }

    if(redFeathers[i]["caught"] == false){
        redFeathers[i]["y"]++;
    }

    }

    for(var i in greenFeathers){

      if(greenFeathers[i]["caught"] == true){
        push();
        translate(greenFeathers[i]["x"],greenFeathers[i]["y"]);
        rotate(greenFeathers[i]["randomPos"]);
        image(greenFeathers[i]["image"], 0,0);
        pop();
      }else{
        image(greenFeathers[i]["image"], greenFeathers[i]["x"],greenFeathers[i]["y"]);
      }

      if(greenFeathers[i]["y"] > height){
        greenFeathers[i]["y"] = random(-500,-300)
      }
    var hit = collidePointRect(mouseX,mouseY,greenFeathers[i]["x"],greenFeathers[i]["y"],82,140);

    //console.log(hit);

    if(hit == true){
      greenFeathers[i]["caught"] = true;
      greenFeathers[i]["x"] = 800;
      greenFeathers[i]["y"] = 650;
      greenFeathers[i]["randomPos"] = random(360);
    }

    if(greenFeathers[i]["caught"] == false){
        greenFeathers[i]["y"]++;
    }

    }


    image(birdred,125,550);
    image(birdgreen,700,575);
    //image(birdblue,330,450);
    //image(birdyellow,600,390);

    // for(var i in yellFeathers){
    //   image(yellFeathers[i]["image"], yellFeathers[i]["x"],yellFeathers[i]["y"]);
    //
    //   if(yellFeathers[i]["y"] > height){
    //     yellFeathers[i]["y"] = random(-500,-300)
    //   }
    // var hit = collidePointRect(mouseX,mouseY,yellFeathers[i]["x"],yellFeathers[i]["y"],82,140);
    //
    // console.log(hit);

    // if(hit == true){
    //   yellFeathers[i]["caught"] = true;
    // }
    //
    // if(yellFeathers[i]["caught"] == true){
    //   yellFeathers[i]["x"] = mouseX;
    //   yellFeathers[i]["y"] = mouseY;
    // }else{
    //   yellFeathers[i]["y"]++;
    // }

    }

   //  for(var i in blueFeathers){
   //    image(blueFeathers[i]["image"], blueFeathers[i]["x"],blueFeathers[i]["y"]);
   //
   //    if(blueFeathers[i]["y"] > height){
   //      blueFeathers[i]["y"] = random(-500,-300)
   //    }
   //  var hit = collidePointRect(mouseX,mouseY,blueFeathers[i]["x"],blueFeathers[i]["y"],82,140);
   //
   // console.log(hit);

    // if(hit == true){
    //   blueFeathers[i]["caught"] = true;
    // }
    //
    // if(blueFeathers[i]["caught"] == true){
    //   blueFeathers[i]["x"] = mouseX;
    //   blueFeathers[i]["y"] = mouseY;
    // }else{
    //   blueFeathers[i]["y"]++;
    // }

    //}

   //  for(var i in greenFeathers){
   //    image(greenFeathers[i]["image"], greenFeathers[i]["x"],greenFeathers[i]["y"]);
   //
   //    if(greenFeathers[i]["y"] > height){
   //      greenFeathers[i]["y"] = random(-450,-250)
   //    }
   //  var hit = collidePointRect(mouseX,mouseY,greenFeathers[i]["x"],greenFeathers[i]["y"],82,140);
   //
   // console.log(hit);
   //
   //  if(hit == true){
   //    greenFeathers[i]["caught"] = true;
   //  }
   //
   //  if(greenFeathers[i]["caught"] == true){
   //    greenFeathers[i]["x"] = mouseX;
   //  greenFeathers[i]["y"] = mouseY;
   //  }else{
   //    greenFeathers[i]["y"]++;
   //  }
   //
   //  }

//}


function keyPressed(){
  if(keyCode === UP_ARROW){
    redAmount+=1
  }

  if(keyCode === DOWN_ARROW){
    redAmount-=1
  }

  console.log(redAmount);
}
function featherCaught(feathers, rectPoint) {
  for(var i in feathers){
    image(feathers[i]["image"], feathers[i]["x"],feathers[i]["y"]);

    if(feathers[i]["y"] > height){
      feathers[i]["y"] = random(-500,-300)
    }
  var hit = collidePointRect(rectPoint.x,rectPoint.y,feathers[i]["x"],feathers[i]["y"],82,140);

  console.log(hit);

  if(hit == true){
    feathers[i]["caught"] = true;
  }

  if(feathers[i]["caught"] == true){
    feathers[i]["x"] = rectPoint.x;
    feathers[i]["y"] = rectPoint.y;
  }else{
    feathers[i]["y"]++;
  }

  }
}
