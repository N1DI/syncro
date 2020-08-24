class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }
   update(state){
       database.ref("/").update({
           gameState:state
       })
   }
   start(){
       if(gameState===0){
           player= new Player();
           player.getCount();
           form= new Form();
           form.display();  
        }
        C1=createSprite(100,200);
        C2=createSprite(300,200);
        C3=createSprite(500,200);
        C4=createSprite(700,200);
       CARS=[C1,C2,C3,C4];
    }
   play(){
       form.hide();
       text("GAME START",120,100);
       Player.getPlayerinfo();
       if(allPlayers!==undefined){
        var  index=0;
        var x=0,y;
           for(var plr in allPlayers ){
         index=index+1;
         x=x+200;
         y=displayHeight-allPlayers[plr].distance;
         CARS[index-1].x=x;
         CARS[index-1].y=y;
         if(index===player.index){
             CARS[index-1].shapeColor="red";
             camera.position.x=displayWidth/2;
             camera.position.y=CARS[index-1].y;
             
         }
           }
       }
       if(keyIsDown(UP_ARROW)&&player.index!==null){
        player.distance=player.distance+50;
        player.update();
    }
   }
   
}