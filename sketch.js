function setup() {
  createCanvas(windowWidth, 2 * windowHeight);
}

function draw() {
  var color1 = color("#964375");
  var color2 = color("#F1FF00");
  
  var increment = 1.0 / windowWidth;
  for (var i = 0; i <= windowWidth; i++) {  
    // Each vertical line is a slightly different color.
    var lineColor = lerpColor(color1, color2, increment * i);
    stroke(lineColor);
    line(0, 0 + i, windowWidth, 0 + i);
  noLoop();
  }
}