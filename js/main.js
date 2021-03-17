
//generateSplashScreen();
document.addEventListener('DOMContentLoaded',()=>{

  console.log('DOM loaded');
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const game = new Game(ctx);
  // game.start();





  function generateSplashScreen(){
    const intro=document.getElementById('intro');
    intro.innerHTML=`
      <div>
        <button id='play'>Play</button>
      </div>
      `; 

    const playButton = document.querySelector('#play');
    playButton.addEventListener('click',()=>{
      console.log('keykkkkk');
      game.start()
    })


  }

generateSplashScreen();

})