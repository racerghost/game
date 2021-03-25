class Game {
  constructor(options){
    this.ctx=options;
    this.rightPressed = false;
    this.leftPressed = false;
    this.spacePressed = false;
    this.player = new Player(options);
    //this.world = new World();
   // this.floor = new Image();
    //this.floor.src = "images/suelo.png";
  }

_generateObstacles(){

  




}
   
  _clean(){
    this.ctx.clearRect(0,0,750,500);
  }

  _createObs(){
    
              this.ctx.beginPath();
              this.ctx.rect(this.player.xobs, this.player.yobs, 200, 20);
              this.ctx.fillStyle = "#0095DD";
              this.ctx.fill();
              this.ctx.closePath();
   }
  
  _update(){   
    this._clean();
    this._createObs();
    this.player.drawPlayer(this.player.xp,this.player.yp);
    window.requestAnimationFrame(this._update.bind(this));
    //console.log (this.world.floor);
    //this.ctx.drawImage(this.floor,this.world.floor[0].xobs,this.world.floor[0].yobs,300,30);
  }
 
  start(){
    document.addEventListener("keydown", this.player._keyDownHandler, false);
    document.addEventListener("keyup", this.player._keyUpHandler, false);
    window.requestAnimationFrame(this._update.bind(this));
  }
}

