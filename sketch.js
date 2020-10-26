var fr;
var mr;
var o1,o2,o3,o4;


function setup() {
  createCanvas(800,400);
 mr=createSprite(400, 200, 50, 50);
  fr=createSprite(500,200,50,50);

  o1=createSprite(250,205,40,32);
  o2=createSprite(230,350,20,30);
  o3=createSprite(230,50,50,45);
  o4=createSprite(545,278,14,21);
o1.shapeColor="red";
o2.shapeColor="orange";
o3.shapeColor="lime";
o4.shapeColor="pink";

o3.velocityY=2
o2.velocityY=-2

  mr.shapeColor="red";
  fr.shapeColor="red";
}

function draw() {
  background("blue");  
bounceOff(o2,o3)

/*
if(isTouching(mr,o2))
{
  mr.shapeColor="lime";
  o2.shapeColor="lime";
}
else
{

  mr.shapeColor="black";
  o2.shapeColor="black";
}
*/

  drawSprites();
}
