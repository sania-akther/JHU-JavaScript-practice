(function (window) {
    var saraGreeter = {};
    saraGreeter.name = "sara";
    saraGreeter.sayHi = function () {
    console.log("hi " + saraGreeter.name);
    }
    
    window.saraGreeter = saraGreeter;
    
}) (window);




