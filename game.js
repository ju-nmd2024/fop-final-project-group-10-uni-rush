let state = "start";

//Game timer
let gameTimer = 0;

//for the array for the characters (all ppl are in characters) moving down
let characters = [];
let speed = 7;
let isJumping = false;

//player moves left and right in the lanes
let lanes = [200, 300, 400];
let currentLane = 1;
let appearingInterval = 2500;
let lives = 3; //lives for hearts
let hearts = [];

//function for the canvas
function setup() {
  createCanvas(600, 700);

  //the following 6 lines are from chatgpt - https://chatgpt.com/share/674ee8a8-603c-8010-820f-d3ccb076d24b
  //time interval in which the player come down (characters only come when state = game)
  setInterval(() => {
    if (state === "game") {
      appearingCharacter();
    }
  }, appearingInterval);

  //create instance(objects)
  characters.push(new Grandpa(400, 50, 0.8));
  characters.push(new Biker(200, 500, 0.8));
  characters.push(new Bunny(300, 200, 0.8));

  //bushes array
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

  //hearts
  hearts = [];
  for (let i = 0; i < 3; i++) {
    hearts.push(new Heart(480 + i * 40, 20, 30));
  }
}

//Uni Rush start screen
function startScreen(x, y) {
  background(69, 49, 90);
  noStroke();

  //window
  fill(0, 0, 0);
  rect(x + 250, y + 100, 150, 200);

  //bed wood
  fill(107, 91, 64);
  rect(x - 20, y + 345, 10, 120);
  rect(x + 320, y + 345, 10, 120);

  rect(x - 12, y + 400, 340, 30);

  //bedsheet
  fill(64, 96, 107);
  rect(x - 8, y + 375, 65, 25, 10, 20, 0);
  rect(x + 70, y + 375, 245, 25, 10, 20, 0);

  //head
  fill(135, 109, 91);
  ellipse(x + 25, y + 370, 50, 40);

  //hair
  fill(80, 52, 20);
  ellipse(x + 25, y + 375, 50, 40);
  ellipse(x + 60, y + 380, 50, 40);

  //clock
  fill(107, 91, 64);
  rect(x - 55, y + 280, 80, 10);
  fill(230, 169, 124);
  strokeWeight(2);
  stroke(20, 20, 20);
  rect(x - 50, y + 250, 70, 30, 5);
  noStroke();
  fill(0, 0, 0);
  textSize(25);
  text("08:10", x - 45, y + 275);

  //Uni rush head line
  fill(236, 61, 61);
  textSize(80);
  text("UNI RUSH", x + 6, y);
  textSize(20);
  text("Don't miss your exam!", x + 100, y + 25);

  //button start
  fill(234, 206, 173);
  rect(x + 20, y + 100, 200, 50, 10);

  // text
  fill(255, 255, 255);
  textSize(50);
  text("START", x + 45, y + 143);

  //button instructions
  fill(234, 206, 173);
  rect(x + 20, y + 160, 200, 25, 10);

  fill(255, 255, 255);
  textSize(20);
  text("Instructions", x + 70, y + 180);

  //stars
  fill(255, 255, 255);
  ellipse(385, 330, 8);
  ellipse(395, 358, 5);
  ellipse(485, 230, 10);
  ellipse(465, 380, 2);
  ellipse(400, 230, 2);
  ellipse(425, 250, 4);
  ellipse(460, 250, 8);
  ellipse(435, 310, 5);
}

