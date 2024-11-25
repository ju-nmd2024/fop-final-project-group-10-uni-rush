function setup() {
  createCanvas(600, 700);
}

let rockX = 490;
let rockY = 40;

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

let tree1 = new Tree(90, 50, 1);
let tree2 = new Tree(90, 350, 1);
let tree3 = new Tree(70, 600, 1);

function bush(treeX, treeY, treeS) {
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
}

function rock(rockX, rockY) {
  fill(95, 90, 90);
  ellipse(rockX, rockY, 10, 15);
}

function draw() {
  // street lane
  fill(165, 185, 175);
  rect(150, 0, 300, 700);

  stroke(0);
  line(250, 0, 250, 700);
  line(350, 0, 350, 700);

  //grass
  noStroke();
  fill(10, 130, 15);
  rect(0, 0, 150, 700);

  //MAKE BUSH A CLASS
  bush(50, 200, 0.5);
  bush(90, 520, 0.5);

  //sand
  fill(180, 190, 50);
  rect(450, 0, 100, 700);

  //MAKE ROCK AND BUSH A CLASS
  rock(470, 100);
  rock(490, 200);
  rock(475, 400);
  rock(500, 550);

  bush(480, 50, 0.2);
  bush(490, 250, 0.2);
  bush(470, 450, 0.2);
  bush(475, 580, 0.2);

  //lake
  fill(20, 140, 160, 100);
  rect(515, 0, 100, 700);

  fill(20, 140, 160, 110);
  rect(530, 0, 20, 700);

  tree1.draw();
  tree2.draw();
  tree3.draw();
}

//MAKE BUSH, ROCKS A CLASS
