class Floor {
  constructor(options){
    this.x=options.x;
    this.y=options.y;
    this.width = options.width;
    this.height = 10;
    this.moveInterval = undefined;
    this.color = options.type;
    this.type = options.type;
    this.floornum=options.floornum;
    this.intervalTime = 15;

    this.suelo = new Image();
    this.suelo.src = "images/suelo.png";

  } 

  _moveForward(){
    this.moveInterval = setInterval(function(){
      this.y = this.y - 1;
    }.bind(this),this.intervalTime);
   }



  _drawFloor(ctx){
    ctx.drawImage(this.suelo,this.x,this.y,this.width,this.height);
  }
  


  
}