var Engine = Matter.Engine,
  World = Matter.world,
  Bodies = Matter.bodies;

var engine = Engine.create(document.body);
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60 {isStatic: true});

World.add(engine.world, [boxA, boxB, ground]);

Engine.run(engine);
