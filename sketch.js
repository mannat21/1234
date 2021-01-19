
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
box1=new box(600,200,20,100)
box2=new box(500,200,20,100)
box3=new box(550,200,100,20)
var options={isStatic:true}
ground=Bodies.rectangle(200,390,1000,20,options)
World.add(world,ground)
paper=Bodies.circle(200,200,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,1000,20)
  ellipse(paper.position.x,paper.position.y,20)
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}function keyPressed(){
	if (keyCode=="UP_ARROW"){
		Matter.Body.applyForce(paper,paper.body,{x:130,y:-145})
	}
}



