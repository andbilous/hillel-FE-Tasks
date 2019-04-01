 const h=10;
 const step=30+'px';
 let hero=document.querySelector('#hero');

 function moveElement(direction,value){
    direction=margin+direction;
   switch (direction){
     case 'marginLeft':

   }

 }
 function squat(){
  let initialWidth= hero.style.width.replace('px','');
  let initialHeight=hero.style.height.replace('px','');
 
   window.onkeydown=()=>{
     console.log('KeyDOwn');
     console.log(hero.style);
     console.log(hero.style.width);
     console.log(hero.style.height);
    hero.style.width=initialWidth*1.15+'px';
    hero.style.height=initialHeight*0.4+'px';
   }
   window.onkeyup=()=>{
    console.log(hero.style);
    console.log(hero.style.width);
    console.log(hero.style.height);
    console.log('KeyUp');
    hero.style.width=initialWidth+'px';
    hero.style.height=initialHeight+'px';
   }
 }
 window.onkeydown=(e)=>{
  if(e.keyCode===32){
    hero.style.animationName='jump';
  }
  if(e.keyCode===39){
    if(!hero.style.marginLeft){
      hero.style.marginLeft=h+'px';
    }
    else{
      let currentValue=parseInt(hero.style.marginLeft.replace('px',''));
      hero.style.marginLeft=h+currentValue+'px';
    }
    console.log('Right');
  }
  if(e.keyCode===37){
    if(!hero.style.marginLeft){
      hero.style.marginLeft=h+'px';
    }
    else{
      let currentValue=parseInt(hero.style.marginLeft.replace('px',''));
      hero.style.marginLeft=currentValue-h+'px';
    }
    console.log('Left');
  }

  if(e.keyCode===38){
    if(!hero.style.marginTop){
      hero.style.marginTop=h+'px';
    }
    else{
      let currentValue=parseInt(hero.style.marginTop.replace('px',''));
      hero.style.marginTop=currentValue-h+'px';
    }
    console.log('Up');
  }

  if(e.keyCode===40){
    if(!hero.style.marginTop){
      hero.style.marginTop=h+'px';
    }
    else{
      let currentValue=parseInt(hero.style.marginTop.replace('px',''));
      hero.style.marginTop=currentValue+h+'px';
    }
    console.log('Down');
  }

  if(e.ctrlKey){
    squat();
    console.log('CTRL');
  }
 };
