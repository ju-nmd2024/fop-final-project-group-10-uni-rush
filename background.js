/* function setup() {
  createCanvas(600, 700);
}
class Heart {
  constructor(heartX, heartY, heartSize) {
    this.heartX = heartX;
    this.heartY = heartY;
    this.heartSize = heartSize;
  }

  draw() {
    // Top left curve
    stroke(0);
    strokeWeight(2);

    beginShape();
    vertex(this.heartX, this.heartY);
    bezierVertex(
      this.heartX - this.heartSize / 2,
      this.heartY - this.heartSize / 2,
      this.heartX - this.heartSize,
      this.heartY + this.heartSize / 8,
      this.heartX,
      this.heartY + this.heartSize
    );

    // Top right curve
    bezierVertex(
      this.heartX + this.heartSize,
      this.heartY + this.heartSize / 8,
      this.heartX + this.heartSize / 2,
      this.heartY - this.heartSize / 2,
      this.heartX,
      this.heartY
    );
    endShape(CLOSE);
  }
}

/* function drawHeartThree(x, y, s) {
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
} */

/* let heart = new Heart(450, 100, 40);

function draw() {
  background(255, 255, 255);

  heart.draw();
} */

  
