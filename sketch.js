var PLAY=1
var END=0
var gameState=1
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var g

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  
  monkey=createSprite(150,300,50,50)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
  
  g=createSprite(300,350,600,30)

  FoodGroup=createGroup()
    obstacleGroup=createGroup()

}


function draw() {
  background("white")
  text("score:"+score,200,30)
  monkey.collide(g)
  if(gameState===PLAY){
    if(keyDown("space")&&monkey.y>=260){
   monkey.velocityY=-15;
    }
      b()
      r()
   

  }
   monkey.velocityY=monkey.velocityY+0.83
  FoodGroup.setLifetimeEach=100
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach()
    score=score+2
  }
  if (obstacleGroup.isTouching(monkey)){
    gameState="end"
    obstacleGroup.destroyEach()
  }
  
  
  drawSprites()
}

 function b(){
 if(frameCount%60===0){
   var banana=createSprite(590,random(120,300),10,10)
   banana.addImage(bananaImage)
   banana.scale=0.1
   banana.velocityX=-7
   banana.setLifetime=100
   FoodGroup.add(banana)
   
 }
 }
 function r(){ 
 if(frameCount%100===0){
 var obstace=createSprite(590,300,10,10)
 obstace.addImage(obstaceImage)
 obstace.velocityX=-8
      obstace.scale=0.2
   obstace.setLifetime=100
   obstacleGroup.add(obstace)
 }
 }






