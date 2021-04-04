class Game {
  constructor(options){
    this.ctx = options;
    this.world = world;
    this.player = new Player();
    this.piso=0;
    this.techo = new Image();
    this.techo.src = "images/techo.png";
    this.techoX=0;
    this.techoY=0;
    this.nivel=1;

  }
 
//   _assignControlsToKeys(){
//     document.addEventListener('keydown', (event) => {
//       switch (event.code) {
//         case 'ArrowRight':
//           this.player.moveRight();
//           break;
//         case 'ArrowLeft':
//           this.player.moveLeft();
//           break;
//         case 'ArrowUp':
//           this.player.jump();
//       }
//     });    
// }

_checkFloor(){

  this.world.forEach(floor=>{
    if (this.player.y+40>=floor.y && floor.y>=this.player.y){
      this.piso=floor.floornum;
      this.nivel=this.piso/2;
      return floor.floornum
    }
  })
}

_checkNivel(){
  console.log(this.nivel);
  if (this.nivel % 11 == 0){
    this.world.moveInterval=this.world.moveInterval - 3;
    this.world.forEach(floor => floor._moveForward());
    this.player.movement=this.player.movement+5;
    this.nivel++;
  }
}



_checkCollision(){

  if (this.player.x<this.player.ancho/2){   //Miramos que no se salga por el lado izquierdo
    this.player.x=this.player.ancho/2;
  }

  if (this.player.x>this.ctx.canvas.width-this.player.ancho/2){   //Miramos que no se salga por el lado izquierdo
    this.player.x=this.ctx.canvas.width-this.player.ancho/2;
  }
  
 
  if (this.player.y>20){
    
    if (this.world[this.piso].floornum % 2 == 0){
      if (this.player.x<=this.world[this.piso].width){
        if (this.world[this.piso].y+30>=this.player.y) {
            //estamos encima escalon izq           
            this.player.y=this.world[this.piso].y;
            this.player.t=0;
            this.player.v=0;
            
            }
          } else if (this.player.x>this.world[this.piso].width && this.player.x<this.world[this.piso].width+100){
            //estamos en agujero
            this.player.t=this.player.t+0.1;
            this.player.v=-7;
            this.player.y=Math.ceil((this.player.y-((this.player.v*Math.sin(this.player.alpha))*this.player.t-(0.5)*this.player.g*this.player.t*this.player.t))/1)*1;
          } else if (this.player.x>=this.world[this.piso].x+100){
            //estamos encima escalon dcho
            if (this.world[this.piso].y+30>=this.player.y) {
              this.player.y=this.world[this.piso].y;
              this.player.t=0;
              this.player.v=0;
              
            }
          }
        } else {

          if (this.player.x<=this.world[this.piso].width){
            if (this.world[this.piso].y+30>=this.player.y) {
                //estamos encima escalon  izq          
                this.player.y=this.world[this.piso].y;
                this.player.t=0;
                this.player.v=0;
                
                }
              } else if (this.player.x>this.world[this.piso].width && this.player.x<this.world[this.piso].width+100){
                //estamos en agujero
                this.player.t=this.player.t+0.1;
                this.player.v=-7;
                this.player.y=Math.ceil((this.player.y-((this.player.v*Math.sin(this.player.alpha))*this.player.t-(0.5)*this.player.g*this.player.t*this.player.t))/1)*1;
                console.log('piso:',this.piso);
              } else if (this.player.x>=this.world[this.piso].x+100){
                //estamos encima escalon dcho
                console.log('dcha');
                if (this.world[this.piso].y+30>=this.player.y) {
                  this.player.y=this.world[this.piso].y;
                  this.player.t=0;
                  this.player.v=0;
                  
                }
              }
        }


    
  }else{
    this._muertePorAplastamiento();
  } 

}

_muertePorAplastamiento(){

  this.player.vivo=false;
  this.world=[];
  clearInterval(this.world.moveInterval);


}

_drawTecho(){
  this.ctx.drawImage(this.techo,this.techoX,this.techoY,500,35);
}

  _cuentaPuntos(){
    this.ctx.font='bold 36px Rancho';
    this.ctx.fillStyle='red';
    this.ctx.fillText (this.piso,35,50);
    
  }

  _clean(){
    this.ctx.clearRect(0,0,500,500);
  }
  
  _update(){ 
 
    this._clean();
    this._checkNivel();
    this._checkFloor();
    this._checkCollision();
    this.player._drawPlayer(this.ctx);
    this._cuentaPuntos();
    this.world.forEach(floor => floor._drawFloor(this.ctx));
    this._drawTecho();
    window.requestAnimationFrame(this._update.bind(this));
  } 


  
  
  start(){
    // this._assignControlsToKeys();
    document.addEventListener("keydown", this.player._keyDownHandler, false);
    document.addEventListener("keyup", this.player._keyUpHandler, false);
    this.world.forEach(floor => floor._moveForward());
    window.requestAnimationFrame(this._update.bind(this));
  }
}