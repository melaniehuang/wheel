class Particle{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(random(-1,1),random(-1,1));
    this.acc = createVector(random(-0.5,0.5),random(-0.5,0.5));
    this.r = 355;
    this.lifetime = 255;
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
    this.lifetime -= 4;
  }

  show(){
  	tint(255, this.lifetime);
  	image(placeholderHeart,this.pos.x, this.pos.y,this.r-this.lifetime,this.r-this.lifetime);
  }
}