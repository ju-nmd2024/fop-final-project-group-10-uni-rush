function setup() {
  createCanvas(600, 700);
}

let jthX = 300;
let jthY = 500;
let jthS = 1;

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

function win(jthX, jthY, jthS) {
  fill(70, 220, 220);
  rect(0, 0, 600, 700);

  cloud(500, 150, 0.5);
  cloud(400, 200, 1);
  cloud(160, 40, 0.7);
  cloud(40, 0, 0.5);
  cloud(100, 180, 0.7);
  cloud(300, 30, 0.2);

  fill(0);
  textStyle(BOLD);
  textSize(40);
  text("YOU ARE IN TIME!", 130, 150);

  //JTH
  noStroke();
  fill(255, 255, 0);
  rect(jthX - 275 * jthS, jthY - 100 * jthS, 550 * jthS, 200 * jthS);

  stroke(0);
  line(
    jthX - 275 * jthS,
    jthY + 20 * jthS,
    jthX + 275 * jthS,
    jthY + 20 * jthS
  );

  rect(jthX - 220 * jthS, jthY - 70 * jthS, 90 * jthS, 90 * jthS);
  rect(jthX - 45 * jthS, jthY - 70 * jthS, 90 * jthS, 90 * jthS);
  rect(jthX + 130 * jthS, jthY - 70 * jthS, 90 * jthS, 90 * jthS);

  //door
  fill(95, 235, 235);
  rect(jthX, jthY + 30 * jthS, 90 * jthS, 70 * jthS);

  // WINDOWS
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
}

function lose(jthX, jthY, jthS) {
  fill(145, 170, 170);
  rect(0, 0, 600, 700);

  cloud(500, 150, 0.5);
  cloud(400, 200, 1);
  cloud(280, 70, 0.7);
  cloud(40, 0, 0.5);
  cloud(100, 180, 0.7);
  cloud(300, 30, 0.2);

  fill(0);
  textStyle(BOLD);
  textSize(40);
  text("YOU ARE NOT IN TIME!", 70, 150);

  //JTH
  noStroke();
  fill(255, 255, 0);
  rect(jthX - 275 * jthS, jthY - 100 * jthS, 550 * jthS, 200 * jthS);

  stroke(0);
  line(
    jthX - 275 * jthS,
    jthY + 20 * jthS,
    jthX + 275 * jthS,
    jthY + 20 * jthS
  );

  rect(jthX - 220 * jthS, jthY - 70 * jthS, 90 * jthS, 90 * jthS);
  rect(jthX - 45 * jthS, jthY - 70 * jthS, 90 * jthS, 90 * jthS);
  rect(jthX + 130 * jthS, jthY - 70 * jthS, 90 * jthS, 90 * jthS);

  //door
  fill(95, 235, 235);
  rect(jthX, jthY + 30 * jthS, 90 * jthS, 70 * jthS);

  // WINDOWS
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

  //street
  stroke(0);
  line(jthX - 200, jthY + 200, jthX, jthY + 50);
  line(jthX + 400, jthY + 300, jthX + 45, jthY + 50);
}

function draw() {
  lose(300, 550, 0.5);
}
