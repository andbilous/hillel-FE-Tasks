var A = [23, 11, 13, 550, 100, 53, 31, 23, 7, 246, 436];
var B = [];
var min, max;
min = max = A[0];

function isPrime(number) {
  for(var i =2;i<number;i++){
    if(number%i !==0){
      return true;
    }else return false;
  }
  if(number/number === 0 && number/1===0){
    return true;
  }else return false;
}
for (var i = 0; i < A.length; i++) {
  if (isPrime(A[i])) {
    B[B.length] = A[i];
  }
  if ((A[i]) <= min) {
    min = A[i];
  }
  if ((A[i]) >= max) {
    max = A[i];
  }
}
document.write('Initial array is :' + A + '<br>');
document.write('Prime numbers are: ' + B + '<br>');
document.write('Min number is : ' + min + '<br>Max number is : ' + max);
document.write("<br>end.");