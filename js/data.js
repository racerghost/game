let x=0;
let y=510
let world = [
  new Floor({ x: 0, y: 510, width: 150, type:'blue',floornum:0 }),
  new Floor({ x: 250, y: 510, width: 250,type:'blue',floornum:1 }),
];

for (let i=2;i<500;i++){


  x= Math.floor(Math.random()*(450-30))+30;
  y= y + Math.floor(Math.random()*(200-100))+100;

  world.push(
      new Floor({ x: 0, y: y, width: x, type:'orange',floornum:i}),
      new Floor({ x: x+100, y: y, width: 500-x-100,type:'orange',floornum:i}),
  )
 
  i++;
  
}

function _removeFloor(){

  world.forEach(floor => {
    if (floor.y<-10){
      world.shift();
      world.shift();      
    }
  });

}