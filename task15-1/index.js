let list =['A','B','C'];
let targetList=document.querySelector('.list');

for(let i=0;i<list.length;i++){
  let li=document.createElement('li');
  li.setAttribute('data-action',()=>{console.log('Action'+i);})
  li.setAttribute('data-title','Item number'+i)
  li.innerHTML=list[i];
  targetList.appendChild(li);
}

targetList.addEventListener('contextmenu',(e)=>{
  console.log('RCLICK');
  e.preventDefault();
});

window.addEventListener('',(e)=>{

});

window.addEventListener('click',(e)=>{
  console.log(e.target);
});