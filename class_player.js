let lanes = [200, 300, 400];
let currentLane = 1;


class Player {
  constructor(x, y, s) {
    this.x = lanes[currentLane];
    this.y = y;
    this.s = s;
  }

  update() {
    this.x = lanes[currentLane];   
  }
  draw() {
    noStroke();

    // Ears
    fill(189, 158, 122);
    ellipse(this.x - 23 * this.s, this.y, 15 * this.s);
    ellipse(this.x + 23 * this.s, this.y, 15 * this.s);

    // Throat
    beginShape();
    vertex(this.x - 10 * this.s, this.y + 20 * this.s);
    bezierVertex(
      this.x - 10 * this.s,
      this.y + 25 * this.s,
      this.x - 10 * this.s,
      this.y + 30 * this.s,
      this.x - 15 * this.s,
      this.y + 35 * this.s
    );
    vertex(this.x + 15 * this.s, this.y + 35 * this.s);
    bezierVertex(
      this.x + 10 * this.s,
      this.y + 30 * this.s,
      this.x + 10 * this.s,
      this.y + 25 * this.s,
      this.x + 10 * this.s,
      this.y + 20 * this.s
    );
    endShape(CLOSE);

    // Head Hair
    fill(95, 75, 53);
    ellipse(this.x, this.y, 50 * this.s);

    // Arm Left
    fill(189, 158, 122);
    beginShape();
    vertex(this.x - 28 * this.s, this.y + 36 * this.s);
    vertex(this.x - 50 * this.s, this.y + 50 * this.s);
    bezierVertex(
      this.x - 55 * this.s,
      this.y + 55 * this.s,
      this.x - 55 * this.s,
      this.y + 60 * this.s,
      this.x - 47 * this.s,
      this.y + 70 * this.s
    );
    vertex(this.x - 30 * this.s, this.y + 85 * this.s);
    vertex(this.x - 30 * this.s, this.y + 73 * this.s);
    vertex(this.x - 40 * this.s, this.y + 60 * this.s);
    vertex(this.x - 30 * this.s, this.y + 53 * this.s);
    endShape();

    // Arm Right
    beginShape();
    vertex(this.x + 28 * this.s, this.y + 36 * this.s);
    vertex(this.x + 50 * this.s, this.y + 50 * this.s);
    bezierVertex(
      this.x + 55 * this.s,
      this.y + 55 * this.s,
      this.x + 55 * this.s,
      this.y + 60 * this.s,
      this.x + 47 * this.s,
      this.y + 70 * this.s
    );
    vertex(this.x + 30 * this.s, this.y + 85 * this.s);
    vertex(this.x + 30 * this.s, this.y + 73 * this.s);
    vertex(this.x + 40 * this.s, this.y + 60 * this.s);
    vertex(this.x + 30 * this.s, this.y + 53 * this.s);
    endShape();

    // Body
    fill(225, 211, 87);
    rect(
      this.x - 32.5 * this.s,
      this.y + 35 * this.s,
      65 * this.s,
      70 * this.s,
      10 * this.s
    );

    // Tail
    fill(75, 57, 38);
    beginShape();
    vertex(this.x, this.y);
    bezierVertex(
      this.x + 10 * this.s,
      this.y + 5 * this.s,
      this.x + 20 * this.s,
      this.y + 10 * this.s,
      this.x + 25 * this.s,
      this.y + 25 * this.s
    );
    vertex(this.x + 25 * this.s, this.y + 10 * this.s);
    bezierVertex(
      this.x + 25 * this.s,
      this.y,
      this.x + 20 * this.s,
      this.y - 5 * this.s,
      this.x + 10 * this.s,
      this.y - 5 * this.s
    );
    endShape();

    ellipse(this.x + 4, this.y - 4, 10);

    // Leg Pants Left/Right
    fill(225, 211, 87);
    rect(
      this.x - 30 * this.s,
      this.y + 90 * this.s,
      20 * this.s,
      40 * this.s,
      20 * this.s
    );
    rect(
      this.x + 10 * this.s,
      this.y + 90 * this.s,
      20 * this.s,
      40 * this.s,
      20 * this.s
    );

    // Leg Right
    fill(189, 158, 122);
    rect(this.x + 13 * this.s, this.y + 125 * this.s, 14 * this.s, 20 * this.s);

    // Shoes Left/Right
    fill(183, 61, 39);
    rect(
      this.x - 30 * this.s,
      this.y + 120 * this.s,
      20 * this.s,
      25 * this.s,
      20 * this.s
    );
    rect(
      this.x + 10 * this.s,
      this.y + 143 * this.s,
      20 * this.s,
      10 * this.s,
      10 * this.s
    );

    // Backpack Stripes Left/Right
    stroke(106, 39, 27);
    line(
      this.x - 17 * this.s,
      this.y + 40 * this.s,
      this.x - 20 * this.s,
      this.y + 36 * this.s
    );
    line(
      this.x - 23 * this.s,
      this.y + 75 * this.s,
      this.x - 32 * this.s,
      this.y + 70 * this.s
    );
    line(
      this.x + 17 * this.s,
      this.y + 40 * this.s,
      this.x + 20 * this.s,
      this.y + 36 * this.s
    );
    line(
      this.x + 23 * this.s,
      this.y + 75 * this.s,
      this.x + 32 * this.s,
      this.y + 70 * this.s
    );

    // Backpack
    noStroke();
    fill(183, 61, 39);
    rect(
      this.x - 23 * this.s,
      this.y + 40 * this.s,
      46 * this.s,
      50 * this.s,
      5 * this.s
    );
    fill(150, 51, 33);
    rect(
      this.x - 23 * this.s,
      this.y + 40 * this.s,
      46 * this.s,
      20 * this.s,
      5 * this.s
    );
    fill(106, 39, 27);
    rect(
      this.x - 5 * this.s,
      this.y + 50 * this.s,
      10 * this.s,
      15 * this.s,
      2 * this.s
    );
  }
}

let player = new Player (300, 580, 0.8);

function draw() {
  background(220); 
  player.update(); 
  player.draw();   
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && currentLane > 0) {
    currentLane--; 
  } else if (keyCode === RIGHT_ARROW && currentLane < lanes.length - 1) {
    currentLane++;
  }
}
