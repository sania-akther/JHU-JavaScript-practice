// functions are first-class data
// Functions are abjects 

function multiply(x, y) {
  return x * y;
}
console.log(multiply(3, 4));
multiply.version = "v.1.0.0"
console.log(multiply.version);

// Function Factory
function makeMultiplier(multiplier) {
  var myFunc = function (x) {
    return multiplier * x;
  };
  return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(5);
console.log(doubleAll(300));

//  Passing function as arguments
function doOperationOn(x, operation) {
  return operation(x);
}

var result = doOperationOn(5, multiplyBy3);
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result);