function setup() {
  createCanvas(600, 700);
}

let jthX = 300;
let jthY = 500;
let jthS = 1;

let lanes = [200, 300, 400];
let currentLane = 1;

/* let treeX = 80;
let treeY = 300; 
let treeS = 1;

function tree(treeX, treeY, treeS) {
  //tree
  fill(130, 100, 15);
  rect(treeX - 15 * treeS, treeY + 20 * treeS, 30 * treeS, 40 * treeS);

  fill(60, 185, 15);
  ellipse(treeX, treeY, 80 * treeS);

  //left side leaves
  ellipse(treeX - 40 * treeS, treeY - 5 * treeS, 30 * treeS);
  ellipse(treeX - 35 * treeS, treeY + 20 * treeS, 30 * treeS);
  ellipse(treeX - 20 * treeS, treeY + 30 * treeS, 25 * treeS);
  ellipse(treeX - 25 * treeS, treeY - 25 * treeS, 30 * treeS);

  //middle leaves
  ellipse(treeX, treeY - 35 * treeS, 30 * treeS, 25 * treeS);
  ellipse(treeX, treeY + 32 * treeS, 25 * treeS);

  //right side leaves
  ellipse(treeX + 40 * treeS, treeY - 5 * treeS, 30 * treeS);
  ellipse(treeX + 35 * treeS, treeY + 20 * treeS, 30 * treeS);
  ellipse(treeX + 20 * treeS, treeY + 30 * treeS, 25 * treeS);
  ellipse(treeX + 25 * treeS, treeY - 25 * treeS, 30 * treeS);
}

function bush(treeX, treeY, treeS) {
  noStroke();
  fill(55, 170, 15);
  ellipse(treeX, treeY, 80 * treeS);

  //left side leaves
  ellipse(treeX - 40 * treeS, treeY - 5 * treeS, 30 * treeS);
  ellipse(treeX - 35 * treeS, treeY + 20 * treeS, 30 * treeS);
  ellipse(treeX - 20 * treeS, treeY + 30 * treeS, 25 * treeS);
  ellipse(treeX - 25 * treeS, treeY - 25 * treeS, 30 * treeS);

  //middle leaves
  ellipse(treeX, treeY - 35 * treeS, 30 * treeS, 25 * treeS);
  ellipse(treeX, treeY + 32 * treeS, 25 * treeS);

  //right side leaves
  ellipse(treeX + 40 * treeS, treeY - 5 * treeS, 30 * treeS);
  ellipse(treeX + 35 * treeS, treeY + 20 * treeS, 30 * treeS);
  ellipse(treeX + 20 * treeS, treeY + 30 * treeS, 25 * treeS);
  ellipse(treeX + 25 * treeS, treeY - 25 * treeS, 30 * treeS);
} */

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

let playerFail = new Player(400, 600, 0.5);
let playerSuccess = new Player(350, 550, 1);

class Tree {
  constructor(treeX, treeY, treeS) {
    this.treeX = treeX;
    this.treeY = treeY;
    this.treeS = treeS;
  }

  draw() {
    noStroke();
    // tree trunk
    fill(130, 100, 15);
    rect(
      this.treeX - 15 * this.treeS,
      this.treeY + 20 * this.treeS,
      30 * this.treeS,
      40 * this.treeS
    );

    // main foliage
    fill(60, 185, 15);
    ellipse(this.treeX, this.treeY, 80 * this.treeS);

    // left side leaves
    ellipse(
      this.treeX - 40 * this.treeS,
      this.treeY - 5 * this.treeS,
      30 * this.treeS
    );
    ellipse(
      this.treeX - 35 * this.treeS,
      this.treeY + 20 * this.treeS,
      30 * this.treeS
    );
    ellipse(
      this.treeX - 20 * this.treeS,
      this.treeY + 30 * this.treeS,
      25 * this.treeS
    );
    ellipse(
      this.treeX - 25 * this.treeS,
      this.treeY - 25 * this.treeS,
      30 * this.treeS
    );

    // middle leaves
    ellipse(
      this.treeX,
      this.treeY - 35 * this.treeS,
      30 * this.treeS,
      25 * this.treeS
    );
    ellipse(this.treeX, this.treeY + 32 * this.treeS, 25 * this.treeS);

    // right side leaves
    ellipse(
      this.treeX + 40 * this.treeS,
      this.treeY - 5 * this.treeS,
      30 * this.treeS
    );
    ellipse(
      this.treeX + 35 * this.treeS,
      this.treeY + 20 * this.treeS,
      30 * this.treeS
    );
    ellipse(
      this.treeX + 20 * this.treeS,
      this.treeY + 30 * this.treeS,
      25 * this.treeS
    );
    ellipse(
      this.treeX + 25 * this.treeS,
      this.treeY - 25 * this.treeS,
      30 * this.treeS
    );
  }
}
let tree1 = new Tree(34, 620, 0.6);
let tree2 = new Tree(565, 620, 0.6);
let tree3 = new Tree(180, 620, 0.8);
let tree4 = new Tree(495, 620, 0.8);
let tree5 = new Tree(250, 600, 0.4);
let tree6 = new Tree(405, 600, 0.4);

