var A = [23, 11, 13, 550, 100, 53, 31, 23, 7, 246, 436];
document.write('Initial array is : ' + A + '<br>');
var min, max, maxIndex, minIndex;
maxIndex = minIndex = 0;
min = max = A[0];

for (var i = 0; i < A.length; i++) {
  if ((A[i]) <= min) {
    min = A[i];
    minIndex = i;
  }
  if ((A[i]) >= max) {
    max = A[i];
    maxIndex = i;
  }
}
A[minIndex] = max;
A[maxIndex] = min;
document.write('Transformed Array: ' + A + '<br>');
document.write("end.");