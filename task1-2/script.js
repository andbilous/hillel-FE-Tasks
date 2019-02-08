var a = parseInt(prompt("Введите переменную а", ""), 10);
document.write("Var " + a + isVarEven(a) + "<br>");
var b = parseInt(prompt("Введите переменную b", ""), 10);
document.write("Var " + b + isVarEven(b) + "<br>");
var c = parseInt(prompt("Введите переменную c", ""), 10);
document.write("Var " + c + isVarEven(c) + "<br>");
var res = a + b + c;
document.write("Result :" + res);
function isVarEven(param) {
  if (param % 2 === 0) {
    return " is Even";
  } else return " is Odd, the oddement is " + (param % 2);
}
