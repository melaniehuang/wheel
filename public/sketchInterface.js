var socket;
let heart;
let clap;

function preload() {
  heart = loadImage('data/heart.png');
  clap = loadImage('data/clap.png');
}


function setup() {
  createCanvas(375, 667,P2D);
  background(255,255,255);
  socket = io.connect('http://science-gallery-wheel.netlify.app:3000');
  imageMode(CENTER);
}

function draw() {
  background(242);
  
  stroke(255);
  fill(249);
  ellipse(width/4+20,height-150,120);
  ellipse(width/4*3-20,height-150,120);

  image(heart,width/4+20,height-150);
  image(clap,width/4*3-20,height-150);
}

function mousePressed(){
  console.log("Sending: " + mouseX + ", " + mouseY);

  var data = {
  	x: mouseX,
  	y: mouseY
  }

  if(mouseX<width/2){
    socket.emit('heart', data);
  } 
 
  if(mouseX>width/2){
    socket.emit('clap', data);
  }
}

function windowResized() {
}