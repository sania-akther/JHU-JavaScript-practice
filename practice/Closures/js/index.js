// *************Closures
function makeMultiplier (multiplier) {
  function b() {
    console.log("multiplier is: " + multiplier);
  }
  b();
  return (
    function (x) {
     return multiplier * x; 
    }
  );
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));


