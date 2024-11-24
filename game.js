let state = "start";
//for the array for the characters (all ppl are in characters) moving down
let characters = [];
let speed = 2;

//chatGPT
let stars = [];
const regionX = 350;
const regionY = 200;
const regionWidth = 150;
const regionHeight = 200;

//function for the canvas and the stars to have them in the rect
function setup() {
  createCanvas(600, 700);

  //stars
  for (let i = 0; i < 100; i++) {
    const star = {
      x: Math.random() * regionWidth + regionX,
      y: Math.random() * regionHeight + regionY,
      alpha: Math.random(),
    };
    stars.push(star);
  }

  //create instance(objects)
  characters.push(new Grandpa(400, 100, 0.8));
  characters.push(new Biker(200, 50, 0.8));
  characters.push(new Bunny(300, 200, 0.8));
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

  //body

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
}

function gameScreen() {
  // street lane
  fill(165, 185, 175);
  rect(150, 0, 300, 700);

  stroke(0);
  strokeWeight(0.8);
  line(250, 0, 250, 700);
  line(350, 0, 350, 700);

  //grass
  noStroke();
  fill(10, 130, 15);
  rect(0, 0, 150, 700);

  tree(60, 100, 1);
  tree(90, 300, 1);
  tree(30, 450, 1);
  tree(80, 640, 1);

  bush(50, 200, 0.5);
  bush(90, 550, 0.5);

  //sand
  fill(180, 190, 50);
  rect(450, 0, 100, 700);

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
}

let jthX = 300;
let jthY = 500;
let jthS = 1;

let treeX = 80;
let treeY = 300;
let treeS = 1;
let rockX = 490;
let rockY = 40;

function rock(rockX, rockY) {
  fill(95, 90, 90);
  ellipse(rockX, rockY, 10, 15);
}

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

