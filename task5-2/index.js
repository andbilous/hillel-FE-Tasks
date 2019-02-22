function doMath(x, znak, y) {
  var arihmregex = /[+*\/-]/g;
  if (!arihmregex.test(znak) && Number.isNaN(x) && Number.isNaN(y) ) {
    return false;
  } else {
    switch (znak) {
      case '+':
        return x + y;
        break;
      case '-':
        return x - y;
        break;
      case '*':
        return x * y;
        break;
      case '/':
        return x / y;
        break;
    }
  }
}
document.write(doMath(1, '+', 2) + '<br>');
document.write(doMath(1, '-', 2) + '<br>');
document.write(doMath(1, '*', 2) + '<br>');
document.write(doMath(1, '/', 2) + '<br>');