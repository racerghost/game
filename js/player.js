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
  } 

  moveRight(){
    this.x = this.x + 15;
    this.ang=85;
    this._recalcAlpha();
  }

  moveLeft(){
    this.x = this.x - 15;
    this.ang=95;
    this._recalcAlpha();
  }

  jump(){
    this.v=60;
    this.y=this.y-40;
    console.log('hola')
    // this.jumpInterval = setInterval(function(){
    //   this.y = this.y - 10;
    // }.bind(this), 100);
  }

  _recalcAlpha(){
    this.alpha=(2*this.ang/360)*Math.PI;  
  }

  _drawPlayer(ctx){
    if (this.vivo){
      ctx.drawImage(this.img,this.x-(this.ancho/2),this.y-this.alto+5,this.ancho,this.alto);
    } else {
      ctx.drawImage(this.explosion,-110,-30,720,500);
    }
  }


}