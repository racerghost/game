class Game {
  constructor(options){
    this.ctx=options;
    this.rightPressed = false;
    this.leftPressed = false;
    this.spacePressed = false;
    this.player = new Player(options);
  }

//_assignControlsToKeys(key)

 _keyDownHandler=(key)=> {              //Pulso una tecla y miro cual es y asigno valor a su variable
   if(key.code  == "ArrowRight") {
     this.rightPressed = true;
    }
    else if(key.code == 'ArrowLeft') {
      this.leftPressed = true;
    } 
    else if(key.keyCode===32){
      this.spacePressed=true;
    }
  }

  _keyUpHandler=(key)=>{                //suelto una tecla y miro cual es y asigno valor a su variable
    if(key.code  == "ArrowRight") {
      this.rightPressed = false;
    }
    else if(key.code == 'ArrowLeft') {
      this.leftPressed = false;
    }
    else if(key.keyCode===32){
      this.spacePressed=false;
    }
  }
  
  _calcPlayer(){
    this.player.t=this.player.t+0.5;  //Contamos tiempo para calcular la posicion del muñecote

    if(this.player.yp>425){           //Hacemos que no se salga por debajo
      this.player.vpo=0;
      this.player.t=0;
    } 

    if(this.rightPressed) {
      this.player.ang=85;
      this.player._recalcAlpha();
      this.player.xpo += 17;
      console.log(this.player.ang);
    }
    else if(this.leftPressed) {
      this.player.ang=95;
      this.player._recalcAlpha();
      this.player.xpo -= 17;  
    }

    if(this.spacePressed){
      console.log('ESPACE:',this.player.ang);
      this.player.yp=420;
      this.player.vpo=50;  //velocidad para empujar muñecote hacia arriba
    } 
    
    this.player.yp=Math.trunc(this.player.ypo-((this.player.vpo*Math.sin(this.player.alpha))*this.player.t-(0.5)*this.player.g*this.player.t*this.player.t));
    this.player.xp=Math.trunc(this.player.xpo+(this.player.vpo*Math.cos(this.player.alpha)));
    this.player.drawPlayer(this.player.xp,this.player.yp);
    
  }
  
  _clean(){
    this.ctx.clearRect(0,0,750,500);
  }
  
  _update(){   
    this._clean();
    this._calcPlayer();
    window.requestAnimationFrame(this._update.bind(this));
  }
 
  start(){
    
    document.addEventListener("keydown", this._keyDownHandler, false);
    document.addEventListener("keyup", this._keyUpHandler, false);
    window.requestAnimationFrame(this._update.bind(this));

  }
}