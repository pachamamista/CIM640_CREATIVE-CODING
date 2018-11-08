/**var canvas;

function setup() {
  // We are still calling createCanvas like in the past, but now
  // we are storing the result as a variable. This way we can
  // call methods of the element, to set the position for instance.
  canvas = createCanvas(600, 400);

  // Here we call methods of each element to set the position
  // and id, try changing these values.
  // Use the inspector to look at the HTML generated from this
  // code when you load the sketch in your browser.
  canvas.position(300, 50);
  canvas.class("lemon");
}

function draw() {
  // These commands are applied to the graphics canvas as normal.
  background(220, 180, 200);
  ellipse(width/2, height/2, 100, 100);
  ellipse(width/4, height/2, 50, 50);
}
**/

/** var canvas;

function setup() {
 canvas = createCanvas(400, 400);
 img = createImg("http://th07.deviantart.net/fs70/PRE/i/2011/260/3/5/dash_hooray_by_rainbowcrab-d49xk0d.png");

 img.position(190, 50);
 img.size(200, 200);
 // Attach listeners for mouse events related to img.
 img.mousePressed(uniHide);

 canvas.position(300, 50);
}

function draw() {
 noStroke();
 background(220, 180, 200);
 fill(180, 200, 40);
 strokeWeight(6);
 stroke(180, 100, 240);
 for (var i = 0; i < width; i += 15) {
   line(i, 0, i, height);
 }
}

// Create functions for hiding and showing uni image.
// These will be hooked into mouse events related to canvas above.
function uniHide() {
 img.hide();
}

function uniShow() {
 img.show();
}

// Define global keyPressed behavior. This one doesn't need to be hooked in, it's a global listener, automatically fired on key press.
function keyPressed() {
 uniShow();
}
**/

/**
var playing = false;
var fingers;
var button;

function setup() {
  fingers = createVideo('assets/puch.mov');
  button = createButton('play');
  button.mousePressed(toggleVid); // attach button listener
}

function mousePressed() {
}

// plays or pauses the video depending on current state
function toggleVid() {
  if (playing) {
    fingers.pause();
    button.html('play');
  } else {
    fingers.loop();
    button.html('pause');
  }
  playing = !playing;
}

**/

var myDiv0;
var myDiv1;
var myDiv2;

function setup() {

  myDiv0 = createDiv('this is div 0');
  myDiv1 = createDiv('this is div 1');
  myDiv2 = createDiv('this is div 2');

  // Here we call methods of each element to set the position and class.
  // Let's give the first two canvases class donkey, and the third class yogurt.
  myDiv0.position(50, 50);
  myDiv0.class('donkey');
  myDiv1.position(300, 50);
  myDiv1.class('donkey');
  myDiv2.position(550, 50);
  myDiv2.class('yogurt');
}

// On key press, hide all elements with class donkey.
function keyPressed() {
  // selectAll() returns an array of elements with class donkey.
  // If none are found, it returns an empty array [].
  var donkeys = selectAll('.donkey');
  // We can then iterate through the array and hide all the elements.
  for (var i = 0; i < donkeys.length; i++) {
    donkeys[i].hide();
  }
}
