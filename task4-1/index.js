var a = [1, 2, 3, 4, 5, 6];
for (var i = 0; i < a.length; i = i + 2) {
  var temp;
  if (i === a.length - 1) {
    continue;
  } else {
    temp = a[i];
    a[i] = a[i + 1];
    a[i + 1] = temp;
  }
}
document.write(a);
