const h = 10;
const step = 30 + "px";
let hero = document.querySelector("#hero");
let actionContextMenu=document.querySelector('#actions');
actionContextMenu.style.display='none';


let actions={
  jump:()=>{hero.style.animationName = "jump";},
  remove:()=>{},
  changeColor:()=>{},
}
function moveElement(direction) {
  switch (direction) {
    case "right":
      if (!hero.style.left) {
        hero.style.left = h + "px";
      } else {
        let currentValue = parseInt(hero.style.left.replace("px", ""));
        hero.style.left = h + currentValue + "px";
      }
      break;
    case "left":
      if (!hero.style.left) {
        hero.style.left = h - "px";
      } else {
        let currentValue = parseInt(hero.style.left.replace("px", ""));
        hero.style.left =  currentValue - h + "px";
      }
      break;
    case "up":
      if (!hero.style.top) {
        hero.style.top = h + "px";
      } else {
        let currentValue = parseInt(hero.style.top.replace("px", ""));
        hero.style.top = currentValue - h + "px";
      }
      break;
    case "down":
      if (!hero.style.top) {
        hero.style.top = h + "px";
      } else {
        let currentValue = parseInt(hero.style.top.replace("px", ""));
        hero.style.top = currentValue + h + "px";
      }
      break;
  }
}
function squat() {
  let initialWidth = hero.clientWidth;
  let initialHeight = hero.clientHeight;
  heroWidth = hero.offsetWidth * 1.15;
  heroHeight = hero.offsetHeight * 0.4;
  hero.style.height = heroHeight + "px";
  hero.style.width = heroWidth + "px";
  window.onkeyup = e => {
    hero.style.height = initialHeight + "px";
    hero.style.width = initialWidth + "px";
  };
}

window.onkeydown = e => {
  switch (e.keyCode) {
    case 32:
      actions.jump();
      break;
    case 39:
      moveElement("right");
      break;
    case 37:
      moveElement("left");
      break;
    case 38:
      moveElement("up");
      break;
    case 40:
      moveElement("down");
      break;
    case 17:
      squat();
      break;
  }
};
window.oncontextmenu=e=>{
  if(e.target===hero){
    console.log(e.target.style);
    actionContextMenu.style.display='block';
    actionContextMenu.style.left=hero.style.left;
    actionContextMenu.style.marginTop=hero.style.marginTop;
  }
    e.preventDefault();

}
