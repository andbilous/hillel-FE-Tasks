var factorialSum = 0;
document.write("Суммы факториалов<br>");
var a = parseInt(prompt("Введите число a\n", ""));
var b = parseInt(prompt("Введите число b\n", ""));
var h = parseInt(prompt("Введите интервал?\n", ""));
if (a > b) {
    var temp = a;
    a = b;
    b = temp;
}

function factorial(number) {
    var result = 1;
    for (var i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;
}
for (var i = a; i <= b; i = i + h) {
    factorialSum += factorial(i);
    document.write(factorialSum + '<br>');
}
document.write("end.");