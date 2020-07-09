var message = "in global";
console.log("global: massage =" + message);

var a = function () {
var message = "inside a";
console.log("a: message =" + message);
b();
};

var b =function () {
console.log("b: message =" + message);
};
a();
        //   my practice
var name = "sania";
var favfood = "pasta";
var favplace = "switzerland";
console.log("first: name =" + name);

var a = function () {
console.log("my all time: favfood =" +favfood);
b();
};

var favcolor = function () {
var name = "blue";
console.log("favcolor: name =" + name);

var lastname = function () {
    console.log("lastname: name =" + name);
};


lastname();
a();
};

var b = function () {
    console.log("i really want to go there my: favplace =" + favplace + "!");
};
favcolor();