function instructionScreen(x, y) {
  background(69, 49, 90);
  noStroke();
  fill(255, 255, 255);
  textSize(40);
  text("INSTRUCTIONS", x + 50, y);

  textSize(20);
  text("Read CAREFULLY! Otherwise you will fail your course.", x - 50, y + 30);

  // Instructions
  textSize(15);
  text(
    "1. Use the arrow keys (←, ↑, →) to move between the three lanes",
    x - 40,
    y + 120
  );
  text("and dodge obstacles.", x - 20, y + 140);

  text("2. If you hit an obstacle, you will loose one life", x - 40, y + 170);

  text(
    "3. If you lose all your lives, you fail to reach university on time",
    x - 40,
    y + 200
  );
  text("and lose the game", x - 20, y + 220);

  text(
    "4. Reach university with at least 1 life left to win the game!",
    x - 40,
    y + 250
  );

  //button
  fill(234, 206, 173);
  rect(x + 100, y + 400, 200, 50, 10);

  // text go back
  fill(255, 255, 255);
  textSize(40);
  text("GO BACK", x + 108, y + 440);
}

function gameScreen() {
  // street lane
  fill(165, 185, 175);
  rect(150, 0, 300, 700);

  stroke(0);
  strokeWeight(0.5);
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
    bush.bushY += speed; // Move the bush down

    // Reset bush position when it moves off the canvas
    if (bush.bushY > 720) {
      bush.bushY = -50; // Reset to just above the canvas
    }
  }

  for (let tree of trees) {
    tree.draw();
    tree.treeY += speed;

    if (tree.treeY > 720) {
      tree.treeY = -50;
    }
  }

  for (let rock of rocks) {
    rock.draw();
    rock.rockY += speed;

    if (rock.rockY > 720) {
      rock.rockY = -50;
    }
  }
}

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

let player = new Player(300, 550, 0.8);
let jumpPlayer = new Player(300, 550, 1);

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

class Grandpa {
  constructor(GrandpaX, GrandpaY, GrandpaS) {
    this.GrandpaX = GrandpaX;
    this.GrandpaY = GrandpaY;
    this.GrandpaS = GrandpaS;
  }

