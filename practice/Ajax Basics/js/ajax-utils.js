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
    function (requestURL, responseHandler) {
    var request = getRequestObject();
    request.onreadystatechange = function () {
    handleResponse(request, responseHandler);
     };
    request.open("GET", requestURL, true);
    request.send(null); //for post only      
      };

//* only calls user provided responseHandler
// *function if response is ready
// *and not an error */
function handleResponse(request, responseHandler) {
    if ((request.readyState == 4) && 
    (request.status == 200)) {
        responseHandler(request);
    }
    }

// Expose Utility to the global object
global.$ajaxUtils = ajaxUtils;

})(window);

