
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var paperObject, dustbinObject, groundObject;
var world; 
var sling1;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);
  rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;
   dustbinObj=new Dustbin(1200,500);
	paperObject=new paper(200,450,40);
	groundObject=new Ground(width/2,670,width,20);
    sling1 = new SlingShot(paperObject.body,{x:200,y:200});
	//Create the Bodies Here.

  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  dustbinObj.display();
  groundObject.display();
  paperObject.display();
  sling1.display();
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
  }
}

function mouseDragged(){
	Matter.Body.setPosition(paperObject.body,{x:mouseX,y:mouseY});
  }

  function mouseReleased(){
	sling1.fly();
  }
