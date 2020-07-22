const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box (200,360,50,50)
    box2 = new Box (300,360,50,50)
    pig1 = new Pig (250,360)
    log1 = new Log (250,310,200,PI/2)
    box3 = new Box (200,290,50,50)
    box4 = new Box (300,290,50,50)
    pig2 = new Pig (250,290)
    log2 = new Log (250,240,200,PI/2)
    box5 = new Box (250,220,50,50)
    log3 = new Log (225,220,100,PI/6)
    log4 = new Log (275,200,100,PI/-6)
    bird1 = new Bird (700,200)
    ground = new Ground (400,390,800,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display ()
    box2.display ()
    ground.display ()
    pig1.display ()
    log1.display ()
    box3.display ()
    box4.display ()
    pig2.display ()
    log2.display ()
    box5.display ()
    log3.display ()
    log4.display ()
    bird1.display ()
}