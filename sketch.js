// namespacing - renaming objects
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, object, ball;

function setup(){
  var canvas=createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var groundOptions = {
    isStatic : true
  };

  ground = Bodies.rectangle(200, 380, 400, 20, groundOptions);
  World.add(world, ground);

  console.log(ground);

  var objectOptions = {
    isStatic : false,
    restitution : 2
  }

  object = Bodies.rectangle(200, 100, 20, 20, objectOptions);
  World.add(world, object);

  var circleOptions = {
    isStatic : false,
    restitution : 2
  }

  ball = Bodies.circle(150, 140, 10, circleOptions);
  World.add(world, ball);

}

function draw()
{
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y,400,20);
    
    rect(object.position.x, object.position.y, 20, 20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 10, 10);
  
}
