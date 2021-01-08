class Mango{
    constructor(x, y, r) {
        var options = {
            isStatic:true,
            'restitution':0,
            'friction':1.0,
        }
        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.ellipse(this.x, this.y, this.r, this.r, options);
        this.image = loadImage("/Plucking mangoes/mango.png");
        World.add(world, this.body);
      }
      display(){
        var r = this.body.r;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(r);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}