var socket;
let heart;
var cnv;

function preload() {
  heart = loadImage('data/heart.png');
}


function setup() {
  cnv = createCanvas(windowWidth,windowHeight,P2D);
  cnv.parent('userCanvas');
  background(255,255,255);
  socket = io.connect('localhost:3000');
  imageMode(CENTER);
}

function draw() {
  background('#f9f9f9');
  image(heart,width/2,windowHeight/2-windowWidth/3+windowWidth/8,windowWidth/3,windowWidth/3);
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