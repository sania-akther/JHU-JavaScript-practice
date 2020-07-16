// *********Arrays
var array = new Array();
array[0] = "sania";
array[1] = 3;
array[2] = function (name) {
  console.log("hello " + name);
};
array[3] = {course: "Html, Css & Js"};

console.log(array);
array[2](array[0]);
console.log(array[3].course);

// ********* Short hand array creation
var names = ["sania", "akther", "sara"];
console.log(names);

for (var i = 0; i < names.length; i++) {
  console.log("hello " + names[i]);
}


names[51] = "mira";
names[100] = "tara";
for (var i = 0; i < names.length; i++) {
  console.log("hello " + names[i]);
}

// ******next part
var names2 = ["sania", "akther", "sara"];

var myObj = {
  name: "sania",
  course: "Html/Css/Js",
  platform: "coursera"
};
for (var prop in myObj) {
  console.log(prop + ": " + myObj[prop]);
}

for (var name in names2) {
  console.log("hello " + names2[name]);
}

// *******practic

var counter = 0;
var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
for (var i = 0; i < myArray.length; i++) {
  counter++;
}
console.log(myArray);
console.log(counter);






