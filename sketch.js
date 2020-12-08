var canvas, backgroundImage;
var bgImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var Monkey,Mg;
var form, player, game;
var Monkeys;
var formBg,formBg2;
var PImage;
var coinImg;
var Coin,CoinGroup;
var runway,runwayImage,CoinScore=0;
;
function preload() {
  formBg=loadImage("fev.jpg")
  PImage=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png") 
  
  coinImg=loadImage("Coin1.png");
  runwayImage=loadImage("runway.png")

}




function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-40);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  CoinGroup=createGroup()
  CoinGroup2=createGroup()
  CoinGroup3=createGroup()
  
 
}


function draw(){
  
   background(formBg)

  if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();

    if (Monkey.isTouching(CoinGroup)) { 
      CoinGroup.destroyEach(Coin);
      CoinScore++;
   }
   
   if (Monkey.isTouching(CoinGroup2)) { 
    CoinGroup2.destroyEach(Coin);
    CoinScore++;
   
 }
 if (Monkey.isTouching(CoinGroup3)) { 
  CoinGroup3.destroyEach(Coin);
  CoinScore++;
 
}
  }
  
 
 

 
 
}
