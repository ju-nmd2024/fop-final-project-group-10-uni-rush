function setup() {
  createCanvas(600, 700);
}

let treeX = 80;
let treeY = 300;

function tree(treeX, treeY) {
  //tree
  fill(130, 100, 15);
  rect(treeX - 15, treeY + 20, 30, 40);

  fill(60, 185, 15);
  ellipse(treeX, treeY, 80);

  //left side leaves
  ellipse(treeX - 40, treeY - 5, 30);
  ellipse(treeX - 35, treeY + 20, 30);
  ellipse(treeX - 20, treeY + 30, 25);
  ellipse(treeX - 25, treeY - 25, 30);

  //middle leaves
  ellipse(treeX, treeY - 35, 30, 25);
  ellipse(treeX, treeY + 32, 25);

  //right side leaves
  ellipse(treeX + 40, treeY - 5, 30);
  ellipse(treeX + 35, treeY + 20, 30);
  ellipse(treeX + 20, treeY + 30, 25);
  ellipse(treeX + 25, treeY - 25, 30);
}

function bush(treeX, treeY) {
  push();

  translate(treeX, treeY);
  scale(0.6);
  translate(-treeX, -treeY);

  fill(55, 170, 15);
  ellipse(treeX, treeY, 80);

  //left side leaves
  ellipse(treeX - 40, treeY - 5, 30);
  ellipse(treeX - 35, treeY + 20, 30);
  ellipse(treeX - 20, treeY + 30, 25);
  ellipse(treeX - 25, treeY - 25, 30);

  //middle leaves
  ellipse(treeX, treeY - 35, 30, 25);
  ellipse(treeX, treeY + 32, 25);

  //right side leaves
  ellipse(treeX + 40, treeY - 5, 30);
  ellipse(treeX + 35, treeY + 20, 30);
  ellipse(treeX + 20, treeY + 30, 25);
  ellipse(treeX + 25, treeY - 25, 30);
  pop();
}

function draw() {
  // street lane
  fill(165, 185, 175);
  rect(150, 0, 300, height);

  stroke(0);
  line(250, 0, 250, height);
  line(350, 0, 350, height);

  //grass
  noStroke();
  fill(10, 130, 15);
  rect(0, 0, 150, height);

  tree(60, 100);
  tree(90, 300);
  tree(30, 450);
  tree(80, 640);

  bush(50, 200);
  bush(90, 550);

  //sand
  fill(180, 190, 50);
  rect(450, 0, 100, height);

  //lake
  fill(20, 140, 160, 100);
  rect(515, 0, 100, height);

  fill(20, 140, 160, 110);
  rect(530, 0, 20, height);
}
