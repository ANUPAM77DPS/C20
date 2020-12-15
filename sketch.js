var a,b
function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 100);
  a.shapeColor="red"

  b=createSprite(200,200,50,100)
  b.shapeColor="red"
}

function draw() {
  background("black");  
  drawSprites();
  a.x=mouseX
  a.y=mouseY
  console.log(a.y-b.y)
  if(a.x-b.x<a.width/2+b.width/2 && b.x-a.x<a.width/2+b.width/2 && 
    b.y-a.y<a.height/2+b.height/2 && a.y-b.y<a.height/2+b.height/2){
    a.shapeColor="white"
    b.shapeColor="white"
  
  }
  else{
    a.shapeColor="red"
    b.shapeColor="red"
  }
}