const textarea = document.querySelector('#textarea');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const input3 = document.querySelector('#input3');

setInterval(function () {
  textarea.value = input1.value + ',' + input2.value + ',' + input3.value;
}, 100);