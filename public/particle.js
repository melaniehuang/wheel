class Particle{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0.5));
    this.acc = createVector(0,0);
    this.r = 10;
    this.lifetime = 255;
    this.imgRef = floor(random(6));
  }

  finished(){
  	return (this.lifetime < 0);
  }
  
  applyForce(force){
  	this.acc.add(force);
  }

  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0);
    this.lifetime -= 2;
  }

  show(imagesArray){
  	// stroke(255,this.lifetime);
  	// fill(255,this.lifetime);
  	tint(255, this.lifetime);
  	// ellipse(this.pos.x, this.pos.y, this.r*2);
  	image(imagesArray[this.imgRef],this.pos.x, this.pos.y);
  }
}