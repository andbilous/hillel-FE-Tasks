var arr = [];

function fillArray(input) {
  if (!Array.isArray(input)) {
    return false;
  }
  for (var i = 0; i < 10; i++) {
    input[i] = Math.floor(Math.random() * 10);
  }
  return input;
}

function compareArrays(arr1, arr2) {
  var sum1, sum2;
  sum1 = sum2 = 0;
  for (var i = 0; i < arr1.length; i++) {
    if (!typeof arr1[i] == 'number') {
      continue;
    }
    sum1 += arr1[i];
  }
  for (var k = 0; k < arr2.length; k++) {
    if (!typeof arr2[i] == 'number') {
      continue;
    }
    sum2 += arr2[i];
  }
  if (sum1 >= sum2) {
    return arr1;
  } else return arr2;
}
fillArray(arr);
document.write('Filled array: <br>');
document.write(arr);
var arr1 = [1, 2, 3, 36, '2', 5, 8, 22, 53];
var arr2 = [11, 25, 33, '1', false, 52, 85, 222, 543];
document.write('<br>Result: ');
document.write('<br>' + compareArrays(arr1, arr2));