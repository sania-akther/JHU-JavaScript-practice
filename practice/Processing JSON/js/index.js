// *********Event handling
document.addEventListener("DOMContentLoaded",
function (event) {
  
  //unobstrusive event binding
  document.querySelector("button").addEventListener
           ("click", function () {

   //call server to get the name
   $ajaxUtils.sendGetRequest("/data/name.json",
         function (res) {
           var message = res.firstName + "" + res.lastName
    if (res.likesChineseFood) {
message += " Likes chinese food";
    }       
else{
  message += " doesn't likes chinese food"
}
message += " and uses ";
message += res.numberOfDisplays + 1;
message += " displays of coding.";


  document.querySelector("#content").innerHTML = 
           "<h2> " + message + "!"; 
         });

        });
      }
);



