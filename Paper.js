class paper {
    constructor(x,y,color){
      var options = {
  
      restitution : 0.3,
      friction : 0.5,
      density : 1.2,
      isStatic : false

      };
      this.body = Bodies.rectangle(x,y,40,40,options);
      this.x = x;
      this.y = y;
      this.color = color;
      World.add(world,this.body);
  
    }
    display(){
  var angle = this.body.angle;
  var pos = this.body.position;
  push();
  translate(pos.x,pos.y);
  rotate(angle);
  noStroke();
  fill(this.color);
  ellipse(0,0,30,30);
  pop();
    }
  }