class Bush {
  constructor(bushX, bushY, bushS) {
    this.bushX = bushX;
    this.bushY = bushY;
    this.bushS = bushS;
  }

  draw() {
    // main foliage
    fill(60, 185, 15);
    ellipse(this.bushX, this.bushY, 80 * this.bushS);

    // left side leaves
    ellipse(
      this.bushX - 40 * this.bushS,
      this.bushY - 5 * this.bushS,
      30 * this.bushS
    );
    ellipse(
      this.bushX - 35 * this.bushS,
      this.bushY + 20 * this.bushS,
      30 * this.bushS
    );
    ellipse(
      this.bushX - 20 * this.bushS,
      this.bushY + 30 * this.bushS,
      25 * this.bushS
    );
    ellipse(
      this.bushX - 25 * this.bushS,
      this.bushY - 25 * this.bushS,
      30 * this.bushS
    );

    // middle leaves
    ellipse(
      this.bushX,
      this.bushY - 35 * this.bushS,
      30 * this.bushS,
      25 * this.bushS
    );
    ellipse(this.bushX, this.bushY + 32 * this.bushS, 25 * this.bushS);

    // right side leaves
    ellipse(
      this.bushX + 40 * this.bushS,
      this.bushY - 5 * this.bushS,
      30 * this.bushS
    );
    ellipse(
      this.bushX + 35 * this.bushS,
      this.bushY + 20 * this.bushS,
      30 * this.bushS
    );
    ellipse(
      this.bushX + 20 * this.bushS,
      this.bushY + 30 * this.bushS,
      25 * this.bushS
    );
    ellipse(
      this.bushX + 25 * this.bushS,
      this.bushY - 25 * this.bushS,
      30 * this.bushS
    );
  }
}
let bush1 = new Bush(60, 650, 0.2);
let bush2 = new Bush(540, 650, 0.2);
let bush3 = new Bush(130, 680, 0.4);
let bush4 = new Bush(540, 680, 0.4);
let bush5 = new Bush(230, 630, 0.2);
let bush6 = new Bush(430, 630, 0.2);

