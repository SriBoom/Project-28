
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree, ground, stone;
var boyImage, boy;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{

boyImage = loadImage("/Plucking mangoes/boy.png");

	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(450, 280);
	ground = new Ground(600,height,1200,20);
	stone = new  Stone(200, 470);

	mango1 = new Mango(500, 200, 20)

	Engine.run(engine);
  
}


function draw() {
  background("green");

  image(boyImage, 100, 570, 200, 300);

  ground.display();
  tree.display();
  stone.display();
  mango1.display();
}



