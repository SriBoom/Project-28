
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, ground, stone, launcher;
var boyImage, boy;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{

boyImage = loadImage("Plucking mangoes/boy.png");

	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(400, 300);
	ground = new Ground(600,height,1200,20);
	stone = new  Stone(200, 470,30);
	launcher = new Launcher(stone.body, {x:135, y:635});
    mango1 = new Mango(950, 600, 20);
    mango2 = new Mango(900, 550, 20);
	mango3 = new Mango(850, 530, 20);
	mango4 = new Mango(800, 600, 20);
	mango5 = new Mango(750, 540, 20);


	Engine.run(engine);
  
}


function draw() {
  background("green");

  image(boyImage, 100, 570, 200, 300);

  ground.display();
  tree.display();
  stone.display();
  launcher.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
    if(keyCode === 32){
        launcher.attach(stone.body);
    }
}

// Questions
// Should the values inside the bracket be mango1, mango2, etc or Mango(the constructor's name)? 
// For stone, should it be the variable or the constructor's name(Mango)?
function detectollision(Stone, Mango){
    
}
