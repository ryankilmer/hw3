var ballY1 = 0;
var ballY2 = 0;
var ballX = 0;
var ballSpeed = 3;
var ballSpeed2 = 4;
var ballSpeed3 = 2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  ellipse(100, ballY1, 50);
  ellipse(200, ballY2, 50);
  ellipse(ballX, 200, 50);

  ballY1 = ballY1 + ballSpeed;
  ballY2 = ballY2 + ballSpeed2;
  ballX = ballX + ballSpeed3;
  
  if (ballY1 > height) {
    ballSpeed = -ballSpeed;
  }
  
  if (ballY2 > height) {
    ballSpeed2 = -ballSpeed2;
  }
  if (ballX > width) {
    ballSpeed3 = -ballSpeed3;
  }
  
  if (ballY1 < 0) {
    ballSpeed = -ballSpeed;
  }
  if (ballY2 < 0) {
    ballSpeed2 = -ballSpeed2;
  }
  if (ballX < 0) {
    ballSpeed3 = -ballSpeed3;
  }
}
