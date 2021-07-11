
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	paper1 = new paper(100,488,"purple");
	

	//Create the Bodies Here.
	box = new Ground (width/2+170,475,200,10);

	box1 =  new Ground (width/2 + 75,430,10,100);

	box2 =  new Ground (width/2 + 270,430,10,100);
	
	ground = new Ground(0,490,10000,20);
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper1.display();
  box.display();
  box1.display();
  box2.display();

  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){

Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});

}

}