  draw() {
    noStroke();

    //ears
    fill(235, 210, 180);
    ellipse(
      this.GrandpaX - 23 * this.GrandpaS,
      this.GrandpaY,
      15 * this.GrandpaS
    );
    ellipse(
      this.GrandpaX + 23 * this.GrandpaS,
      this.GrandpaY,
      15 * this.GrandpaS
    );

    //throught
    beginShape();
    vertex(
      this.GrandpaX - 10 * this.GrandpaS,
      this.GrandpaY + 20 * this.GrandpaS
    );
    bezierVertex(
      this.GrandpaX - 10 * this.GrandpaS,
      this.GrandpaY + 25 * this.GrandpaS,
      this.GrandpaX - 10 * this.GrandpaS,
      this.GrandpaY + 30 * this.GrandpaS,
      this.GrandpaX - 15 * this.GrandpaS,
      this.GrandpaY + 35 * this.GrandpaS
    );
    vertex(
      this.GrandpaX + 15 * this.GrandpaS,
      this.GrandpaY + 35 * this.GrandpaS
    );
    bezierVertex(
      this.GrandpaX + 10 * this.GrandpaS,
      this.GrandpaY + 30 * this.GrandpaS,
      this.GrandpaX + 10 * this.GrandpaS,
      this.GrandpaY + 25 * this.GrandpaS,
      this.GrandpaX + 10 * this.GrandpaS,
      this.GrandpaY + 20 * this.GrandpaS
    );
    endShape(CLOSE);

    //Head hair
    fill(205, 202, 198);
    ellipse(this.GrandpaX, this.GrandpaY, 50 * this.GrandpaS);

    //arm left
    fill(235, 210, 180);
    beginShape();
    vertex(
      this.GrandpaX - 28 * this.GrandpaS,
      this.GrandpaY + 36 * this.GrandpaS
    );
    vertex(
      this.GrandpaX - 50 * this.GrandpaS,
      this.GrandpaY + 50 * this.GrandpaS
    );
    bezierVertex(
      this.GrandpaX - 55 * this.GrandpaS,
      this.GrandpaY + 55 * this.GrandpaS,
      this.GrandpaX - 55 * this.GrandpaS,
      this.GrandpaY + 60 * this.GrandpaS,
      this.GrandpaX - 47 * this.GrandpaS,
      this.GrandpaY + 70 * this.GrandpaS
    );
    vertex(
      this.GrandpaX - 30 * this.GrandpaS,
      this.GrandpaY + 85 * this.GrandpaS
    );
    vertex(
      this.GrandpaX - 30 * this.GrandpaS,
      this.GrandpaY + 73 * this.GrandpaS
    );
    vertex(
      this.GrandpaX - 40 * this.GrandpaS,
      this.GrandpaY + 60 * this.GrandpaS
    );
    vertex(
      this.GrandpaX - 30 * this.GrandpaS,
      this.GrandpaY + 53 * this.GrandpaS
    );
    endShape();

    //arm right
    beginShape();
    vertex(
      this.GrandpaX + 28 * this.GrandpaS,
      this.GrandpaY + 36 * this.GrandpaS
    );
    vertex(
      this.GrandpaX + 50 * this.GrandpaS,
      this.GrandpaY + 50 * this.GrandpaS
    );
    bezierVertex(
      this.GrandpaX + 55 * this.GrandpaS,
      this.GrandpaY + 55 * this.GrandpaS,
      this.GrandpaX + 55 * this.GrandpaS,
      this.GrandpaY + 60 * this.GrandpaS,
      this.GrandpaX + 47 * this.GrandpaS,
      this.GrandpaY + 70 * this.GrandpaS
    );
    vertex(
      this.GrandpaX + 30 * this.GrandpaS,
      this.GrandpaY + 85 * this.GrandpaS
    );
    vertex(
      this.GrandpaX + 30 * this.GrandpaS,
      this.GrandpaY + 73 * this.GrandpaS
    );
    vertex(
      this.GrandpaX + 40 * this.GrandpaS,
      this.GrandpaY + 60 * this.GrandpaS
    );
    vertex(
      this.GrandpaX + 30 * this.GrandpaS,
      this.GrandpaY + 53 * this.GrandpaS
    );
    endShape();

    //body
    fill(72, 86, 126);
    rect(
      this.GrandpaX - 32.5 * this.GrandpaS,
      this.GrandpaY + 35 * this.GrandpaS,
      65 * this.GrandpaS,
      70 * this.GrandpaS,
      10 * this.GrandpaS
    );

    //leg pants left/right
    fill(72, 86, 126);
    rect(
      this.GrandpaX - 30 * this.GrandpaS,
      this.GrandpaY + 90 * this.GrandpaS,
      20 * this.GrandpaS,
      40 * this.GrandpaS,
      20 * this.GrandpaS
    );
    rect(
      this.GrandpaX + 10 * this.GrandpaS,
      this.GrandpaY + 90 * this.GrandpaS,
      20 * this.GrandpaS,
      40 * this.GrandpaS,
      20 * this.GrandpaS
    );

    //leg left/ right
    fill(235, 210, 180);
    rect(
      this.GrandpaX + 13 * this.GrandpaS,
      this.GrandpaY + 125 * this.GrandpaS,
      14 * this.GrandpaS,
      20 * this.GrandpaS
    );

    rect(
      this.GrandpaX - 27 * this.GrandpaS,
      this.GrandpaY + 125 * this.GrandpaS,
      14 * this.GrandpaS,
      20 * this.GrandpaS
    );

    //shoes left/right
    fill(10, 10, 10);
    rect(
      this.GrandpaX - 30 * this.GrandpaS,
      this.GrandpaY + 143 * this.GrandpaS,
      20 * this.GrandpaS,
      10 * this.GrandpaS,
      10 * this.GrandpaS
    );

    rect(
      this.GrandpaX + 10 * this.GrandpaS,
      this.GrandpaY + 143 * this.GrandpaS,
      20 * this.GrandpaS,
      10 * this.GrandpaS,
      10 * this.GrandpaS
    );
  }
}

