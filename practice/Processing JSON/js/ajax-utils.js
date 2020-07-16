(function (global) {
    //set up a namespeace for our utility
    var ajaxUtils = {};

    // Returns an HTTP request object
    function getRequestObject () {
        if (window.XMLHttpRequest) {
        return (new XMLHttpRequest());
        }
        else if (window.ActiveXObject) {
            //for very old IE browsers (optional)
return (new ActiveXObject("Microsoft.XMLHTTP"));
        }
        else {
        global.alert("Ajax is not supported");
            return(null);
        }
    }

//make an Ajax GET request to 'requestURL'
ajaxUtils.sendGetRequest = 
    function (requestURL, responseHandler, isJsonResponse) {
    var request = getRequestObject();
    request.onreadystatechange = function () {
    handleResponse(request, responseHandler, isJsonResponse);
     };
    request.open("GET", requestURL, true);
    request.send(null); //for post only      
      };

//* only calls user provided responseHandler
// *function if response is ready
// *and not an error */
function handleResponse(request, responseHandler, isJsonResponse) {
    if ((request.readyState == 4) && 
    (request.status == 200)) {

        //default to isJsonResponse = true
        if (isJsonResponse == undefined){
            isJsonResponse = true;
        }
        if (isJsonResponse) {
            responseHandler(JSON.parse(request.responseText))
        }
        else{
            responseHandler(request.responseText);

        }
      }
    }

// Expose Utility to the global object
global.$ajaxUtils = ajaxUtils;

})(window);

