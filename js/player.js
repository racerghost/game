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
    this.rightPressed = false;
    this.leftPressed = false;
    this.spacePressed = false;
  }

  _checkPlayerPostion(){
    if(this.yp>420){           //Hacemos que no se salga por debajo
      this.vpo=0;
      this.vp=0
      //this.t=0;
    }
    
    if(this.xp<0){            //Hacemos que no se salga por izq
      this.xp=0;
      this.xpo=0;
    }

    if(this.xp>415){          //Hacemos que no se salga por dcha
      this.xp=415;
      this.xpo=415;
    }
  }

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
    this.t=this.t+0.5;  //Contamos tiempo para calcular la posicion del muñecote

    if(this.yp>425){           //Hacemos que no se salga por debajo
      this.vpo=0;
      this.t=0;
    }

    if(this.rightPressed) {
      this.ang=85;
      this._recalcAlpha();
      this.xpo += 17;
    }
    else if(this.leftPressed) {
      this.ang=95;
      this._recalcAlpha();
      this.xpo -= 17;  
    }

    if(this.spacePressed){
      this.yp=420;
      this.vpo=50;  //velocidad para empujar muñecote hacia arriba
    } 
    
    if (this.yp<=420) {
      //console.log(Math.ceil((this.player.ypo-((this.player.vpo*Math.sin(this.player.alpha))*this.player.t-(0.5)*this.player.g*this.player.t*this.player.t))/5)*5);
      this.yp=Math.ceil((this.ypo-((this.vpo*Math.sin(this.alpha))*this.t-(0.5)*this.g*this.t*this.t))/5)*5;
    }else{
      this.yp=Math.trunc(this.ypo-((this.vpo*Math.sin(this.alpha))*this.t-(0.5)*this.g*this.t*this.t));
    }
  
    this.xp=Math.trunc(this.xpo+(this.vpo*Math.cos(this.alpha)));    

    // while (this.yobs>0) {
    //   this.yobs=this.yobs-1;
    // }
    
    
  }

_checkMuertePorAplastamiento(){
  if (this.yp<0){

    //alert('muerto');
    console.log ('muerto');
  }
}

  _recalcAlpha(){
    this.alpha=(2*this.ang/360)*Math.PI;  
  }

  _reasignInitialValues(){
    if (this.vpo>0){
     this.xpo=this.xp;}
  }

  _checkCollision(){
    if (this.xp+45>this.xobs){
      //console.log('debajo',this.yp,this.yobs);
      if (this.yobs+20>this.yp){
        console.log('arriba',this.yp,this.ypo,this.yobs,this.xp,this.xpo, this.vp, this.vpo);
        //this.yp=0;//this.yobs-70;
        this.t=0;
        this.vp=0;
        this.vpo=0;
        this.ypo=this.yobs-70;
        
        //this.ypo=this.yobs;
      }  else if (this.yobs<this.yp){
        
        console.log('abajo',this.yp,this.ypo,this.yobs,this.xp,this.xpo, this.vp, this.vpo);
      }
    } else if (this.xp+45<this.xobs){
        this.ypo=425;
      }
  }

  _showPosition(){
    console.log('data-> yp:',this.yp,'ypo:',this.ypo,'yobs:',this.yobs,'xp:',this.xp,'xpo:',this.xpo, 'vp:',this.vp, 'vpo:',this.vpo);
  }

  drawPlayer(xp,yp){

    this._calcPlayer();
    this._checkPlayerPostion();
    this._checkCollision();
    this._showPosition();
    this.ctx.drawImage(this.img,this.xp,this.yp,90,90);
   // this._checkMuertePorAplastamiento();
    this._reasignInitialValues();
  }
} 