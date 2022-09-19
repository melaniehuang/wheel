// let heart;
// var cnv;
// let url;
// let postData;


// //curl -X POST http://45.113.235.98/api/like -d '{"deviceId": "ratwheel"}' -H 'Content-Type: application/json'

// function preload() {
//   heart = loadImage('data/heart.png');
//   url = 'http://45.113.235.98/api/like';
//   postData = '{"deviceId": "ratwheel"}';
// }

// function setup() {
//   cnv = createCanvas(windowWidth,windowHeight,P2D);
//   cnv.parent('userCanvas');
//   background(255,255,255);
//   imageMode(CENTER);
// }

// function draw() {
//   background('#f9f9f9');
//   image(heart,width/2,windowHeight/2-windowWidth/3+windowWidth/8,windowWidth/3,windowWidth/3);
// }

// function mousePressed(){
//   httpPost(url, 'text', postData);
// }