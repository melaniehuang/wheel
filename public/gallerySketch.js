var socket;

let placeholderHeart;
let heartParticles = [];
let heartImages = [];

let clapParticles = [];
let clapImages = [];
let bgCurrentColor;

function preload() {

  placeholderHeart = loadImage('data/heart.png');

  for (let i = 1; i < 7; i++){
  	 var heartImage = loadImage('data/heart-'+i+'.png');
  	 heartImages.push(heartImage);
  } 

  var clapImage = loadImage('data/clap.png');
  for (let i = 1; i < 7; i++){	 
  	 clapImages.push(clapImage);
  }  
}

function setup() {
  createCanvas(1080,1920,P2D);
  background(255);
  imageMode(CENTER);

  socket = io.connect('http://localhost:3000');
  socket.on('heart', drawHeartParticle);
  socket.on('clap', drawClapParticle);
  //bgCurrentColor = color(random(255),0,0);
}

function draw() {
  background(0,0,0);

  for (let particle of heartParticles){
  	let gravity = createVector(0.0,-0.03);
 	particle.applyForce(gravity);
    particle.update();
  	particle.show(heartImages);  	
  }

  for(let i = heartParticles.length-1; i >= 0; i--){
  	if (heartParticles[i].finished()){
      heartParticles.splice(i,1);
  	}
  }

  //placeholder heart
  // stroke(255);
  // noFill();
  // ellipse(200,500,20);
  tint(255, 255);
  image(placeholderHeart,width/2-100,500);

  for (let particle of clapParticles){
  	let gravity = createVector(0.0,-0.03);
 	particle.applyForce(gravity);
    particle.update();
  	particle.show(clapImages);  	
  }

  for(let i = clapParticles.length-1; i >= 0; i--){
  	if (clapParticles[i].finished()){
      clapParticles.splice(i,1);
  	}
  }

  //placeholder clap
  // stroke(255);
  // noFill();
  tint(255, 255);
  image(clapImages[0],width/2+100,500);
  //ellipse(400,500,20);
}

function drawHeartParticle(data){
  //bgCurrentColor = color(random(255),0,0);

  for(let i = 0; i < 5; i++){
  	heartParticles.push(new Particle(width/2-100,500));
  }
}

function drawClapParticle(data){
  //bgCurrentColor = color(random(255),0,0);
  for(let i = 0; i < 5; i++){
  	clapParticles.push(new Particle(width/2+100,500));
  }
}

function windowResized() {
}