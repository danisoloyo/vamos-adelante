
var trex ,trex_running;
var edges;
var ground, groundIng, invisible;
var nubeIng, nube;
var obstaculo1, obstaculo2, obstaculo3, obstaculo4, obstaculo5, obstaculo6
function preload(){
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
obstaculo1=loadImage("obstacle1.png");
obstaculo2=loadImage("obstacle2.png");
obstaculo3=loadImage("obstacle3.png");
obstaculo4=loadImage("obstacle4.png");
obstaculo5=loadImage("obstacle5.png");
obstaculo6=loadImage("obstacle6.png");
groundImg=loadImage("ground2.png");
nubeIng=loadImage("cloud.png");
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
  trex=createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);
trex.scale=0.7;
  edges=createEdgeSprites();
// piso
ground= createSprite(200, 190, 600, 20);
ground.addImage(groundImg);
invisible=createSprite(200,195,600,10);
invisible.visible=false;
grupoNubes=createGroup();
grupoobstaculo=createGroup();


}
function draw(){
  background("yellow")
  ground.velocityX=-2;
  if(ground.x < 0){
  ground.x=ground.width/2; }
  if(keyDown("space") &&trex.y>=100){ 
  trex.velocityY=-10; }
  trex.velocityY=trex.velocityY+0.8;
  trex.collide(invisible);
 
crearNubes();
crearObstaculos();
drawSprites();
 
}
//funcion de nuestras nubes
function crearNubes (){
  if(frameCount % 60 === 0){ 
  var nube= createSprite (600,100,30,10);
  nube.addImage(nubeIng);
 nube.scale=0.5;
 nube.y=Math.round(random(10,100));
  nube.velocityX=-3;
  nube.depth=trex.depth;
  trex.depth=trex.depth+3;
  nube.lifetime=250;
  grupoNubes.add(nube);
}
}
// Funcion de obstaculos
function crearObstaculos(){
  if(frameCount % 60 === 0){
  var obstaculo=createSprite(600,170,30,10);
var num= Math.round(random(1,6));
switch (num){
  case 1: obstaculo.addImage(obstaculo1);
  case 2: obstaculo.addImage(obstaculo2);
  case 3: obstaculo.addImage(obstaculo3);
  case 4: obstaculo.addImage(obstaculo4);
  case 5: obstaculo.addImage(obstaculo5);
  case 6: obstaculo.addImage(obstaculo6);
 
}


obstaculo.scale=0.5; 
 obstaculo.velocityX=-5;
 obstaculo.lifetime=250; 
 grupoobstaculo.add(obstaculo);
}
}
