
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(width/2,height - 10,width,20)
leftSide = new Ground(1100,697,20,120)
rightSide = new Ground(1300,697,20,120)

var ballOptions = {
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2}

ball = Bodies.circle(260,100,20,ballOptions)
World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  leftSide.display()
  rightSide.display()
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})

	}
}


