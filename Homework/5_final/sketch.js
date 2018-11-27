//This example uses https://trackingjs.com/ library

var capture;
var colors;
var found;
var redAmount = 130;

function setup() {
  createCanvas(800 ,600);
  capture = createCapture(VIDEO);
  //capture.size(800,600);
  //capture.id("myVideo");
  //capture.hide();


  //colors = new tracking.ColorTracker(['yellow']);
  colors = new tracking.ColorTracker(['red']);


  colors.on('track', function(event) {
    if (event.data.length === 0) {
      // No colors were detected in this frame.
    } else {
      event.data.forEach(function(rect) {
        //console.log(rect);
        found = rect;
      });
    }
  });

  tracking.track('#myVideo', colors);

  initGUIControllers(tracker);


}

function draw() {
  background(255);
  //image(capture, 0, 0, 320, 240);
  if(found != null){
      rect(found["x"],found["y"],found["width"],found["height"]);
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
