
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

   

	engine = Engine.create();
	world = engine.world;

	ground1=new Ground(400,690,800,20)

	box1 = new Box(550,620,20,100);
	box2 = new Box(750,620,20,100);
	box3=new Box(650,670,220,17);

	paperObject=new Paper(100,668,23)

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 
  drawSprites();
  ground1.display()
  paperObject.display();
  box1.display();
  box2.display();
  box3.display();
  console.log("keyPressed");

 
}
function keyPressed(){
	if(keyCode ===UP_ARROW){
Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:85,y:-85});
}}



