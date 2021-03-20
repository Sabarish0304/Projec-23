var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxSprite1,boxSprite2,boxSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	boxPosition = width/2-100;

	boxSprite1=createSprite(boxPosition+200-20,610,20,100);
	boxSprite1.shapeColor=color(255,0,0)

	boxSprite2=createSprite(boxPosition,610,20,100);
	boxSprite2.shapeColor=color(255,0,0)

	boxSprite=createSprite(boxPosition+100,650,200,20);
	boxSprite.shapeColor=color(255,0,0)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	boxB = Bodies.rectangle(400,645,200,20 , {isStatic:true} );
 	World.add(world, boxB);

	boxS1 = Bodies.rectangle(500,605,20, 100 , {isStatic:true} );
 	World.add(world, boxS1);

	boxS2 = Bodies.rectangle(300,405,20,100 , {isStatic:true} );
 	World.add(world, boxS2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
 
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
    
  }
}



