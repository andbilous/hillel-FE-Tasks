function getCenterElements() {
  var res = [];
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i].length % 2 !== 0) {
      res.push(arguments[i][Math.floor(arguments[i].length / 2)]);
    } else {
      res.push(arguments[i][arguments[i].length / 2 - 1]);
      res.push(arguments[i][arguments[i].length / 2]);
    }
  }
  return res;
}
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [1, 2, 3, 4, 5, 6];
var arr3 = [2, 54, 33, 464, 22, 12, 36,26];
document.write('Here are arrays: ' + arr1 + ' and ' + arr2 + ' and ' + arr3 + '<br>');
document.write('Here are central numbers : ' + getCenterElements(arr1, arr2, arr3));