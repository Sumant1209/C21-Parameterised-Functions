var frect, mrect, a1, a2, a3, a4;


function setup() {
  

  createCanvas(800,400);
  frect = createSprite(200, 200, 50, 80);
  mrect = createSprite(400, 200, 80, 30);

  mrect.velocityX = -5;
  frect.velocityX = 5;

  a1 = createSprite(100, 100, 50, 50);
  a2 = createSprite(200, 100, 50, 50);
  a3 = createSprite(300, 100, 50, 50);
  a4 = createSprite(400, 100, 50, 50);
  
  frect.shapeColor = "green";
  mrect.shapeColor = "green";

  a1.shapeColor = "green";
  a2.shapeColor = "green";
  a3.shapeColor = "green";
  a4.shapeColor = "green";

}

function draw() {
  background(0);  
  //mrect.x = World.mouseX;
  //mrect.y = World.mouseY;

  

  
  if(isTouching(a1, mrect)){
    a1.shapeColor = "red";
    mrect.shapeColor = "red";
  }
  else{
    a1.shapeColor = "green";
    mrect.shapeColor = "green";
  }
  if(bounceOff(frect, mrect)){
    
  }
  drawSprites();
}
function isTouching(obj1, obj2){
  if((obj1.x - obj2.x) <= (obj1.width/2 + obj2.width/2)
  && (obj2.x - obj1.x) <= (obj1.width/2 + obj2.width/2)
  && (obj1.y - obj2.y)<=(obj1.height/2 + obj2.height/2)
      &&(obj2.y - obj1.y)<=(obj1.height/2 + obj2.height/2)){
    return true;
  }
  else{
    return false;
  }

}
function bounceOff(obj1, obj2){
  if((obj1.x - obj2.x) <= (obj1.width/2 + obj2.width/2)
  && (obj2.x - obj1.x) <= (obj1.width/2 + obj2.width/2)){
    obj2.shapeColor = "red";
    obj1.shapeColor = "red";
    obj1.velocityX = (-1) * obj1.velocityX;
    obj2.velocityX = (-1) * obj2.velocityX;
  }
  if((obj1.y - obj2.y)<=(obj1.height/2 + obj2.height/2)
  &&(obj2.y - obj1.y)<=(obj1.height/2 + obj2.height/2)){
    obj2.shapeColor = "red";
    obj1.shapeColor = "red";
    obj1.velocityY = (-1) * obj1.velocityY;
    obj2.velocityY = (-1) * obj2.velocityY;
  }
}