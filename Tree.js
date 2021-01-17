class Tree {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.treeWidth=400;
        this.treeHeight=400;

        this.treeBody=Bodies.rectangle(this.x, this.y, this.treeWidth, this.treeHeight,{isStatic:true})
        this.image=loadImage('/Plucking mangoes/tree.png')

        World.add(world, this.treeBody)
         
    }      

    display(){

    var pos=this.treeBody.position;

    push()
    translate(pos.x, pos.y)
    imageMode(CENTER)
    image(this.image, this.x, this.y, this.treeWidth, this.treeHeight)
    pop()
    

    }
}