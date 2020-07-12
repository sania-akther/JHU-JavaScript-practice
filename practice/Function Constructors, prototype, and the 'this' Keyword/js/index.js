

function test() {
  console.log(this);
  this.myName = "sania";
}
test();
console.log(window.myName);

//*************** */ Function constructors
// function Circle (radius) {
//   this.radius = radius;

//   this.getArea = 
//   function () {
//     return Math.PI * Math.pow(this.radius, 2);
//   };
// }

// var myCircle = new Circle(10);
// console.log(myCircle.getArea());

// prototype

function Circle (radius) {
  this.radius = radius;
}
Circle.prototype.getArea = 
function () {
  return Math.PI * Math.pow(this.radius, 2);
};
var myCircle = new Circle(10);
console.log(myCircle);

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);



//********* Object Literals and the 'this' Keyword
var literalCircle = {
  radius: 10,

  getArea: function () {
    var self = this;
    console.log(this);

    var increaseRadius = function () {
      self.radius =20;
    };
    increaseRadius();
    console.log(this.radius);
    return Math.PI * Math.pow(this.radius, 2);
  }
};

console.log(literalCircle.getArea());



// ****************practice
function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " likes barking! Bark!");
}

var max = new Dog("Max", "Buddy");
max.bark();







