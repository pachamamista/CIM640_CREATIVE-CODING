function setup() {
  // put setup code here
select("body").style("background-color","pink");

var container0 = createDiv();


container0.id("container0");
  select("#container0").html("<h1>Your Project Title Goes Here!</h1>");
  select("#container0").style("width", "500px");
  select("#container0").style("margin","0 auto");
  select("#container0").style("text-align","center");

var cnv = createCanvas(500,400); //if this snippet of code is above, the text moves below.
cnv.id("mycanvas");
//select("mycanvas").center;

cnv.parent(container0);



}

function draw() {
  // put drawing code here
  background(0);
}
