import {goods} from './goods.js';

const itemsList = document.querySelector('#goods');
const priceSortBtn = document.querySelector('#price-sort');
const nameSortBtn = document.querySelector('#name-sort');

let items = goods.slice();
fillList(items);

priceSortBtn.addEventListener('click', () => {
    items.sort((a, b) => (a.price > b.price) ? 1 : -1);
    fillList(items);
});
nameSortBtn.addEventListener('click', () => {
    items.sort((a, b) => (a.name > b.name) ? 1 : -1);
    fillList(items);
});


function fillList(goods) {
    itemsList.innerHTML = '';
    goods.forEach((item) => {
        let listItem = document.createElement('li');
        listItem.innerHTML = 'Name: ' + item.name + ' Price :' + item.price;
        itemsList.appendChild(listItem);
    })
}