function jthSchool(jthX, jthY, jthS) {
  //JTH
  //building
  noStroke();
  fill(255, 255, 0);
  rect(jthX - 275 * jthS, jthY - 100 * jthS, 550 * jthS, 200 * jthS);

  fill(250, 230, 50);
  rect(jthX - 275 * jthS, jthY - 100 * jthS, 550 * jthS, 120 * jthS);

  stroke(110, 100, 40);
  strokeWeight(1 * jthS);
  fill(255, 255, 0);

  rect(jthX - 220 * jthS, jthY - 70 * jthS, 90 * jthS, 90 * jthS);
  rect(jthX - 45 * jthS, jthY - 70 * jthS, 90 * jthS, 90 * jthS);
  rect(jthX + 130 * jthS, jthY - 70 * jthS, 90 * jthS, 90 * jthS);

  //shadows
  stroke(150, 135, 20);
  strokeWeight(3 * jthS);
  line(
    jthX - 218 * jthS,
    jthY - 70 * jthS,
    jthX - 127 * jthS,
    jthY - 70 * jthS
  );
  line(jthX - 42 * jthS, jthY - 70 * jthS, jthX + 50 * jthS, jthY - 70 * jthS);
  line(
    jthX + 132 * jthS,
    jthY - 70 * jthS,
    jthX + 225 * jthS,
    jthY - 70 * jthS
  );

  strokeWeight(6 * jthS);
  line(
    jthX - 129 * jthS,
    jthY - 67 * jthS,
    jthX - 129 * jthS,
    jthY + 17 * jthS
  );
  line(jthX + 48 * jthS, jthY - 67 * jthS, jthX + 48 * jthS, jthY + 17 * jthS);
  line(
    jthX + 223 * jthS,
    jthY - 67 * jthS,
    jthX + 223 * jthS,
    jthY + 17 * jthS
  );

  stroke(110, 100, 40);
  strokeWeight(4 * jthS);
  line(
    jthX - 275 * jthS,
    jthY + 20 * jthS,
    jthX + 275 * jthS,
    jthY + 20 * jthS
  );

  stroke(110, 100, 40);
  strokeWeight(0.5 * jthS);

  //door
  fill(95, 235, 235);
  rect(jthX, jthY + 30 * jthS, 90 * jthS, 70 * jthS);

  strokeWeight(2);
  line(jthX, jthY + 45 * jthS, jthX + 90 * jthS, jthY + 45 * jthS);
  line(jthX + 20 * jthS, jthY + 30 * jthS, jthX + 20 * jthS, jthY + 45 * jthS);
  line(jthX + 25 * jthS, jthY + 30 * jthS, jthX + 25 * jthS, jthY + 45 * jthS);

  line(jthX + 65 * jthS, jthY + 30 * jthS, jthX + 65 * jthS, jthY + 45 * jthS);
  line(jthX + 70 * jthS, jthY + 30 * jthS, jthX + 70 * jthS, jthY + 45 * jthS);

  rect(jthX + 5 * jthS, jthY + 50 * jthS, 35 * jthS, 50 * jthS);
  rect(jthX + 50 * jthS, jthY + 50 * jthS, 35 * jthS, 50 * jthS);

  line(jthX + 23 * jthS, jthY + 50 * jthS, jthX + 23 * jthS, jthY + 100 * jthS);
  line(jthX + 68 * jthS, jthY + 50 * jthS, jthX + 68 * jthS, jthY + 100 * jthS);

  fill(255, 255, 0);
  noStroke();
  rect(jthX + 4 * jthS, jthY + 48 * jthS, 37 * jthS, 10 * jthS);
  rect(jthX + 49 * jthS, jthY + 48 * jthS, 37 * jthS, 10 * jthS);

  // WINDOWS
  stroke(110, 100, 40);
  strokeWeight(0.5 * jthS);

  //6 windows on the left
  drawWindow(jthX - 230 * jthS, jthY + 60 * jthS, 1 * jthS);
  drawWindow(jthX - 190 * jthS, jthY + 60 * jthS, 1 * jthS);
  drawWindow(jthX - 140 * jthS, jthY + 60 * jthS, 1 * jthS);
  drawWindow(jthX - 100 * jthS, jthY + 60 * jthS, 1 * jthS);
  drawWindow(jthX - 50 * jthS, jthY + 60 * jthS, 1 * jthS);
  drawWindow(jthX - 10 * jthS, jthY + 60 * jthS, 1 * jthS);

  //4 windows on the right
  drawWindow(jthX + 140 * jthS, jthY + 60 * jthS, 1 * jthS);
  drawWindow(jthX + 180 * jthS, jthY + 60 * jthS, 1 * jthS);
  drawWindow(jthX + 230 * jthS, jthY + 60 * jthS, 1 * jthS);
  drawWindow(jthX + 270 * jthS, jthY + 60 * jthS, 1 * jthS);

  //4 windows on rect 1
  drawWindow(jthX - 175 * jthS, jthY - 10 * jthS, 1 * jthS);
  drawWindow(jthX - 135 * jthS, jthY - 10 * jthS, 1 * jthS);

  drawWindow(jthX - 175 * jthS, jthY - 40 * jthS, 1 * jthS);
  drawWindow(jthX - 135 * jthS, jthY - 40 * jthS, 1 * jthS);

  //4 windows on rect 2
  drawWindow(jthX, jthY - 10 * jthS, 1 * jthS);
  drawWindow(jthX + 40 * jthS, jthY - 10 * jthS, 1 * jthS);

  drawWindow(jthX, jthY - 40 * jthS, 1 * jthS);
  drawWindow(jthX + 40 * jthS, jthY - 40 * jthS, 1 * jthS);

  //4 windows on rect 3
  drawWindow(jthX + 175 * jthS, jthY - 10 * jthS, 1 * jthS);
  drawWindow(jthX + 215 * jthS, jthY - 10 * jthS, 1 * jthS);

  drawWindow(jthX + 175 * jthS, jthY - 40 * jthS, 1 * jthS);
  drawWindow(jthX + 215 * jthS, jthY - 40 * jthS, 1 * jthS);

  //4 windows on the middle left
  drawWindow(jthX - 85 * jthS, jthY - 5 * jthS, 0.8 * jthS);
  drawWindow(jthX - 55 * jthS, jthY - 5 * jthS, 0.8 * jthS);
  drawWindow(jthX - 85 * jthS, jthY - 30 * jthS, 0.8 * jthS);
  drawWindow(jthX - 55 * jthS, jthY - 30 * jthS, 0.8 * jthS);

  //4 windows on the middle right
  drawWindow(jthX + 90 * jthS, jthY - 5 * jthS, 0.8 * jthS);
  drawWindow(jthX + 120 * jthS, jthY - 5 * jthS, 0.8 * jthS);
  drawWindow(jthX + 90 * jthS, jthY - 30 * jthS, 0.8 * jthS);
  drawWindow(jthX + 120 * jthS, jthY - 30 * jthS, 0.8 * jthS);

  //roof
  noStroke();
  fill(110, 100, 40);
  rect(jthX - 210 * jthS, jthY - 105 * jthS, 15 * jthS, 5 * jthS);
  rect(jthX + 190 * jthS, jthY - 105 * jthS, 15 * jthS, 5 * jthS);
  rect(jthX - 190 * jthS, jthY - 105 * jthS, 8 * jthS, 5 * jthS);
  rect(jthX - 110 * jthS, jthY - 105 * jthS, 8 * jthS, 5 * jthS);
  rect(jthX, jthY - 105 * jthS, 8 * jthS, 5 * jthS);
  rect(jthX + 175 * jthS, jthY - 105 * jthS, 8 * jthS, 5 * jthS);
  rect(jthX + 100 * jthS, jthY - 105 * jthS, 8 * jthS, 5 * jthS);
}

