var  database;
var gameState = 0;
var playerCount ;
var form,player,game;
var allPlayers;
var C1,C2,C3,C4,CARS;

function setup(){
  database = firebase.database();
 
  createCanvas(displayWidth-20,displayHeight-30);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
 if(playerCount===4){
   game.update(1);
 }
 if(gameState===1){
   clear();
   game.play();
 }
 
 
  
}

