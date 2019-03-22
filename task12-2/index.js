const block1 = document.querySelector('#block1');
const block2 = document.querySelector('#block2');
const block3 = document.querySelector('#block3');
block1.style.backgroundColor = 'red';
block2.style.backgroundColor = 'green';
block3.style.backgroundColor = 'blue';

setInterval(() => {
  block1.style.top = Math.random() * (800 - 400) + 400 + 'px';
  block2.style.left = Math.random() * (800 - 400) + 400 + 'px';
  block3.style.left = Math.random() * (800 - 400) + 400 + 'px';;
  block1.style.backgroundColor = getRandColor();
  block2.style.backgroundColor = getRandColor();
  block3.style.backgroundColor = getRandColor();
}, 2000);

getRandColor = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}