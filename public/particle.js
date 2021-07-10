class Particle{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(random(-0.5,0.5),random(-0.5,0.5));
    this.acc = createVector(random(-0.2,0.2),random(-0.2,0.2));
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
    this.lifetime -= 2;
  }

  show(){
  	tint(255, this.lifetime);
  	image(placeholderHeart,this.pos.x, this.pos.y,this.r-this.lifetime,this.r-this.lifetime);
  }
}

class armParticle{
  constructor(x,y,hColor){
    this.pos = createVector(x,y);
    this.eFill = hColor;
    this.lifetime = 255;
  }

  finished(){
    return (this.lifetime < 0);
  }

  update(){
    this.lifetime -= 1;
  }

  show(){
    noStroke();
    fill(this.eFill);
    ellipse(this.pos.x, this.pos.y,90,90);
  }
}


class wheelParticle{
  constructor(x,y,hColor){
    this.pos = createVector(x,y);
    this.eFill = hColor;
    this.lifetime = 255;
  }

  finished(){
    return (this.lifetime < 0);
  }

  update(){
    this.lifetime -= 1;
  }

  show(){
    noStroke();
    fill(this.eFill);
    ellipse(this.pos.x, this.pos.y,90,90);
  }
}