var A = [23, 11, 13, 550, 100, 53, 31, 23, 7, 246, 436];
var B = [];
var min, max;
min = max = A[0];

for (var i = 0; i < A.length; i++) {
  if ((A[i]) <= min) {
    min = A[i];
  }
  if ((A[i]) >= max) {
    max = A[i];
  }
}
for (var i = 0; i < A.length; i++){
  if(A[i]>min && A[i]<max){
    B[B.length]=A[i];
  }
}
document.write('Initial array is :' + A + '<br>');
document.write('Array B is: ' + B + '<br>');
document.write("end.");