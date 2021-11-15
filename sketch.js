var box;

function setup() {
  createCanvas(800,800);
  box = createSprite(400,400,60,60);

}

function draw() 
{
   background(30);
if (keyIsDown(LEFT_ARROW)) {
box.position.x = box.position.x-6;
    
}
if (keyIsDown(RIGHT_ARROW)) {
box.position.x=box.position.x+6;

}

if (keyIsDown(UP_ARROW)) {
box.position.y=box.position.y-6;


}
if (keyIsDown(DOWN_ARROW)) {
  box.position.y=box.position.y+6;
  
  
  }




  drawSprites();
}




