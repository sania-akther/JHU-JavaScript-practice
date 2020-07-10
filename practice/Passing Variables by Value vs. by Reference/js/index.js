// copy by reference vs by value
var a = 3;
var b = a;
console.log("a: " + a);
console.log("b: " + b);
b = 5;
console.log("after b update:");
console.log("a: " + a);
console.log("b: " + b);


var a = { x: 6 };
var b = a;
console.log(a);
console.log(b);

b.x = 9;
console.log("after b.x update:");
console.log(a);
console.log(b);

// pass by reference vs by value

function changePrimitive(primValue) {
  console.log("in changePrimitive...");
  console.log("before:");
  console.log(primValue);

  primValue = 5;
  console.log("after:");
  console.log(primValue);
}

var value = 7;
changePrimitive(value);  //primValue = value
console.log('after changePrimitive, orig value:');
console.log(value);






function changeObject(objValue) {
  console.log("in changeObject...");
  console.log("before:");
  console.log(objValue);

  objValue.x = 5;
  console.log("after:");
  console.log(objValue);
}

value = { x: 7 };
changeObject(value);  //objValue = value
console.log('after changeObject, orig value:');
console.log(value);