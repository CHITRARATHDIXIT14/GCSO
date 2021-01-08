var car
var wall
var speed,weight


function setup() {
  createCanvas(800,400);
  wall=createSprite(700, 200, 100, height/2);
  car=createSprite(70, 200, 50, 50);
  speed=random(55,90)
  car.velocityX = speed;
  
  weight=random(400,1500)

}

function draw() {
  background(0);  


if(wall.x-car.x < (car.width+wall.width)/2) {

car.velocityX=0;
var deformation=0.5 * weight * speed * speed/22500

if(deformation>180){
car.shapeColor=color(214,0,45)
}

if(deformation<180 && deformation>100){
  car.shapeColor=color(0,1,222)
}

if(deformation>100){
car.shapeColor=color(0,181,38)
}
}











  drawSprites();
}