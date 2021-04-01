
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
  }

generateSplashScreen();

const playButton = document.querySelector('#play');
playButton.addEventListener('click', game.start());

});