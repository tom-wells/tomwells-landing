let position
let speed 
let radius
let sound
function preload() {
  sound = loadSound("drop.mp3")
}

function setup() {
  createCanvas ( windowWidth, windowHeight );
  radius = 50
  position = createVector(100,50)
  speed = createVector(5,5)
 
}

function draw() {
  background("#ff000033");
  fill("#ffffff");
  noStroke();
  circle(position.x,position.y, radius * 2);
  position.add(speed)
//     speed.mult(0.999)

  
  if (position.y > windowHeight - radius || position.y < radius ) {
    speed.y = speed.y * -1
    sound.play();
  }
  
  if (position.x > windowWidth - radius || position.x < radius ) {
    speed.x = speed.x * -1
        sound.play();

  }
  
  position.x = constrain(position.x, radius, windowWidth - radius );
  position.y = constrain(position.y, radius, windowHeight - radius );

  
 
}

function mouseClicked() {
  let angle = random(TWO_PI)
  speed.rotate(angle)
  
}

function windowResized() {
 resizeCanvas(windowWidth,windowHeight);
  
}



