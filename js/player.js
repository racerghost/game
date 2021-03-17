class Player {
  constructor(x,y,ctx){
    this.x=x;
    this.y=y;
    this.ctx=ctx;

  }

  drawPlayer(x,y){

    this.ctx.fillStyle='green';
    this.ctx.beginPath();
    this.ctx.arc(x,y, 40, 0, 2 * Math.PI);
    this.ctx.stroke();
  }

  moveRight(){

    console.log(this.x);
    this.drawPlayer(this.x,this.y)
    
  }
}