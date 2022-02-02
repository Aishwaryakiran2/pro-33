var snow;
var snow1;
var snowflake,snowimg,snow2,snow3;

function preload(){

snow=loadAnimation("snow1.jpg");
snowimg=loadAnimation("snow4.webp");


}

function setup() {

  createCanvas(800,400);
  snow1=createSprite(400, 200, 50, 50);
  snow1.addAnimation("snow",snow)
  snowflake=createSprite(200,200,40,40);
  snowflake.addAnimation("snowimg",snowimg);
  snowflake.scale=0.1;

  snowflake1=createSprite(400,100,40,40);
  snowflake1.addAnimation("snowimg",snowimg);
  snowflake1.scale=0.1;

  snowflake2=createSprite(100,180,40,40);
  snowflake2.addAnimation("snowimg",snowimg);
  snowflake2.scale=0.1;

  snowflake3=createSprite(600,50,40,40);
  snowflake3.addAnimation("snowimg",snowimg);
  snowflake3.scale=0.1;

  snowflake4=createSprite(700,20,40,40);
  snowflake4.addAnimation("snowimg",snowimg);
  snowflake4.scale=0.1;

}

function draw() {
  background(0);  
 

  if(keyDown("UP_ARROW") ){
  snowflake.velocityY=-4;
  snowflake1.velocityY=-4;
  snowflake2.velocityY=-4;
  snowflake3.velocityY=-4;
  snowflake4.velocityY=-4;

  }
  drawSprites(); 

  textSize(15)
  stroke("black")
  text("Press up arrow to see the magic.",300,20);
}

