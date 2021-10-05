const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var boy, boyImage, snow


function preload(){
  backgroundImg=loadImage("snow2.jpg")
  boyImage = loadImage("boy.png");
  snowImage = loadImage("snow4.webp")
}

function setup() {
  createCanvas(1500,700);
  engine = Engine.create();
  world = engine.world;

  boy = createSprite(500,590,10,10);
  boy.scale = 0.15;
  boy.addImage( boyImage);

  snow= new Snow(100,50,10,10);

  ground = createSprite(100,690,5000,10);

}

function draw() {
  background(backgroundImg); 
  Engine.update(engine)

  if(keyDown("left_arrow")){
    boy.x = boy.x-5;
  }

  if(keyDown("right_arrow")){
    boy.x = boy.x+5;
  }

  for(i = 0; i <0.00001; i++){
    snow = createSprite(random (100,1500),10,10)
    snow.addImage(snowImage)
    snow.scale = 0.1
    snow.velocityY = 7
    
  }
  snow.display()

  fill("magenta")
  stroke("white")
  textSize(30);
  text("Use left or right arrow keys to move the boy", 100, 150);

 
  
  drawSprites();

}