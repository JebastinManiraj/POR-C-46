var josh ,joshImage, dinosaur1,dinosaur2,dinosaur3,dinosaur4,bombImage;
var diamond,cave,bombGroup,creatureGroup;
var score;
var villan;

function preload() {
  cave = loadImage("cave.jpg");
  joshImage = loadImage("josh.png");
  dinosaur1 = loadImage("creature1.png");
  dinosaur2 = loadImage("creature2.png");
  dinosaur3 = loadImage("creature3.png");
  dinosaur4 = loadImage("creature4.png");
  bombImage = loadImage("bomb.png");
}

function setup() {
  createCanvas(1400,600);
  
  josh = createSprite(300,450,80,80);
  josh.addImage("Josh",joshImage);
  josh.scale = 1.3;
  score = 0;
  bombGroup = new Group()
  creatureGroup = new Group()
  
}

function draw() {
  background(cave);
  textSize(30)
  fill("white")
  text("score:"+score,1200,50)
  text("Warning-Escape From It!!",400,50)
  if(bombGroup.isTouching(creatureGroup)){
    creatureGroup.destroyEach();
    bombGroup.destroyEach();
    score+=10;
  }
  if(creatureGroup.isTouching(josh)){
    josh.destroy();
  }
  spawnCreature();
  if(score>=50){
    var villan= createSprite(1000,400,80,80)
    villan.addImage("dinosaur4",dinosaur4)
    villan.scale = 1.8
  }
   
   drawSprites();

}

function spawnCreature(){
  if(frameCount%200 ==0){
    var dinosaur = createSprite(1400,450,70,70)
    dinosaur.velocityX = -3

    var rand = Math.round(random(1,3))
    switch(rand){
      case 1 : dinosaur.addImage("dinosaur",dinosaur1)
      break;
      case 2 : dinosaur.addImage("dinosaur",dinosaur2)
      break;
      case 3 : dinosaur.addImage("dinosaur",dinosaur3)
      break;
      default :dinosaur.addImage("dinosaur",dinosaur1)
    }
    dinosaur.scale = 1;
    dinosaur.lifetime = 400;
    dinosaur.setCollider("rectangle",0,0,150,200);
    //dinosaur.debug = true
    creatureGroup.add(dinosaur)
  }
}

function createBomb(){
  var bomb = createSprite(300,450,50,50);
  bomb.x = josh.x
  bomb.velocityX = 4
  bomb.lifetime = 300
  bomb.addImage(bombImage)
  bomb.scale = 0.5
  bomb.setCollider("circle",0,0,50);
 // bomb.debug = true;
  bombGroup.add(bomb);
}

function keyPressed(){
  if(keyCode ==32){
    createBomb()
  }
}
