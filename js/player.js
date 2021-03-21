class Player {
  constructor(ctx){
    this.ctx=ctx;
    this.t=0;
    this.xp=0;
    this.xpo=0;
    this.yp=425;
    this.ypo=425;
    this.xobs=295;
    this.yobs=395;
    this.vp=0;
    this.vpo=0;
    this.ang=85;
    this.alpha=(2*this.ang/360)*Math.PI;              /* Calculo angle en radians i a sota els components de la velocitat per x i y */
    this.g=9.81;
    this.vx=this.vp*Math.cos(this.alpha);
    this.vy=this.vp*Math.sin(this.alpha);
    this.img = new Image();
    this.img.src = "images/pou.png";
  }

  _checkPlayerPostion(){
    if(this.yp>425){           //Hacemos que no se salga por debajo
      this.vpo=0;
      this.vp=0
      //this.t=0;
    }
    
    if(this.xp<0){            //Hacemos que no se salga por debajo
      this.xp=-7;
    }

    if(this.xp>415){          //Hacemos que no se salga por debajo
      this.xp=415;
    }
    
  }

  _recalcAlpha(){
    this.alpha=(2*this.ang/360)*Math.PI;  
  }

  _reasignInitialValues(){
    if (this.vpo>0){
     this.xpo=this.xp;}
  }



  drawPlayer(xp,yp){
    this._checkPlayerPostion();
    this.ctx.drawImage(this.img,this.xp,this.yp,90,90);
    this._reasignInitialValues();
  }

  moveRight(){
    this.drawPlayer(this.x,this.y)
  }
}