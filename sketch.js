
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var ground1;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(200,200,30,30);
	bob2=new Bob(170,200,30,30);
	bob3=new Bob(230,200,30,30);
	bob4=new Bob(260,200,30,30);
	bob5=new Bob(140,200,30,30);
	ground1=new Ground(200,0,150,30)
	rope1=new Rope(bob1.body,ground1.body);
	rope2=new Rope(bob2.body,ground1.body);
	rope3=new Rope(bob3.body,ground1.body);
	rope4=new Rope(bob4.body,ground1.body);
	rope5=new Rope(bob5.body,ground1.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground1.display();
  rope1.display();
  rope2.display();
  rope3.display();
 rope4.display();
  rope5.display();
  drawSprites();
 
}



