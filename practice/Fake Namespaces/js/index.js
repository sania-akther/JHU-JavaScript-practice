// *************Fake namespece
(function (window) {
  var saniaGreeter = {};
  saniaGreeter.name = "sania";
  saniaGreeter.sayHello = function () {
  console.log("hello " + saniaGreeter.name);
  }
  window.saniaGreeter = saniaGreeter;
}) (window);