function drawWindow(jthX, jthY, jthS) {
  //window
  fill(95, 235, 235);
  rect(jthX - 35 * jthS, jthY - 10 * jthS, 30 * jthS, 20 * jthS);
  stroke(0);
  line(jthX - 22 * jthS, jthY + 10 * jthS, jthX - 22 * jthS, jthY - 10 * jthS);
  line(jthX - 18 * jthS, jthY + 10 * jthS, jthX - 18 * jthS, jthY - 10 * jthS);

  line(jthX - 35 * jthS, jthY, jthX - 5 * jthS, jthY);
}

function cloud(jthX, jthY, jthS) {
  noStroke();
  fill(255, 255, 255);
  rect(jthX - 50 * jthS, jthY + 180 * jthS, 100 * jthS, 30 * jthS);
  ellipse(jthX, jthY + 180 * jthS, 55 * jthS);
  ellipse(jthX - 30 * jthS, jthY + 180 * jthS, 35 * jthS);
  ellipse(jthX + 30 * jthS, jthY + 180 * jthS, 35 * jthS);
  ellipse(jthX - 50 * jthS, jthY + 195 * jthS, 30 * jthS);
  ellipse(jthX + 50 * jthS, jthY + 195 * jthS, 30 * jthS);
}

function playAgain() {
  noStroke();
  fill(240, 220, 20);
  rect(170, 200, 250, 100, 20);

  fill(255);
  textStyle(BOLD);
  textSize(30);
  text("PLAY AGAIN", 200, 260);
}

function menu() {
  noStroke();
  fill(45, 170, 20);
  rect(220, 330, 150, 50, 20);

  fill(255);
  textStyle(BOLD);
  textSize(20);
  text("MENU", 265, 365);
}

function resultSuccess() {
  fill(70, 220, 220);
  rect(0, 0, 600, 700);

  cloud(500, 150, 0.5);
  cloud(400, 200, 1);
  cloud(160, 40, 0.7);
  cloud(40, 0, 0.5);
  cloud(100, 180, 0.7);
  cloud(300, 30, 0.2);
  cloud(480, 0, 0.6);

  fill(20, 150, 20);
  textStyle(BOLD);
  textSize(40);
  text("YOU ARE IN TIME!", 130, 150);

  jthSchool(300, 550, 1);

  //floor
  fill(200, 200, 145);
  rect(0, 650, width, height);

  playerSuccess.draw();
  tree1.draw();
  tree2.draw();
  bush1.draw();
  bush2.draw();

  playAgain();
  menu();
}

function resultFailed() {
  fill(145, 170, 170);
  rect(0, 0, 600, 700);

  cloud(500, 150, 0.5);
  cloud(400, 200, 1);
  cloud(280, 70, 0.7);
  cloud(40, 0, 0.5);
  cloud(100, 180, 0.7);
  cloud(300, 30, 0.2);
  cloud(480, 0, 0.6);

  fill(205, 50, 15);
  textStyle(BOLD);
  textSize(40);
  text("YOU ARE NOT IN TIME!", 70, 150);

  jthSchool(300, 550, 0.5);

  //floor
  fill(200, 200, 145);
  rect(0, 600, width, height);

  //street
  stroke(0);
  line(100, 750, 300, 600);
  line(700, 800, 345, 600);

  playerFail.draw();

  tree3.draw();
  tree4.draw();
  tree5.draw();
  tree6.draw();
  bush3.draw();
  bush4.draw();
  bush5.draw();
  bush6.draw();

  playAgain();
  menu();
}

function draw() {
  resultSuccess();

  resultFailed();
}
