var socket;
let cnv;
let placeholderHeart;
let heartParticles = [];
let ellipseParticles = [];
let bgCurrentColor;

let kilometres = 0;
let totalkms;

//rainbow visualisation
var prevkms = [];
var maxRadius = 2000;
var lineWidth = 40;
var rainbow = ['rgb(235,51,0)',
               'rgb(255,117,0)',
               'rgb(247,234,72)',
               'rgb(91,197,0)',
               'rgb(72,213,151)',
               'rgb(44,204,211)',
               'rgb(0,80,181)',
               'rgb(95,36,159)',
               'rgb(242,119,198)'];
var colorCounter = 0;
var shapePosition = 0;
var ellipseCurrentLength = 0;
//Green 91,197,0

var prevSimulateKms = 0;
var simulatekms = 0;
var kmsIncreased = false;

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

}

function setup() {
  cnv = createCanvas(2880,2153,P2D);
  cnv.parent('myCanvas');
  
  background('#f9f9f9');
  imageMode(CENTER);
  textAlign(CENTER);
  colorMode(HSB);
  
  setInterval(fetchNewData, 2000);

  socket = io.connect('localhost:3000');
  socket.on('heart', drawHeartParticle);
  
  strokeWeight(lineWidth);
  strokeCap(SQUARE);
  noFill();  
  smooth();
  
  //http://45.113.235.98/api/history?limit=9
  for (var i = 0; i < 9; i++){
    prevkms.push(random(PI));
  }
}

function draw() {
  if (!livekmsData) {
    sessionkms = 0;
  }

  background('#f9f9f9');

  getTotalKmData(sessionkms);
  drawHistorical();
  // drawSessionVisualisation();
  drawSessionParticles(simulatekms, ellipseParticles.length);
  drawOdometre(floor(simulatekms*1000));
  drawCheerHearts();
  updateSessionParticles();
}

function drawCheerHearts(){
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

function drawSessionParticles(sessionMetreData, length){

  if(kmsIncreased){
    //instead of clearing and redrawing - calculate where to add.
    ellipseParticles = [];

    var mappedSessionData = map(sessionMetreData, 0, 1, 0, TWO_PI);

    push();
      translate(width/2,height/2);
      noStroke();
      rotate(-HALF_PI);
      for (let i = 0; i < mappedSessionData; i+=0.05){
        let mappedColor = map(i, 0, TWO_PI*2, 0, 1);
        let h = lerp(0, 360,mappedColor);
        let colorFill = color(h,90,90);
        let r = 470;
        let x = r * cos(i);
        let y = r * sin(i);
        ellipseParticles.push(new ellipseParticle(x,y,colorFill));  
      }  
    pop();   
  } 

}

function updateSessionParticles(){
  push();
  translate(width/2,height/2);
    for (let eparticle of ellipseParticles){
      eparticle.update();
      eparticle.show();    
    }
    //and then update the lifetime properly
    for(let i = ellipseParticles.length-1; i >= 0; i--){
      if (ellipseParticles[i].finished()){
        ellipseParticles.splice(i,1);
      }
    } 
  pop();
}

function getTotalKmData(totalKmData){
  totalkms = select('#totalnum');
  var kmsDec = nf(totalKmData,0,2);
  totalkms.html(kmsDec);
}

function drawOdometre(sessionMetreData){
  fill(255);
  noStroke();
  ellipse(width/2,height/2,750,750);

  fill(0);
  textSize(120);
  text(sessionMetreData,width/2,height/2-10);

  textSize(48);
  text("METRES",width/2,height/2+80); 
}

function fetchNewData(){
  let url = 'http://45.113.235.98/api/simulator';
  httpGet(url, 'json', function(response) {
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

    prevSimulateKms = simulatekms;
    simulatekms += 0.1;

    if(prevSimulateKms<simulatekms){
      kmsIncreased = true;
    } else {
      kmsIncreased = false;
    }
  });
  //[{"deviceId":"ratwheel","sessionId":"P1337","rotations":175,"tsStart":1623736759553,"tsEnd":1623737179553,"avgRpm":14.14,"totalMinutes":7,"km":1.92,"avgKmh":16.49,"topSpeed":15.17,"status":"active"},{"deviceId":"armwheel","sessionId":"P8932","rotations":455,"tsStart":1623736759553,"tsEnd":1623737179553,"avgRpm":40.43,"totalMinutes":7,"km":1.43,"avgKmh":12.25,"topSpeed":10.37,"status":"active"}]
}

function drawHistorical(){
  for (var i = 0; i < 9; i++){
    noFill();
    stroke(rainbow[i]);
    arc(width/2, height/2, maxRadius-(lineWidth*2)-(i*(lineWidth*2)), maxRadius-(lineWidth*2)-(i*(lineWidth*2)), -HALF_PI, HALF_PI+prevkms[i],OPEN);
  }
}

function drawSessionVisualisation(){
  push();
    translate(width/2,height/2);
    noStroke();
    rotate(-HALF_PI);

    var shapekms = map(sessionkms, 0, 1,0,TWO_PI);
    
    beginShape();
      for (let a = 0; a < shapekms; a+=0.01){
        let mappedColor = map(a, 0, TWO_PI*2, 0, 1);
        let h = lerp(0, 360,mappedColor);
        let r = 470;
        let x = r * cos(a);
        let y = r * sin(a);
        fill(h,95,95);
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
  for(let i = 0; i < 1; i++){
  	heartParticles.push(new Particle(width/2,height/2));
  }
}

function drawNumbers(data){
}

function windowResized() {
}