class Biker extends Grandpa {
  constructor(GrandpaX, GrandpaY, GrandpaS) {
    super(GrandpaX, GrandpaY, GrandpaS);
  }
  draw() {
    noStroke();

    //ears
    fill(175, 127, 66);
    ellipse(
      this.GrandpaX - 23 * this.GrandpaS,
      this.GrandpaY,
      15 * this.GrandpaS
    );
    ellipse(
      this.GrandpaX + 23 * this.GrandpaS,
      this.GrandpaY,
      15 * this.GrandpaS
    );

    //throught
    beginShape();
    vertex(
      this.GrandpaX - 10 * this.GrandpaS,
      this.GrandpaY + 20 * this.GrandpaS
    );
    bezierVertex(
      this.GrandpaX - 10 * this.GrandpaS,
      this.GrandpaY + 25 * this.GrandpaS,
      this.GrandpaX - 10 * this.GrandpaS,
      this.GrandpaY + 30 * this.GrandpaS,
      this.GrandpaX - 15 * this.GrandpaS,
      this.GrandpaY + 35 * this.GrandpaS
    );
    vertex(
      this.GrandpaX + 15 * this.GrandpaS,
      this.GrandpaY + 35 * this.GrandpaS
    );
    bezierVertex(
      this.GrandpaX + 10 * this.GrandpaS,
      this.GrandpaY + 30 * this.GrandpaS,
      this.GrandpaX + 10 * this.GrandpaS,
      this.GrandpaY + 25 * this.GrandpaS,
      this.GrandpaX + 10 * this.GrandpaS,
      this.GrandpaY + 20 * this.GrandpaS
    );
    endShape(CLOSE);

    //Head hair
    fill(62, 40, 0);
    ellipse(this.GrandpaX, this.GrandpaY, 50 * this.GrandpaS);

    //arm left
    fill(175, 127, 66);
    beginShape();
    vertex(
      this.GrandpaX - 28 * this.GrandpaS,
      this.GrandpaY + 36 * this.GrandpaS
    );
    vertex(
      this.GrandpaX - 50 * this.GrandpaS,
      this.GrandpaY + 50 * this.GrandpaS
    );
    bezierVertex(
      this.GrandpaX - 55 * this.GrandpaS,
      this.GrandpaY + 55 * this.GrandpaS,
      this.GrandpaX - 55 * this.GrandpaS,
      this.GrandpaY + 60 * this.GrandpaS,
      this.GrandpaX - 47 * this.GrandpaS,
      this.GrandpaY + 70 * this.GrandpaS
    );
    vertex(
      this.GrandpaX - 30 * this.GrandpaS,
      this.GrandpaY + 85 * this.GrandpaS
    );
    vertex(
      this.GrandpaX - 30 * this.GrandpaS,
      this.GrandpaY + 73 * this.GrandpaS
    );
    vertex(
      this.GrandpaX - 40 * this.GrandpaS,
      this.GrandpaY + 60 * this.GrandpaS
    );
    vertex(
      this.GrandpaX - 30 * this.GrandpaS,
      this.GrandpaY + 53 * this.GrandpaS
    );
    endShape();

    //arm right
    beginShape();
    vertex(
      this.GrandpaX + 28 * this.GrandpaS,
      this.GrandpaY + 36 * this.GrandpaS
    );
    vertex(
      this.GrandpaX + 50 * this.GrandpaS,
      this.GrandpaY + 50 * this.GrandpaS
    );
    bezierVertex(
      this.GrandpaX + 55 * this.GrandpaS,
      this.GrandpaY + 55 * this.GrandpaS,
      this.GrandpaX + 55 * this.GrandpaS,
      this.GrandpaY + 60 * this.GrandpaS,
      this.GrandpaX + 47 * this.GrandpaS,
      this.GrandpaY + 70 * this.GrandpaS
    );
    vertex(
      this.GrandpaX + 30 * this.GrandpaS,
      this.GrandpaY + 85 * this.GrandpaS
    );
    vertex(
      this.GrandpaX + 30 * this.GrandpaS,
      this.GrandpaY + 73 * this.GrandpaS
    );
    vertex(
      this.GrandpaX + 40 * this.GrandpaS,
      this.GrandpaY + 60 * this.GrandpaS
    );
    vertex(
      this.GrandpaX + 30 * this.GrandpaS,
      this.GrandpaY + 53 * this.GrandpaS
    );
    endShape();

    //body
    fill(147, 138, 189);
    rect(
      this.GrandpaX - 32.5 * this.GrandpaS,
      this.GrandpaY + 35 * this.GrandpaS,
      65 * this.GrandpaS,
      70 * this.GrandpaS,
      10 * this.GrandpaS
    );

    //leg pants left/right
    fill(147, 138, 189);
    rect(
      this.GrandpaX - 30 * this.GrandpaS,
      this.GrandpaY + 90 * this.GrandpaS,
      20 * this.GrandpaS,
      40 * this.GrandpaS,
      20 * this.GrandpaS
    );
    rect(
      this.GrandpaX + 10 * this.GrandpaS,
      this.GrandpaY + 90 * this.GrandpaS,
      20 * this.GrandpaS,
      40 * this.GrandpaS,
      20 * this.GrandpaS
    );

    //leg right
    fill(175, 127, 66);
    rect(
      this.GrandpaX + 13 * this.GrandpaS,
      this.GrandpaY + 125 * this.GrandpaS,
      14 * this.GrandpaS,
      20 * this.GrandpaS
    );

    //shoes left/right
    fill(110, 99, 78);
    rect(
      this.GrandpaX - 30 * this.GrandpaS,
      this.GrandpaY + 120 * this.GrandpaS,
      20 * this.GrandpaS,
      25 * this.GrandpaS,
      20 * this.GrandpaS
    );
    rect(
      this.GrandpaX + 10 * this.GrandpaS,
      this.GrandpaY + 143 * this.GrandpaS,
      20 * this.GrandpaS,
      10 * this.GrandpaS,
      10 * this.GrandpaS
    );

    //bike pedal line left/right
    strokeWeight(1);
    stroke(0, 0, 0);
    line(
      this.GrandpaX - 13 * this.GrandpaS,
      this.GrandpaY + 134 * this.GrandpaS,
      this.GrandpaX - 8 * this.GrandpaS,
      this.GrandpaY + 134 * this.GrandpaS
    );
    line(
      this.GrandpaX - 8 * this.GrandpaS,
      this.GrandpaY + 134 * this.GrandpaS,
      this.GrandpaX - 8 * this.GrandpaS,
      this.GrandpaY + 150 * this.GrandpaS
    );
    line(
      this.GrandpaX - 8 * this.GrandpaS,
      this.GrandpaY + 150 * this.GrandpaS,
      this.GrandpaX - 4 * this.GrandpaS,
      this.GrandpaY + 150 * this.GrandpaS
    );

    line(
      this.GrandpaX + 4 * this.GrandpaS,
      this.GrandpaY + 153 * this.GrandpaS,
      this.GrandpaX + 10 * this.GrandpaS,
      this.GrandpaY + 153 * this.GrandpaS
    );

    //saddle support
    strokeWeight(3);
    line(
      this.GrandpaX + 1 * this.GrandpaS,
      this.GrandpaY + 106 * this.GrandpaS,
      this.GrandpaX + 1 * this.GrandpaS,
      this.GrandpaY + 120 * this.GrandpaS
    );

    //bike wheel
    noStroke();
    fill(75, 75, 75);
    rect(
      this.GrandpaX - 3 * this.GrandpaS,
      this.GrandpaY + 117 * this.GrandpaS,
      10 * this.GrandpaS,
      60 * this.GrandpaS,
      20 * this.GrandpaS
    );

    //bike saddle
    rect(
      this.GrandpaX - 10 * this.GrandpaS,
      this.GrandpaY + 100 * this.GrandpaS,
      22 * this.GrandpaS,
      10 * this.GrandpaS,
      20 * this.GrandpaS
    );

    //bike pedals left/right
    fill(10, 10, 10);
    rect(
      this.GrandpaX - 30 * this.GrandpaS,
      this.GrandpaY + 130 * this.GrandpaS,
      20 * this.GrandpaS,
      8 * this.GrandpaS,
      10 * this.GrandpaS
    );
    rect(
      this.GrandpaX + 10 * this.GrandpaS,
      this.GrandpaY + 150 * this.GrandpaS,
      20 * this.GrandpaS,
      8 * this.GrandpaS,
      10 * this.GrandpaS
    );
  }
}

