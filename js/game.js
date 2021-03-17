class Game {
  constructor(options){
    this.ctx=options;
    this.player = new Player(250,250,options);
    this.x=250;
    this.y=250;
  }

_assignControlsToKeys(){

    document.addEventListener('keydown',(key)=>{
        console.log(key.key);
      switch (key.key) {
        case "ArrowRight":  
         // console.log(this.x);
          this.x=this.x+50      
          this.player.drawPlayer(this.x,this.y);
          break;       
        case "ArrowLeft":        
          console.log(key.key);
          break;
        case "ArrowUp":        
          console.log(key.key);
          break;       
        case "ArrowDown":        
          console.log(key.key);
          break;
        default:
          break;
      }
    })
  }

  

  _drawPlayer(){

    
  }

  _clean(){
      this.ctx.clearRect(0,0,500,500);
  }




  _update(){   
    this._clean();
    this._assignControlsToKeys();
    this._drawPlayer();
    window.requestAnimationFrame(this._update.bind(this));
   }


  start(){
 
   //console.log(this);
   //this._update();
   window.requestAnimationFrame(this._update.bind(this));
  }

}
