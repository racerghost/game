class Player {
  constructor(){
    this.vivo=true;
    this.x=35;
    this.y=500;
    this.ancho=70;
    this.alto=70;
    this.t=0;
    this.ang=85;
    this.alpha=(2*this.ang/360)*Math.PI;
    this.g=9.81;
    this.v=0;
    this.vx=this.v*Math.cos(this.alpha);
    this.vy=this.v*Math.sin(this.alpha);
    this.jumpInterval = undefined;
    this.img = new Image();
    this.img.src = "images/pou.png";
    this.explosion = new Image();
    this.explosion.src = "images/explosion.png";
    this.movement=3;
    this.rightPressed = false;
    this.leftPressed = false;
  } 

  // moveRight(){
  //   this.x = this.x + this.movement;
  //   this.ang=85;
  //   this._recalcAlpha();
  // }

  // moveLeft(){
  //   this.x = this.x - this.movement;
  //   this.ang=95;
  //   this._recalcAlpha();
  // }

  _keyDownHandler=(key)=> {              //Pulso una tecla y miro cual es y asigno valor a su variable
    if(key.code  == "ArrowRight") {
      this.rightPressed = true;
     }
     else if(key.code == 'ArrowLeft') {
       this.leftPressed = true;
     } 
   }
 
   _keyUpHandler=(key)=>{                //suelto una tecla y miro cual es y asigno valor a su variable
     if(key.code  == "ArrowRight") {
       this.rightPressed = false;
     }
     else if(key.code == 'ArrowLeft') {
       this.leftPressed = false;
     }
   }

  _recalcAlpha(){
    this.alpha=(2*this.ang/360)*Math.PI;  
  }

  _drawPlayer(ctx){
    if (this.vivo){
      if(this.rightPressed) {
        this.x = this.x + this.movement;
      }else if(this.leftPressed) {
        this.x = this.x - this.movement;
      }

      ctx.drawImage(this.img,this.x-(this.ancho/2),this.y-this.alto+5,this.ancho,this.alto);
    } else {
      ctx.drawImage(this.explosion,-110,-30,720,500);
    }
  }


}