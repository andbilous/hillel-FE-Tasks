function assignObjects(obj1, obj2) {
  return Object.assign(obj1, obj2);
}

function assignObjects(obj1, obj2, flag) {
  var obj1Clone = Object.assign({}, obj1);
  if (flag) {
    return Object.assign(obj1, obj2, obj1Clone);
  } else
    return Object.assign(obj1, obj2);
}

console.log(assignObjects({
  x: 110,
  y: 20,
  m: 40
}, {
  x: 10,
  s: 30
}, false));

console.log(assignObjects({
  x: 110,
  y: 20,
  m: 40
}, {
  x: 10,
  s: 30
}, true));