function player(x, y, s) {
  noStroke();

  //ears
  fill(189, 158, 122);
  ellipse(x - 23 * s, y, 15 * s);
  ellipse(x + 23 * s, y, 15 * s);

  //throught
  beginShape();
  vertex(x - 10 * s, y + 20 * s);
  bezierVertex(
    x - 10 * s,
    y + 25 * s,
    x - 10 * s,
    y + 30 * s,
    x - 15 * s,
    y + 35 * s
  );
  vertex(x + 15 * s, y + 35 * s);
  bezierVertex(
    x + 10 * s,
    y + 30 * s,
    x + 10 * s,
    y + 25 * s,
    x + 10 * s,
    y + 20 * s
  );
  endShape(CLOSE);

  //Head hair
  fill(95, 75, 53);
  ellipse(x, y, 50 * s);

  //arm left
  fill(189, 158, 122);
  beginShape();
  vertex(x - 28 * s, y + 36 * s);
  vertex(x - 50 * s, y + 50 * s);
  bezierVertex(
    x - 55 * s,
    y + 55 * s,
    x - 55 * s,
    y + 60 * s,
    x - 47 * s,
    y + 70 * s
  );
  vertex(x - 30 * s, y + 85 * s);
  vertex(x - 30 * s, y + 73 * s);
  vertex(x - 40 * s, y + 60 * s);
  vertex(x - 30 * s, y + 53 * s);
  endShape();

  //arm right
  beginShape();
  vertex(x + 28 * s, y + 36 * s);
  vertex(x + 50 * s, y + 50 * s);
  bezierVertex(
    x + 55 * s,
    y + 55 * s,
    x + 55 * s,
    y + 60 * s,
    x + 47 * s,
    y + 70 * s
  );
  vertex(x + 30 * s, y + 85 * s);
  vertex(x + 30 * s, y + 73 * s);
  vertex(x + 40 * s, y + 60 * s);
  vertex(x + 30 * s, y + 53 * s);
  endShape();

  //body
  fill(225, 211, 87);
  rect(x - 32.5 * s, y + 35 * s, 65 * s, 70 * s, 10 * s);

  //Tail
  fill(75, 57, 38);
  beginShape();
  vertex(x, y);
  bezierVertex(
    x + 10 * s,
    y + 5 * s,
    x + 20 * s,
    y + 10 * s,
    x + 25 * s,
    y + 25 * s
  );
  vertex(x + 25 * s, y + 10 * s);
  bezierVertex(x + 25 * s, y, x + 20 * s, y - 5 * s, x + 10 * s, y - 5 * s);
  endShape();

  ellipse(x + 4, y - 4, 10);

  //leg pants left/right
  fill(225, 211, 87);
  rect(x - 30 * s, y + 90 * s, 20 * s, 40 * s, 20 * s);
  rect(x + 10 * s, y + 90 * s, 20 * s, 40 * s, 20 * s);

  //leg right
  fill(189, 158, 122);
  rect(x + 13 * s, y + 125 * s, 14 * s, 20 * s);

  //shoes left/right
  fill(183, 61, 39);
  rect(x - 30 * s, y + 120 * s, 20 * s, 25 * s, 20 * s);
  rect(x + 10 * s, y + 143 * s, 20 * s, 10 * s, 10 * s);

  //backpack stripes left/right
  stroke(106, 39, 27);
  line(x - 17 * s, y + 40 * s, x - 20 * s, y + 36 * s);
  line(x - 23 * s, y + 75 * s, x - 32 * s, y + 70 * s);

  line(x + 17 * s, y + 40 * s, x + 20 * s, y + 36 * s);
  line(x + 23 * s, y + 75 * s, x + 32 * s, y + 70 * s);

  //backpack
  noStroke();
  fill(183, 61, 39);
  rect(x - 23 * s, y + 40 * s, 46 * s, 50 * s, 5 * s);

  fill(150, 51, 33);
  rect(x - 23 * s, y + 40 * s, 46 * s, 20 * s, 5 * s);

  fill(106, 39, 27);
  rect(x - 5 * s, y + 50 * s, 10 * s, 15 * s, 2 * s);
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

//calling the classes
let biker = new Biker(200, 200, 0.8);
let grandpa = new Grandpa(400, 300, 0.8);
let bunny = new Bunny(300, 100, 1);

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

function playAgain(x, y) {
  noStroke();
  fill(240, 220, 20);
  rect(170, 200, 250, 100, 20);

  fill(255);
  textStyle(BOLD);
  textSize(30);
  text("PLAY AGAIN", 200, 260);
}

function menu(x, y) {
  noStroke();
  fill(45, 170, 20);
  rect(220, 330, 150, 50, 20);

  fill(255);
  textStyle(BOLD);
  textSize(20);
  text("MENU", 265, 365);
}
 
function resultSuccess(jthX, jthY, jthS) {
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

  jthSchool(jthX, jthY, jthS);

  //floor
  fill(200, 200, 145);
  rect(0, 650, width, height);

  playAgain(200, 100);
  menu(230, 300);
}

function resultFailed(jthX, jthY, jthS) {
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

  jthSchool(jthX, jthY, jthS);

  //floor
  fill(200, 200, 145);
  rect(0, 600, width, height);

  //street
  stroke(0);
  line(jthX - 200, jthY + 200, jthX, jthY + 50);
  line(jthX + 400, jthY + 300, jthX + 45, jthY + 50);

  //bush
  noStroke();
  bush(270, 605, 0.2);
  bush(375, 605, 0.2);

  //tree
  tree(240, 610, 0.4);
  tree(410, 610, 0.4);

  playAgain(200, 100);
  menu(230, 300);
} 

function draw() {
  if (state === "start") {
    startScreen(100, 100);
    //stars
    noStroke();
    for (let star of stars) {
      fill(255, 255, 255, Math.abs(Math.sin(star.alpha)) * 255);
      ellipse(star.x, star.y, 2);
      star.alpha += 0.02;
    }
  } else if (state === "game") {
    gameScreen();

    //make the characters move
    for (let character of characters) {
      // Update position
      character.GrandpaY += speed;

      // Reset position if it goes beyond the canvas
      if (character.GrandpaY > 720) {
        character.GrandpaY = -50;
      }

      // Draw the character
      character.draw();
    }

    player(300, 550, 0.8);
  }
} 

function mouseClicked() {
  if (
    state === "start" &&
    mouseX >= 180 &&
    mouseX <= 319 &&
    mouseY >= 200 &&
    mouseY <= 250
  ) {
    state = "game";
  } else if (
    (state === "resultSuccess" &&
      mouseX >= 200 &&
      mouseX <= 400 &&
      mouseY >= 280 &&
      mouseY <= 330) ||
    (state === "resultFailed" &&
      mouseX >= 200 &&
      mouseX <= 400 &&
      mouseY >= 280 &&
      mouseY <= 330)
  ) {
    state = "game";
  }
}
 