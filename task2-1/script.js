document.write("**************<h1>Числа Фибоначчи</h1><br>");
var number = prompt("Введите любое целое число\n", "");
var result =0;
for (var i=0;i<number;i++){
document.write(fibonacci(i)+" ");
}
function fibonacci(n) {
  if (n < 2){
    return n;
  }
  return fibonacci(n - 1) + fibonacci (n - 2);
}
document.write("<br> end.")


