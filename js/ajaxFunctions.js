function getRequest(requestName, url, requestData, responseType, contentType) {
    if(requestData === "") {
        var sendMethod = "GET";
        requestData = "null";
    }else {
        var sendMethod = "POST";
    }
    var rName = requestName+"Request";     
    rName = createRequest(); 
    if (rName == null) {
        alert("Unable to create request"+ rName+".");
    }else {
        escape(url);
        rName.onreadystatechange = function(){
            if (rName.readyState == 4) {
                if (rName.status == 200) {
                    if (responseType === "text") {
                        var resultString = rName.responseText;
                        eval(requestName+"Result")(resultString);
                    }
                    if (responseType === "xml") {
                        var xmlObj = rName.responseXML;
                        eval(requestName+"Result")(xmlObj);
                    }
                }
            }
        }
    }
    rName.open(sendMethod, url, true);
    rName.setRequestHeader("Content-Type", contentType);
    rName.setRequestHeader("Cache-Control", "no-cache");
    rName.send(requestData);
}

function createRequest() {
    try {
        request = new XMLHttpRequest();
    } catch (tryMS) {
            try {
            request = new ActiveXObject("Msxml2.XMLHTTP");
        }catch (otherMS) {
                try {
                        request = new ActiveXObject("Microsoft.XMLHTTP");
                }catch (failed) {
                            request = null;
                }
        }
    }
    return request;
}

/** This function must return false so the form does not submit.This uses ajax, and the
 *  callback function is sendDataToElqResult(). The php file will be called ajaxCall.php
 * @uses getRequest
*/
function sendDataToElq() {
    var form = document.forms['EOYCampaign'];
    var postData = 'email='+form.elements['C_EmailAddress'].value;
    postData += '&firstName='+form.elements['C_First'].value;
    postData += '&lastName='+form.elements['C_Last'].value;
    getRequest('sendDataToElq', 'http://209.177.156.227/eoy-campaign/PHP/ajaxCall.php', postData, 'text', 'application/x-www-form-urlencoded');
    return false;
}

function sendDataToElqResult(success) {
    if (success == '') {
        //Hide form and display thank you div below the form
        document.forms['EOYCampaign'].className = 'hide';
        document.getElementById('thankYouDiv').className = 'm-thanks';
    } else {
        alert("Error submitting form. Please try again");
    }
}
        