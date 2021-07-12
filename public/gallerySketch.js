var socket;
let cnv;
let placeholderHeart;
let heartParticles = [];
let armParticles = [];
let wheelParticles = [];

let bgCurrentColor;
let totalHistoricalData;

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
var totalKms = 0;

//Odometre Data
//http://45.113.235.98/api/simulator
//http://45.113.235.98/api/history?limit=10

let historicalkmsData;
let historicalScale;
//http://45.113.235.98/api/live

let wheelImage;
var wheelkms = 0.0;
var currentWheelSpeed = "";
//armkms trigger from here
let armImage;
var armkms = 0.0;
var currentArmSpeed = "";

var speedImage;

var wheelOn = false;
var armOn = false;

//Lato
let LatoRegular;
var startGetData;

function preload() {
  placeholderHeart = loadImage('data/heart.png');
  LatoRegular = loadFont('data/Lato-Regular.ttf')
  wheelImage = loadImage('data/wheel.png');
  armImage = loadImage('data/arm.png');
  speedImage = loadImage('data/speed.png');
}

function setup() {
  cnv = createCanvas(2880,2153,P2D);
  cnv.parent('myCanvas');
  
  background('#f9f9f9');
  imageMode(CENTER);
  textFont(LatoRegular);
  textAlign(CENTER);
  colorMode(HSB,360,100,100,100);
  

  socket = io.connect('45.113.235.98');

  //fetch current data
  fetchHistorical();

  socket.on('update', function(data) {
  	console.log('update received:');
  	console.log(data);    
  	updateData(data);

    if(data.status === "inactive"){
        

	  if(data.deviceId === 'ratwheel'){
	  	console.log("Wheel session has ended.");  
	    wheelOn = false;
      wheelkms = 0;
	    currentWheelSpeed = "0.00";
	    fetchHistorical(data);
	  }

	  if (data.deviceId === 'armwheel'){
	  	console.log("Armbike session has ended."); 
	    armOn = false;
      armkms = 0;
	    currentArmSpeed = "0.00";
	    fetchHistorical(data);
	  } 
    }
  });

  // socket.on('ping', function(data) {
  // });

  socket.on('like', function(data) {
	  console.log('like received:');
	  console.log(data);
	  drawHeartParticle();
  });

  
  strokeCap(SQUARE);
  noFill();  
  smooth();
  
  //http://45.113.235.98/api/history?limit=9
  for (var i = 0; i < 9; i++){
    prevkms.push(TWO_PI);
  }
}

