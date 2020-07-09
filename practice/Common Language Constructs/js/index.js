  // ****************String concatination
  var String = "hello";
  String += " world";
  // String = String + " world";
  console.log(String + "!");

// ****** regular math operators: + - / *
console.log((100 + 200) / 3);
console.log(undefined / 7);
console.log("sania" / 7);

function test1 (a) {
  console.log(a / 6);
}
test1();

// ***********Equality
var x = 4, y = 4;
if (x == y) {
  console.log("x=4 is equal to y=4");
}

x = "4";
if (x == y) {
  console.log("x='4' is equal to y=4");
}

// ************* Strict equality
if (x === y) {
  console.log("strict: x = '4' is equal to y = 4");
}
else {
  console.log("strict: x = '4' is not equal to y = 4");
}

// ************ If statement ( all false )

if ( false || null || undefined || "" || 0 || NaN) {
  console.log("this line won't ever execute");
}
else {
  console.log("all false");
}

// ************ If statement ( all true )

if (true && "hello" && 1 && -1 && "false") {
  console.log("all true");
}

// ************ Best practice for {} style
// put curly brace on the same line
// it's not just a style
function a()
{
  return
  {
    name: "sania"
  };
}

function b() {
  return {
    name: "sania"
  };
}

 console.log(a());
 console.log(b());

// *********for loop
var sum = 0;
for (var i = 0; i < 100; i++) {
  sum = sum + i;
}
console.log("sum of 0 through 11 is: " + sum);


