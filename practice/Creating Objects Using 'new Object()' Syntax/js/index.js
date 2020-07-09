// ********** Object creation
var company = new Object();
company.name = "facebook";
company.ceo = new Object();
company.ceo.firstname = "mark";
company.ceo.favcolor = "blue";

console.log(company);
console.log("company ceo name is: " + company.ceo.firstname);


console.log(company["name"]);

var stockPropName = "stock of company";
company[stockPropName] = 110;

console.log("stock price is: " + company[stockPropName]);


// better way: Object literal
var facebook = {
  name: "facebook",
  ceo: {
  firstname: "mark",
  favcolor: "blue"
  },
  "stock of company": 110
};

console.log(facebook.ceo.favcolor);





