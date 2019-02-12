document.write("**************<br>");
var basis = prompt("Введите основу цилиндра?\n", "");
var radius = prompt("Введите радиус цилиндра?\n", "");
var height = prompt("Введите высоту цилиндра?\n", "");
var pNum = Math.PI;
var result = pNum * Math.pow(radius, 2) * height;
document.write(
  "Обьем цилиндра с площадью основы " +
    basis +
    " радиусом " +
    radius +
    " и высотой " +
    height +
    " равен:<br>"
);
document.write("--------------------<br>");
document.write("V =" + result.toFixed(2) + "<br>");
document.write("--------------------<br>");
document.write("end.");
