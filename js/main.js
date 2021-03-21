
//generateSplashScreen();
document.addEventListener('DOMContentLoaded',()=>{

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const game = new Game(ctx);

  function generateSplashScreen(){
    const intro=document.getElementById('intro');
    intro.innerHTML=`
      <div>
        <button id='play'>Play</button>
      </div>
      `; 

    const playButton = document.querySelector('#play');
    playButton.addEventListener('click',()=>{
    game.start()
    })
  }

generateSplashScreen();

})

// document.addEventListener('DOMContentLoaded',()=>{
//     const canvas = document.getElementById("canvas");
//     const ctx = canvas.getContext("2d");

//     var img = new Image();
//     img.src = "images/pou.png";
//     ctx.scale(1,-1);

//    // ctx.drawImage(img, 250, 250);
//     var ballRadius = 10;
//     //var x =20;//canvas.width/2;
//     //var xo=20;//canvas.width/2;
//     //var y = 470;//canvas.height-30;
//     //var yo =470;//canvas.height-30;
//     var t=0;
//     var g=9.81;
//     var ang=90;   
//     var alpha=(2*ang/360)*Math.PI;
//     var xp=0;
//     var yp=425;
//     var xpo=205;
//     var ypo=425;
//     var xobs=295;
//     var yobs=395;
//     vpo=0;
//     vp=0;
//     var v=0;
//     var fuera=true;
//     let i=0;
//     // var vx=v*Math.cos(ang);
    
//     // var vy=v*Math.sin(ang);
   

//     var rightPressed = false;
//     var leftPressed = false;
//     var spacePressed = false;
//     var color='#FF0000';

//     document.addEventListener("keydown", keyDownHandler, false);
//     document.addEventListener("keyup", keyUpHandler, false);

//     function keyDownHandler(key) {
     
//         if(key.code  == "ArrowRight") {
//             rightPressed = true;
//         }
//         else if(key.code == 'ArrowLeft') {
//             leftPressed = true;
//         } 
//         else if(key.keyCode===32){
//             spacePressed=true;
//         }
//     }

//     function keyUpHandler(key) {
//         if(key.code  == "ArrowRight") {
//             rightPressed = false;
//         }
//         else if(key.code == 'ArrowLeft') {
//             leftPressed = false;
//         }
//         else if(key.keyCode===32){
//             spacePressed=false;
//       }

//     }

//     function calcBall(){

        
//         console.log('yp',yp, 'yobs',yobs, 'vp:',vp);
//         if(yp>425){
//             vpo=0;
//             t=0;
//         }  
//         // if (xp>xobs-60){ 
//         //     if (yp<=yobs){ v  
//         //          xp=Math.trunc(xpo+(vpo *Math.cos(alpha)));
//                 //yp=Math.trunc(ypo-(500-canvas.height-100)-((vpo*Math.sin(alpha))*t-(0.5)*g*t*t));
//                 //yp=yobs-80; 
//                 //vpo=0;
//              //   vp=0;
//                 //t=0;
//              //   yp=yobs-80;
//         //     } else{
                
//         //     //    yp=Math.trunc(ypo-((vpo*Math.sin(alpha))*t-(0.5)*g*t*t));
//         //     //    xp=Math.trunc(xpo+(vpo*Math.cos(alpha)));
//         //     }
//         // } else {
//            // yp=Math.trunc(ypo-((vpo*Math.sin(alpha))*t-(0.5)*g*t*t));
//            // xp=Math.trunc(xpo+(vpo *Math.cos(alpha)));
            
//       //  }
        
        
//     }
    
//     function drawBall() {
//         ctx.beginPath();
//         //  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
//         ctx.fillStyle = color;
//         ctx.fill();
//         ctx.closePath();
//         //ctx.drawImage(img, x,y,90,90);
//         ctx.drawImage(img, xp,yp,90,90);
//         ctx.lineWidth = 5;
//         ctx.strokeRect(xobs, yobs, 200, 10);
//     }
//     function drawPaddle() {
//         ctx.beginPath();
//         ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
//         ctx.fillStyle = "#0095DD";
//         ctx.fill();
//         ctx.closePath();
//     }
    
//     function draw() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        
//         calcBall();
//         drawBall();
        
//         vp=Math.trunc((vpo*Math.sin(alpha))-(0.5)*g*t);
//         if(rightPressed && xp < canvas.width-85) {
//             xpo += 17;
//             //console.log(rightPressed,leftPressed, spacePressed);
//         }
//         else if(leftPressed && xp > -5) {
//             xpo -= 17;
//             //console.log(rightPressed,leftPressed, spacePressed);
//         }
        
//         if(spacePressed){
            
//             vpo=70;  //velocidad para mover, es la buena!
        
//         }
        
        
        
//         //x += dx;
//         t=t+0.5;
//         //console.log(t," ",x,y)
//         //y += dy; 
//         window.requestAnimationFrame(draw)
//     }
    
//     window.requestAnimationFrame(draw)
//     //setInterval(draw, 100);
// })