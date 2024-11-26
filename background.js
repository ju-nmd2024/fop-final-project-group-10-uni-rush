function setup() {
  createCanvas(600, 700);

  bushes = [
    new Bush(50, 170, 0.5),
    new Bush(95, 265, 0.5),
    new Bush(50, 480, 0.5),
    new Bush(110, 665, 0.5),
    new Bush(500, 50, 0.2),
    new Bush(480, 300, 0.2),
    new Bush(470, 500, 0.2),
    new Bush(480, 650, 0.2),
  ];

  trees = [new Tree(90, 50, 1), new Tree(90, 350, 1), new Tree(70, 580, 1)];

  rocks = [
    new Rock(480, 100, 0.5),
    new Rock(490, 265, 0.5),
    new Rock(460, 450, 0.5),
    new Rock(490, 580, 0.5),
  ];
}

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

class Rock {
  constructor(rockX, rockY, rockS) {
    this.rockX = rockX;
    this.rockY = rockY;
    this.rockS = rockS;
  }
  draw() {
    fill(95, 90, 90);
    ellipse(this.rockX, this.rockY, 10 * this.rockS, 15 * this.rockS);
  }
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

  //sand
  fill(180, 190, 50);
  rect(450, 0, 100, 700);

  //lake
  fill(20, 140, 160, 100);
  rect(515, 0, 100, 700);

  fill(20, 140, 160, 110);
  rect(530, 0, 20, 700);

  for (let bush of bushes) {
    bush.draw();
    bush.bushY += 1; // Move the bush down

    // Reset bush position when it moves off the canvas
    if (bush.bushY > 720) {
      bush.bushY = -40; // Reset to just above the canvas
    }
  }

  for (let tree of trees) {
    tree.draw();
    tree.treeY += 1;

    if (tree.treeY > 720) {
      tree.treeY = -40;
    }
  }

  for (let rock of rocks) {
    rock.draw();
    rock.rockY += 1;

    if (rock.rockY > 720) {
      rock.rockY = -40;
    }
  }
}
