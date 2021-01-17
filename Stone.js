class Stone{
  constructor(x, y, r) {
      var options = {
          isStatic:false,
      }
      this.x = x;
      this.y = y;
      this.r = r;

      this.body = Bodies.circle(this.x, this.y, this.r, options);
      this.image = loadImage("/Plucking mangoes/stone.png");
      World.add(world, this.body);
    }
    display(){
      var r = this.body.r;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(r);
      imageMode(CENTER);
      image(this.image, 0, 0, this.r*2, this.r*2);
      pop();
    }
}