function draw() {
  background('#f9f9f9');
  tint(360,0,100,100);
  getTotalKmData(totalKms+wheelkms+armkms);
  drawHistorical();
  drawOdometre(armkms, wheelkms); 
  updateSessionParticles();
  drawCheerHearts();
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

function drawWheelParticles(latestData, radius){
    wheelParticles = [];

    push();
      var mappedSessionData = map(latestData, 0, 0.1, 0, TWO_PI);

      var startPoint = floor(mappedSessionData/(TWO_PI*2))*TWO_PI*2;
      var mappedFullCycle = (mappedSessionData/(TWO_PI*2))%1;
      var remainingCycle = mappedFullCycle*(TWO_PI*2);

      if (startPoint > TWO_PI) {
        for (let i = startPoint-TWO_PI; i < startPoint+remainingCycle; i+=0.025){
          let mappedColor = map(i, 0, TWO_PI*2, 0, 1);
          let h = lerp(0, 360,mappedColor);
          let colorFill = color(h%360,90,90);
          let r = radius;
          let x = r * cos(i);
          let y = r * sin(i);
          wheelParticles.push(new wheelParticle(x,y,colorFill));  
        }         
      } else {
        for (let i = startPoint; i < startPoint+remainingCycle; i+=0.025){
          let mappedColor = map(i, 0, TWO_PI*2, 0, 1);
          let h = lerp(0, 360,mappedColor);
          let colorFill = color(h%360,90,90);
          let r = radius;
          let x = r * cos(i);
          let y = r * sin(i);
          wheelParticles.push(new wheelParticle(x,y,colorFill));  
        }           
      }
    pop();   
}

function drawArmParticles(latestData, radius){
    armParticles = [];

    push();
      var mappedSessionData = map(latestData, 0, 0.1, 0, TWO_PI);

      var armStartPoint = floor(mappedSessionData/(TWO_PI*2))*TWO_PI*2;
      var mappedFullCycle = (mappedSessionData/(TWO_PI*2))%1;
      var remainingCycle = mappedFullCycle*(TWO_PI*2);

      if (armStartPoint > TWO_PI) {
        for (let i = armStartPoint-TWO_PI; i < armStartPoint+remainingCycle; i+=0.025){
          let mappedColor = map(i, 0, TWO_PI*2, 0, 1);
          let h = lerp(0, 360,mappedColor);
          let colorFill = color(h%360,90,90);
          let r = radius;
          let x = r * cos(i);
          let y = r * sin(i);
          armParticles.push(new armParticle(x,y,colorFill));  
        }         
      } else {
        for (let i = armStartPoint; i < armStartPoint+remainingCycle; i+=0.025){
          let mappedColor = map(i, 0, TWO_PI*2, 0, 1);
          let h = lerp(0, 360,mappedColor);
          let colorFill = color(h%360,90,90);
          let r = radius;
          let x = r * cos(i);
          let y = r * sin(i);
          armParticles.push(new armParticle(x,y,colorFill));  
        }           
      }
    pop();   
}

function updateSessionParticles(){
  push();
  translate(width/2,height/2);
  rotate(-HALF_PI);
    for (let particle of wheelParticles){
      particle.update();
      particle.show();    
    }
  pop();

  push();
  translate(width/2,height/2);
  rotate(-HALF_PI);
    for (let p of armParticles){
      p.update();
      p.show();    
    }
  pop();
}

function getTotalKmData(totalKmData){
  totalHistoricalData = select('#totalnum');
  var kmsDec = nf(totalKmData,0,2);
  totalHistoricalData.html(kmsDec);
}

function drawOdometre(armMetreData, wheelMetreData){
  push();
  var formatArmKms = (armMetreData*1000).toFixed(0);
  var formatWheelKms = (wheelMetreData*1000).toFixed(0);

  noFill();
  stroke('#e3e3e3');
  strokeWeight(1);
  ellipse(width/2,height/2,810+360,810+360);
  ellipse(width/2,height/2,810+180,810+180);
  ellipse(width/2,height/2,810,810);
  line(width/2-(570/2),height/2, width/2+(570/2),height/2);
  
  drawWheelParticles(wheelMetreData, 540);
  drawArmParticles(armMetreData, 450);

  fill(0);
  noStroke();
  textAlign(CENTER);
  textSize(100); 
  image(wheelImage,width/2-160,height/2-140);
  text(formatWheelKms,width/2+(282/2)-20,height/2-155);
  textSize(30);
  text("METRES TRAVELLED",width/2+(282/2)-20,height/2-115); 
  fill('#e2e2e2');
  rect(width/2-20,height/2-90,282,55);
  fill(0);
  textAlign(LEFT);
  text(currentWheelSpeed+"KM/H",width/2+20-20,height/2-55); 
  image(speedImage,width/2+282-40-20,height/2-64,30,24);
  
  translate(0,280);
  fill(0);
  noStroke();
  textAlign(CENTER);
  textSize(100); 
  image(armImage,width/2-160-20,height/2-135);
  text(formatArmKms,width/2+(282/2)-20,height/2-155);
  textSize(30);
  text("METRES TRAVELLED",width/2+(282/2)-20,height/2-115); 
  fill('#e2e2e2');
  rect(width/2-20,height/2-90,282,55);
  fill(0);
  textAlign(LEFT);
  text(currentArmSpeed+"KM/H",width/2+20-20,height/2-55); 
  image(speedImage,width/2+282-40-20,height/2-64,30,24);

  pop();

  // if(wheelOn){
  //   wheelkms+=0.001;
  // }

  // if(armOn){
  //   armkms+=0.001;
  // }
  
  
}

function updateData(updatedData){
  if(updatedData.deviceId === 'ratwheel'){
    //console.log(updatedData.deviceId);
    wheelOn = true;
    wheelkms = updatedData.km;
    currentWheelSpeed = updatedData.kmh.toFixed(2);
  }

  if (updatedData.deviceId === 'armwheel'){
    //console.log(updatedData.deviceId); 
    armOn = true;
    armkms = updatedData.km;
    currentArmSpeed = updatedData.kmh.toFixed(2);
  }     
}


function fetchHistorical(){
  console.log("fetching historical...");	
  let urlHistory = 'http://45.113.235.98/api/history?limit=9';
  httpGet(urlHistory, 'json', function(response) {

    totalKms = response.totalKm;
    getTotalKmData(totalKms);

    historicalkmsData = response.sessions;
    prevkms = [];

    console.log(response.sessions.length, response.sessions.length-9);
    for (var i = response.sessions.length-1; i > response.sessions.length-10; i--){
      prevkms.push(historicalkmsData[i].km);
    }
    historicalScale = Math.max.apply(null,prevkms);

    console.log(historicalkmsData);
  });
}

function drawHistorical(){
  for (var i = 8; i >= 0; i--){
    noFill();
    strokeWeight(lineWidth);
    stroke(rainbow[8-i]);
    if (prevkms[8-i] === 0){
      var historicalCurrentMapped = -HALF_PI+0.05;
    } else {
      var historicalCurrentMapped = map(prevkms[8-i], 0,historicalScale,0,TWO_PI-HALF_PI);
    }
    
    arc(width/2, height/2, maxRadius-(lineWidth*2)-(i*(lineWidth*2)), maxRadius-(lineWidth*2)-(i*(lineWidth*2)), -HALF_PI, historicalCurrentMapped,OPEN);
  }
}

function drawHeartParticle(data){
  for(let i = 0; i < 1; i++){
  	heartParticles.push(new Particle(width/2,height/2));
  }
}