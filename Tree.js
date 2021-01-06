class Tree {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.treeWidth=200;
        this.treeHeight=400;

    this.image=loadImage('tree.png')
        this.treeBody=Bodies.rectangle(this.x, this.y, this.treeWidth, this.treeHeight,{isStatic:true})

        World.add(world, this.treeBody)
         
    }      

    display(){

    var pos=this.treeBody.position;

    push()
    translate(pos.x, pos.y)
    imageMode(CENTER)
    image(this.image, this.x, this.y)
    pop()
    

    }
}