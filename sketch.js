const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world


var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;


  for (k = 0; k <= width; k = k + 80) {
    divisions.push(new Division(k, height - divisionHeight / 2, 10, divisionHeight))
  }




for (var j = 75; j <= width; j = j + 50) {
  plinkos.push(new Plinko(j, 75));
}
for (var j = 50; j <= width - 10; j = j + 50) {
  plinkos.push(new Plinko(j, 175));
}

for (var j = 25; j <= width - 100; j = j + 50) {
  plinkos.push(new Plinko(j, 275));
}

for (var j = 100; j <= width - 150; j = j + 50) {
  plinkos.push(new Plinko(j, 375));
}



ground = new Ground(400, 790, 800, 20);





}

function draw() {
  background(255, 255, 255);
  Engine.update(engine);

  ground.display();

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  
  if (frameCount % 60 === 0) {
    particles.push(new Particle(random(width / 2 - 10, width / 2 + 10), 5, 5));
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }


  drawSprites();
}

