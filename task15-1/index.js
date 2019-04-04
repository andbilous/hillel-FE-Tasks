let targetList = document.querySelector('.list');
targetList.style.display = 'none';

let actions = [{
    title: 'action1',
    action: () => {
      alert('action1');
    }
  },
  {
    title: 'action2',
    action: () => {
      alert('action2');
    }
  },
  {
    title: 'action3',
    action: () => {
      alert('action3');
    }
  }
]

for (let i = 0; i < actions.length; i++) {
  let li = document.createElement('li');
  li.addEventListener('click', actions[i].action);
  li.innerHTML = actions[i].title;
  targetList.appendChild(li);
}


window.oncontextmenu = e => {
  e.preventDefault();
  targetList.style.top = e.clientY + 'px';
  targetList.style.left = e.clientX + 'px';
  targetList.style.display = 'block';
}