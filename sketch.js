
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin1,paper1,ground1;
var world;	


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	paper1=new Paper(200,450,40)
	dustbin1=new Dustbin(1200,650)
	ground1=new ground(width/2,670,width,20)

	//Create the Bodies Here.
var render = Render.create({
	element:document.body,
	engine:engine,
	options:{
		width:1200,
		height:700,
		wireframes:false
	}
});


	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  dustbin1.display();
  ground1.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === RIGHT_ARROW) {

	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
  
	}
}



