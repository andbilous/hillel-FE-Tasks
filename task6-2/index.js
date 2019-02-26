function doFunction(num1, num2, func) {
  return func(num1, num2);
}

function sum(num1, num2) {
  return num1 + num2;
}

function div(num1, num2) {
  return num1 / num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

function power(num1, num2) {
  return Math.pow(num1, num2);
}
document.write('Result is : ' + doFunction(2, 3, power));