var socket;
let cnv;
let placeholderHeart;
let heartParticles = [];
let bgCurrentColor;

let kilometres = 0;
let totalkms;

//rainbow visualisation
var prevkms = [];
var maxRadius = 2000;
var lineWidth = 40;
var rainbow = ['rgb(201,44,44)',
               'rgb(226,113,43)',
               'rgb(254,220,24)',
               'rgb(109,179,74)',
               'rgb(73,172,146)',
               'rgb(50,171,181)',
               'rgb(49,69,129)',
               'rgb(98,63,114)',
               'rgb(213,134,189)'];
var colorCounter = 0;
var shapePosition = 0;

//Odometre Data
//http://45.113.235.98/api/simulator

//http://45.113.235.98/api/history?limit=10
let livekmsData;

//if simultaneous - add up score together
var sessionkms=0;
var wheelkms;
var armkms;
var wheelOn;
var armOn;

function preload() {
  placeholderHeart = loadImage('data/heart.png');

  // Get the most recent data
  let url = 'http://45.113.235.98/api/simulator';
  httpGet(url, 'json', function(response) {
    // when the HTTP request completes, populate the variable that holds the
    // earthquake data used in the visualization.
    livekmsData = response;
  });
}

function setup() {
  cnv = createCanvas(2880,2153,P2D);
  cnv.parent('myCanvas');
  background(0);
  imageMode(CENTER);
  textAlign(CENTER);

  socket = io.connect('localhost:3000');
  socket.on('heart', drawHeartParticle);
  socket.on('slide', drawNumbers);

  smooth();

  setInterval(fetchNewData, 2000);

  strokeWeight(lineWidth);
  strokeCap(SQUARE);
  noFill();
    
  for (var i = 0; i < 9; i++){
    prevkms.push(random(PI));
  }
  colorMode(HSB);
}

function draw() {
  

  if (!livekmsData) {
     //Wait until data has loaded before drawing.
    return;
 }
 background(200);
  totalkms = select('#totalnum');
  var kmsDec = nf(sessionkms,0,2);
  totalkms.html(kmsDec);

  drawVisualisation();

  fill(255);
  noStroke();
  ellipse(width/2,height/2,750,750);

  fill(0);
  var inMetres = floor(sessionkms*1000);
  textSize(120);
  text(inMetres,width/2,height/2-10);
  textSize(48);

  text("METRES",width/2,height/2+80);


  for (let particle of heartParticles){
    particle.update();
  	particle.show();  	
  }

  for(let i = heartParticles.length-1; i >= 0; i--){
  	if (heartParticles[i].finished()){
      heartParticles.splice(i,1);
  	}
  }

  
}

function fetchNewData(){
  let url = 'http://45.113.235.98/api/simulator';
  httpGet(url, 'json', function(response) {
    // when the HTTP request completes, populate the variable that holds the
    // earthquake data used in the visualization.
    livekmsData = response;

	if (livekmsData[0].status === 'active'){
	  wheelOn = true;
	  wheelkms = livekmsData[0].km;
    } else {
	  wheelOn = false;
	  wheelkms = 0;
    }
	  
	if (livekmsData[1].status === 'active'){
	   armOn = true;
	   armkms = livekmsData[1].km;
	} else {
	   armOn = false;
	   armkms = 0;
	}
	  
	sessionkms = wheelkms + armkms ;
  });
  //[{"deviceId":"ratwheel","sessionId":"P1337","rotations":175,"tsStart":1623736759553,"tsEnd":1623737179553,"avgRpm":14.14,"totalMinutes":7,"km":1.92,"avgKmh":16.49,"topSpeed":15.17,"status":"active"},{"deviceId":"armwheel","sessionId":"P8932","rotations":455,"tsStart":1623736759553,"tsEnd":1623737179553,"avgRpm":40.43,"totalMinutes":7,"km":1.43,"avgKmh":12.25,"topSpeed":10.37,"status":"active"}]
}

function drawVisualisation(){
  //historical radius
  for (var i = 0; i < 9; i++){
    noFill();
    stroke(rainbow[i]);
    arc(width/2, height/2, maxRadius-(lineWidth*2)-(i*(lineWidth*2)), maxRadius-(lineWidth*2)-(i*(lineWidth*2)), -HALF_PI, HALF_PI+prevkms[i],OPEN);
  }
  push();
  translate(width/2,height/2);

  //current radius
  noStroke();
  rotate(-HALF_PI);

  var shapePositionMapped = map(shapePosition, 0, TWO_PI);
  
  var shapekms = map(sessionkms, 0, 1,0,TWO_PI);
  
  beginShape();
  noFill();
  for (let a = 0; a < shapekms; a+=0.01){
    let mappedColor = map(a, 0, TWO_PI*2, 0, 1);
    let h = lerp(0, 360,mappedColor);
    
    noFill();
    let r = 470;
    let x = r * cos(a);
    let y = r * sin(a);
    //vertex(x,y);
    fill(h,78,78);
    ellipse(x,y,150,150);
  }
  endShape();
  pop();

  shapePosition+=0.01;

  if(shapePosition > (TWO_PI*2)){
  	shapePosition = 0;
  }
}

function drawHeartParticle(data){
  //bgCurrentColor = color(random(255),0,0);

  for(let i = 0; i < 1; i++){
  	heartParticles.push(new Particle(width/2,height/2));
  }
}

function drawNumbers(data){
  //kilometres = data.slider;
  //console.log(data.slider);
}

function windowResized() {
}