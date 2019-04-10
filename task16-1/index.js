let items = document.querySelectorAll('.cinema__item');
let resPrice=0;
console.log('Orders :');
items.forEach((item)=>{
  if(item.children[0].innerText &&item.children[1].innerText){
    console.log(item.children[0].innerText);
    resPrice+=parseInt(item.children[1].innerText);
  }
})
console.log('Result price :'+resPrice);
