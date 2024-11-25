function setup() {
  createCanvas(600, 700);
}

let jthX = 300;
let jthY = 500;
let jthS = 1;

let treeX = 80;
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
  bush(270, 605, 0.2);
  bush(375, 605, 0.2);

  //tree
  tree(240, 610, 0.4);
  tree(410, 610, 0.4);

  playAgain(200, 100);
  menu(230, 300);
}

function draw() {
  resultSuccess(300, 550, 1);

  /*  resultFailed(300, 550, 0.5);*/
}
