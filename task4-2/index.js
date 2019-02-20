var a = [11, 2, 52, 21, 21, 30, 16, 57, 57, 251, 251, 263, 332, 255];
a = a.sort(function (a, b) {
  return a - b
});
var diff = a[a.length - 1] - a[0];
document.write('Difference between min and max : ' + diff + '<br>');
var rangeFrom = parseInt(prompt('RangeFrom', ''));
var rangeTo = parseInt(prompt('RangeTo', ''));
var sum = 0;
for (var i = 0; i < a.length; i++) {
  sum += a[i];
}
var avg = Math.round(sum / (a.length));
var resValues = [];
var resIndexes = [];
for (var i = 0; i < a.length; i++) {
  if (a[i] > avg) {
    resValues.push(a[i]);
  }
  if (a[i] > rangeFrom && a[i] < rangeTo) {
    resIndexes.push(i);
  }
}

document.write('Values are higher than average :' + resValues + '<br>');
document.write('Indexes with value in range : ' + resIndexes + '<br>');
for (var i = 0; i < resValues.length; i++) {
  var currentValue = resValues[i];
  for (var k = i + 1; k < resValues.length; k++) {
    if (resValues[k] === currentValue) {
      console.log(resValues[k]);
      resValues.splice(k, 1);
    }
  }
}
document.write('Array without duplicates :' + resValues);