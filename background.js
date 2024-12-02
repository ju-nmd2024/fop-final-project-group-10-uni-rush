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

  
  function detectCollisions() {
    // Only check for collisions if the player is not jumping
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
              console.log("Lost a life!");
            }
          }
  
          // If lives are 0, go to the resultFailed state
          if (lives === 0) {
            state = "resultFailed";
            console.log("Game Over!");
          }
          break; // Exit after the first collision to avoid multiple life losses
        }
      }
    }
  }
  
