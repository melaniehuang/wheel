var socket;
let heart;

function preload() {
  heart = loadImage('data/heart.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight,P2D);
  background(255,255,255);
  socket = io.connect('localhost:3000');
  imageMode(CENTER);
}

function draw() {
  background(242);
  image(heart,width/2,height/2,125,125);
}

function mouseReleased() {
}

function mousePressed(){
  var data = {
  	x: mouseX,
  	y: mouseY,
  }

  socket.emit('heart', data);
}

function windowResized() {
}