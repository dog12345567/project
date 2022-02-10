var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var ob

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost=createSprite(300,300)
  ghost.addImage(ghostImg)
  ghost.scale=0.45
  

doorsGroup=createGroup()
climbersGroup=createGroup()
obsGroup=createGroup()


}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }

  if(keyDown("space")){


  ghost.velocityY=-4
  }
ghost.velocityY+=0.5
if(keyDown("left_arrow")){
ghost.x=ghost.x-3

}
if(keyDown("right_arrow")){
ghost.x=ghost.x+3

}if(ghost.isTouching(climbersGroup)){
ghost.velocityY=0

}
spwanob()
if(ghost.y>600){
console.log("gameover")
 fill("white")
 textSize(20)
 text("game over",300,300)
 //ghost.destroy()
}
if(ghost.isTouching(obsGroup)){
  console.log("gameover")
   fill("white")
   textSize(20)
   text("game over",300,300)
   ghost.destroy()
  }

spawndoor()
 //spwanob()
   drawSprites()
   if(ghost.y>600){
    console.log("gameover")
     fill("white")
     textSize(20)
     text("game over",300,300)
     ghost.destroy()
    }



} 
function spawndoor(){
  if (frameCount % 100 === 0) {
    var door = createSprite(50,0,40,10);
    door.x = Math.round(random(80,404));
    door.addImage(doorImg);
    door.scale = 0.5;
    door.velocityY =3;
    
     //assign lifetime to the variable
    door.lifetime = 200;
    
    //adjust the depth
    door.depth = ghost.depth;
    ghost.depth = ghost.depth + 1;
    
    //add each cloud to the group
    doorsGroup.add(door);
    climber=createSprite(door.x,door.y+25)
    climber.addImage(climberImg)
    climber.velocityY=3
    climber.scale=0.75
    climbersGroup.add(climber)

  }
}
  function spwanob(){
    if (frameCount % 100 === 0) {
      var ob = createSprite(30,30,20,20);
      ob.x = Math.round(random(80,404));
     
    
      ob.velocityY =3;
      
       //assign lifetime to the variable
      ob.lifetime = 200;
      obsGroup.add(ob);
    }
  }