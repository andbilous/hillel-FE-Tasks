const h = 10;
const step = 30 + "px";
let hero = document.querySelector("#hero");

function moveElement(direction) {
  switch (direction) {
    case "left":
      if (!hero.style.marginLeft) {
        hero.style.marginLeft = h + "px";
      } else {
        let currentValue = parseInt(hero.style.marginLeft.replace("px", ""));
        hero.style.marginLeft = h - currentValue + "px";
      }
      break;
    case "right":
      if (!hero.style.marginLeft) {
        hero.style.marginLeft = h + "px";
      } else {
        let currentValue = parseInt(hero.style.marginLeft.replace("px", ""));
        hero.style.marginLeft = h + currentValue + "px";
      }
      break;
    case "up":
      if (!hero.style.marginTop) {
        hero.style.marginTop = h + "px";
      } else {
        let currentValue = parseInt(hero.style.marginTop.replace("px", ""));
        hero.style.marginTop = currentValue - h + "px";
      }
      break;
    case "down":
      if (!hero.style.marginTop) {
        hero.style.marginTop = h + "px";
      } else {
        let currentValue = parseInt(hero.style.marginTop.replace("px", ""));
        hero.style.marginTop = currentValue + h + "px";
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
      hero.style.animationName = "jump";
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