class Bunny extends Grandpa {
  constructor(GrandpaX, GrandpaY, GrandpaS) {
    super(GrandpaX, GrandpaY, GrandpaS);
  }
  draw() {
    // legs left/right
    fill(196, 195, 194);
    rect(
      this.GrandpaX - 15 * this.GrandpaS,
      this.GrandpaY + 20 * this.GrandpaS,
      8 * this.GrandpaS,
      15 * this.GrandpaS,
      20 * this.GrandpaS
    );
    rect(
      this.GrandpaX + 7 * this.GrandpaS,
      this.GrandpaY + 20 * this.GrandpaS,
      8 * this.GrandpaS,
      15 * this.GrandpaS,
      20 * this.GrandpaS
    );

    // body
    fill(215, 213, 210);
    ellipse(
      this.GrandpaX,
      this.GrandpaY,
      40 * this.GrandpaS,
      60 * this.GrandpaS
    );

    // head
    fill(196, 195, 194);
    ellipse(
      this.GrandpaX,
      this.GrandpaY - 20 * this.GrandpaS,
      30 * this.GrandpaS,
      40 * this.GrandpaS
    );

    // nose
    fill(0, 0, 0);
    ellipse(
      this.GrandpaX,
      this.GrandpaY - 40 * this.GrandpaS,
      5 * this.GrandpaS
    );

    // eyes left/right
    fill(255, 255, 255);
    ellipse(
      this.GrandpaX - 5 * this.GrandpaS,
      this.GrandpaY - 23 * this.GrandpaS,
      10 * this.GrandpaS,
      15 * this.GrandpaS
    );
    fill(0, 0, 0);
    ellipse(
      this.GrandpaX - 5 * this.GrandpaS,
      this.GrandpaY - 25 * this.GrandpaS,
      5 * this.GrandpaS,
      8 * this.GrandpaS
    );

    fill(255, 255, 255);
    ellipse(
      this.GrandpaX + 5 * this.GrandpaS,
      this.GrandpaY - 23 * this.GrandpaS,
      10 * this.GrandpaS,
      15 * this.GrandpaS
    );
    fill(0, 0, 0);
    ellipse(
      this.GrandpaX + 5 * this.GrandpaS,
      this.GrandpaY - 25 * this.GrandpaS,
      5 * this.GrandpaS,
      8 * this.GrandpaS
    );

    // tail
    fill(255, 255, 255);
    ellipse(
      this.GrandpaX,
      this.GrandpaY + 28 * this.GrandpaS,
      10 * this.GrandpaS
    );

    // ears left/right
    fill(196, 195, 194);
    ellipse(
      this.GrandpaX - 10 * this.GrandpaS,
      this.GrandpaY,
      10 * this.GrandpaS,
      30 * this.GrandpaS
    );
    ellipse(
      this.GrandpaX + 10 * this.GrandpaS,
      this.GrandpaY,
      10 * this.GrandpaS,
      30 * this.GrandpaS
    );
    fill(238, 198, 228);
    ellipse(
      this.GrandpaX - 10 * this.GrandpaS,
      this.GrandpaY,
      5 * this.GrandpaS,
      25 * this.GrandpaS
    );
    ellipse(
      this.GrandpaX + 10 * this.GrandpaS,
      this.GrandpaY,
      5 * this.GrandpaS,
      25 * this.GrandpaS
    );
  }
}

