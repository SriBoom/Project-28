
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree, ground;
var boyImage, boy, treeImage, stoneImage, mangoImage ;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{

boyImage = loadImage("boy.png");
treeImage = loadImage("tree.png");
stoneImage = loadImage("stone.png");
mangoImage = loadImage("mango.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(600, 600);
	ground = new Ground(600,height,1200,20);

	Engine.run(engine);
  
}


function draw() {
  background(0);

  image(boyImage, 0, 0);

  ground.display();
  tree.display();
}



