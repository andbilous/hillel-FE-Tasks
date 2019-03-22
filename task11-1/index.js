 function SuperMath() {
   this.check = function (obj) {
     var znaki = ['+', '-', '*', '/'];
     while (isNaN(obj.x) && isNaN(obj.y)) {
       console.log('Numbers are Nan');
       obj.x = prompt('Please enter X', 0);
       obj.y = prompt('Please enter Y', 0);
     }
     while (!znaki.includes(obj.z)) {
       console.log('Incorrect symbol');
       obj.z = prompt('Please enter znak', '+');
     }
     var answer = prompt('Do you want to calc ? (y/n)', '');
     if (answer.toLowerCase() === 'y') {
       document.write('Result is : ' + (this.__proto__.calc(obj)));
     }
     if (answer.toLowerCase() === 'n') {
       this.check(this.__proto__.input());
     }
   }
 }
 SuperMath.prototype.input = function () {
   var x = prompt('Please enter X', 0);
   var y = prompt('Please enter Y', 0);
   var z = prompt('Please enter znak', '+');
   return {
     x,
     y,
     z
   }
 }
 SuperMath.prototype.calc = function (obj) {
   var x = parseInt(obj.x);
   var y = parseInt(obj.y);
   switch (obj.z) {
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
 var superMath = new SuperMath();
 var data = superMath.input();
 superMath.check(data);