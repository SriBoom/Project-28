class Stone extends BaseClass {
    constructor(x,y){
      super(x,y,50,50,{isStatic:true});
      this.image = loadImage("/Plucking mangoes/stone.png");
    }
  
    display() {
      super.display();
    }
  }
  