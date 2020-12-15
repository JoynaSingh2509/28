
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world,engine;
var stone,mango,mango2,mango3,mango4,mango5,chain;
var boy,boyImg,tree,treeImg,ground;

function preload(){
boyImg=loadImage("images/boy.png");
treeImg=loadImage("images/tree.png")
}

function setup() {
	createCanvas(1500, 700);
	
	ground=createSprite(750,690,1500,20);
	ground.shapeColor="saddlebrown";
	
	boy=createSprite(230,600,20,50);
	boy.addImage(boyImg);
	boy.scale=0.15;

	tree=createSprite(1150,390,200,700)
    tree.addImage(treeImg)
    tree.scale=0.5

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
new Stone(this.x,this.y,this.width,this.height);

   mango=new Mango(570,-100,this.r);
   mango2=new Mango(660,-20,this.r);
   mango3=new Mango(690,-150,this.r);
   mango4=new Mango(800,-30,this.r);
   mango5=new Mango(500,-10,this.r);

   chain=new Chain(stone,boy);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,20,0);
  drawSprites();
  stone.display();
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
}