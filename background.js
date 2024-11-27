let s = 1;
function setup() {
    createCanvas(600,700);
}
function heart(x, y, size) {
  // Top left curve
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 8, x, y + size);

  // Top right curve
  bezierVertex(x + size, y + size / 8, x + size / 2, y - size / 2, x, y);

  endShape(CLOSE);
}

function drawHeartThree(x, y, s) {
  fill(255, 255, 255, 180);
  noStroke();
  rect(x - 80 * s, y - 55 * s, 420 * s, 190 * s, 30 * s);

  fill(255, 0, 0);
  stroke(0);
  strokeWeight(3 * s);

  heart(x, y, 100 * s);
  heart(x + 130 * s, y, 100 * s);
  heart(x + 260 * s, y, 100 * s);
}

function drawHeartTwo(x, y, s) {
  fill(255, 255, 255, 180);
  noStroke();
  rect(x - 80 * s, y - 55 * s, 420 * s, 190 * s, 30 * s);

  fill(255, 0, 0);
  stroke(0);
  strokeWeight(3 * s);

  heart(x, y, 100 * s);
  heart(x + 130 * s, y, 100 * s);
  fill(100);
  heart(x + 260 * s, y, 100 * s);
}

function drawHeartOne(x, y, s) {
  fill(255, 255, 255, 180);
  noStroke();
  rect(x - 80 * s, y - 55 * s, 420 * s, 190 * s, 30 * s);

  fill(255, 0, 0);
  stroke(0);
  strokeWeight(3 * s);

  heart(x, y, 100 * s);
  fill(100);
  heart(x + 130 * s, y, 100 * s);
  heart(x + 260 * s, y, 100 * s);
}

function draw() {
  background(255, 255, 0);

  drawHeartTwo(450, 50, 0.3);
}