class Heart {
  constructor(heartX, heartY, heartSize) {
    this.heartX = heartX;
    this.heartY = heartY;
    this.heartSize = heartSize;
    this.isFilled = true;
  }

  draw() {
    // Top left curve

    if (this.isFilled) {
      fill(255, 0, 0); // Red if filled
    } else {
      fill(100); // Gray if not filled
    }

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
// Turn the next heart gray
function updateHearts() {
  if (lives >= 0 && lives < hearts.length) {
    hearts[3 - lives - 1].isFilled = false;
  }
}

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

function appearingCharacter() {
  // Randomly select a lane (200, 300, or 400)
  let lane = random(lanes);

  // Randomly choose a character type (e.g., Grandpa, Biker, or Bunny)
  let randomCharacter = random(["Grandpa", "Biker", "Bunny"]);

  // Define a random position (offscreen, top of the canvas)
  let appearingX = lane;

  // Start above the screen
  let appearingY = -50;

  // Create the new character based on the random choice
  if (randomCharacter === "Grandpa") {
    characters.push(new Grandpa(appearingX, appearingY, 0.8));
  } else if (randomCharacter === "Biker") {
    characters.push(new Biker(appearingX, appearingY, 0.8));
  } else if (randomCharacter === "Bunny") {
    characters.push(new Bunny(appearingX, appearingY, 0.8));
  }
}

function checkCollision(player, character) {
  // Box of Player
  let playerWidth = 30 * player.s;
  let playerHeight = 150 * player.s;
  let playerLeft = player.x - playerWidth / 2;
  let playerRight = player.x + playerWidth / 2;
  let playerTop = player.y;
  let playerBottom = player.y + playerHeight;

  // Box of Characters
  let charWidth = 30 * character.GrandpaS;
  let charHeight = 170 * character.GrandpaS;

  let charLeft = character.GrandpaX - charWidth / 2;
  let charRight = character.GrandpaX + charWidth / 2;
  let charTop = character.GrandpaY;
  let charBottom = character.GrandpaY + charHeight;

  // Check if the hitboxes overlap
  return (
    playerLeft < charRight &&
    playerRight > charLeft &&
    playerTop < charBottom &&
    playerBottom > charTop
  );
}

function detectCollisions() {
  if (!isJumping) {
    for (let character of characters) {
      // Check collision with the player (only if the player is on the ground)
      if (checkCollision(player, character)) {
        // Check if the character is a Grandpa or Biker
        if (character instanceof Grandpa || character instanceof Biker) {
          if (lives > 0) {
            // Only remove one character, not multiple
            characters.splice(characters.indexOf(character), 1);
            lives--;
            updateHearts();
          }
        }

        // If lives are 0, go to the resultFailed state
        if (lives === 0) {
          state = "resultFailed";
        }
        break; // Exit after the first collision to avoid multiple life losses
      }
    }
  }
}

//chatgpt startJump for setTimeout - https://chatgpt.com/share/674efc6b-0b3c-8001-bd93-90813635dbd7
function startJump() {
  if (isJumping === false) {
    isJumping = true;
    setTimeout(() => {
      // after 1 sec the jump will be false
      isJumping = false;
    }, 1000);
  }
}

function resetGame() {
  // Reset gameTimer and lifes
  gameTimer = 0;
  lives = 3;
  speed = 7;
  appearingInterval = 2500;

  // Reset hearts
  for (let heart of hearts) {
    heart.isFilled = true;
  }

  // Reset player and characters
  //https://p5js.org/search/?term=reset for the .reset();
  player.reset();
  for (let character of characters) {
    character.resetPosition();
  }
}

function draw() {
  if (state === "start") {
    startScreen(100, 100);
  } else if (state === "instruction") {
    instructionScreen(100, 100);
  } else if (state === "game") {
    gameScreen();
    if (gameTimer < 2000) {
      gameTimer = gameTimer + 1;
    } else {
      state = "success";
      resultSuccess();
    }
    //notice when arrow keys are switched + when
    if (gameTimer >= 1500 && gameTimer <= 1550) {
      textSize(40);
      fill(236, 61, 61);
      text("Switched", 220, 500);

      textSize(30);
      text("Arrow keys", 230, 455);
    }
    //make the characters move faster with modulo operator
    if (gameTimer >= 1000 && gameTimer <= 1500) {
      //text("hey", 200, 500);
      speed = 13;
      if (frameCount % 60 === 0) {
        appearingCharacter();
      }
    }
    //Display the time in the top right corner
    if (gameTimer >= 0 && gameTimer <= 500) {
      textSize(40);
      fill(0, 0, 0);
      text("08:11", 475, 100);
    } else if (gameTimer > 500 && gameTimer <= 1000) {
      textSize(40);
      fill(0, 0, 0);
      text("08:12", 475, 100);
    } else if (gameTimer > 1000 && gameTimer <= 1500) {
      textSize(40);
      fill(0, 0, 0);
      text("08:13", 475, 100);
    } else if (gameTimer > 1500 && gameTimer <= 2000) {
      textSize(40);
      fill(0, 0, 0);
      text("08:14", 475, 100);
    }

    //make the characters move
    for (let character of characters) {
      // Update position
      character.GrandpaY += speed;

      // Draw the character
      character.draw();
    }
    detectCollisions();

    // Draw the player or jumpPlayer
    if (isJumping) {
      jumpPlayer.update();
      jumpPlayer.draw();
    } else {
      player.update();
      player.draw();
    }

    for (let heart of hearts) {
      fill(255, 255, 255, 30);
      rect(455, 8, 135, 50, 10);

      heart.draw();
    }
  } else if (state === "success") {
    resultSuccess();
  } else if (state === "resultFailed") {
    resultFailed();
  } else if (state === "reset") {
    resetGame();
    state = "start";
  }
}

function mouseClicked() {
  if (state === "start") {
    if (mouseX >= 120 && mouseX <= 319 && mouseY >= 200 && mouseY <= 250) {
      state = "game";
    } else if (
      mouseX >= 120 &&
      mouseX <= 320 &&
      mouseY >= 260 &&
      mouseY < 285
    ) {
      state = "instruction";
    }
  } else if (
    state === "instruction" &&
    mouseX >= 200 &&
    mouseX <= 400 &&
    mouseY >= 500 &&
    mouseY < 550
  ) {
    state = "start";
  }
  if (state === "resultFailed" || state === "success") {
    if (mouseX >= 170 && mouseX <= 420 && mouseY >= 200 && mouseY <= 300) {
      state = "game";
      resetGame();
    } else if (
      mouseX >= 220 &&
      mouseX <= 370 &&
      mouseY >= 330 &&
      mouseY < 380
    ) {
      state = "start";
      resetGame();
    }
  }
}

//to move the player on the lanes
function keyPressed() {
  //switched arrow keys
  if (gameTimer >= 1500 && gameTimer <= 2000) {
    if (keyIsPressed) {
      if (
        (keyCode === LEFT_ARROW || keyCode === 65) &&
        currentLane < lanes.length - 1
      ) {
        currentLane++;
      } else if (
        (keyCode === RIGHT_ARROW || keyCode === 68) &&
        currentLane > 0
      ) {
        currentLane--;
      }
    }

    //default arrow keys
  } else {
    if ((keyCode === LEFT_ARROW || keyCode === 65) && currentLane > 0) {
      currentLane--;
    } else if (
      (keyCode === RIGHT_ARROW || keyCode === 68) &&
      currentLane < lanes.length - 1
    ) {
      currentLane++;
    } else if (keyCode === UP_ARROW && isJumping === false) {
      startJump();
    }
  }
}
