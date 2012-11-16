/*
Iron-Point Marketing Form Validation Script
Copyright 2012, IPM
All statements check for the empty set first, then for the valid format for a given
data "type"
*/

function validate(formname) {
    var chars;
    var err_arr = {};
    var focus = 0;
    var index;
    var inputs = document.forms[formname].elements;
    var report = document.forms[formname].getAttribute('data-reporting') ? document.forms[formname].getAttribute('data-reporting') : "all";
    var special;
    for (var i=0;i<inputs.length;i++) {
        unwarn(inputs[i]);
    }
    for (index =0;index<inputs.length;index++) {

        if (inputs[index].type == "text" || inputs[index].type == "email" || inputs[index].type == "tel" || inputs[index].type == "url") {
            //check for required fields
            if (inputs[index].getAttribute("data-required") == "true") {
                if (inputs[index].value === "") {
                    if (inputs[index].getAttribute("data-error") != null) {
                        err_arr[inputs[index].name] = inputs[index].getAttribute("data-error");
                    } else {
                        err_arr[inputs[index].name] = "This field is required";
                    }

                //check for proper email format
                } else if (inputs[index].getAttribute("data-email") == "true") {
                    if (validateEmail(inputs[index])) {
                        if (inputs[index].getAttribute("data-error")) {
                            err_arr[inputs[index].name] = inputs[index].getAttribute("data-error");
                        } else {
                            err_arr[inputs[index].name] = validateEmail(inputs[index]);
                        }
                    }

                //Check for properly formatted phone numbers
                } else if (inputs[index].getAttribute("data-phone") !== null && inputs[index].getAttribute("data-phone") !== "") {
                    var phone = inputs[index].getAttribute("data-phone");
                    if (validatePhone(inputs[index], phone)) {
                        if (inputs[index].getAttribute("data-error")) {
                            err_arr[inputs[index].name] = inputs[index].getAttribute("data-error");
                        } else {
                            err_arr[inputs[index].name] = validatePhone(inputs[index], phone);
                        }
                    }

                //Check for alpha characters only
                } else if (inputs[index].getAttribute("data-alpha") == "true") {
                    if (validateAlpha(inputs[index])) {
                        if (inputs[index].getAttribute("data-error")) {
                            err_arr[inputs[index].name] = inputs[index].getAttribute("data-error");
                        } else {
                            err_arr[inputs[index].name] = validateAlpha(inputs[index]);
                        }
                    }

                //Check for numeric characters only
                } else if (inputs[index].getAttribute("data-numeric") == "true") {
                    if (validateNumeric(inputs[index])) {
                        if (inputs[index].getAttribute("data-error")) {
                            err_arr[inputs[index].name] = inputs[index].getAttribute("data-error");
                        } else {
                            err_arr[inputs[index].name] = validateNumeric(inputs[index]);
                        }
                    }

                //Check for properly formatted url
                } else if (inputs[index].getAttribute("data-url") == "true") {
                    if (validateUrl(inputs[index])) {
                        if (inputs[index].getAttribute("data-error")) {
                            err_arr[inputs[index].name] = inputs[index].getAttribute("data-error");
                        } else {
                            err_arr[inputs[index].name] = validateUrl(inputs[index]);
                        }
                    }

                //Check for Alpha and Numeric values only
                } else if (inputs[index].getAttribute("data-alphaNumeric") == "true") {
                    if (validateAlphaNumeric(inputs[index])) {
                        if (inputs[index].getAttribute("data-error")) {
                            err_arr[inputs[index].name] = inputs[index].getAttribute("data-error");
                        } else {
                            err_arr[inputs[index].name] = validateAlphaNumeric(inputs[index]);
                        }
                    }

                //Check for special characters allowed
                } else if (inputs[index].getAttribute("data-special") !== "" && inputs[index].getAttribute("data-special") !== null) {
                    chars = inputs[index].getAttribute("data-special");
                    special = createRegEx(chars);
                    if (validateSpecial(inputs[index],special,chars)) {
                        if (inputs[index].getAttribute("data-error")) {
                            err_arr[inputs[index].name] = inputs[index].getAttribute("data-error");
                        } else {
                            err_arr[inputs[index].name] = validateSpecial(inputs[index],special,chars);
                        }
                    }
                }

            //check for proper email format
            } else if (inputs[index].getAttribute("data-email") == "true") {
                if (inputs[index].value !== "") {
                    if (validateEmail(inputs[index])) {
                        if (inputs[index].getAttribute("data-error")) {
                            err_arr[inputs[index].name] = inputs[index].getAttribute("data-error");
                        } else {
                            err_arr[inputs[index].name] = validateEmail(inputs[index]);
                        }
                    }
                }

            //Check for properly formatted phone numbers
            } else if (inputs[index].getAttribute("data-phone") !== null && inputs[index].getAttribute("data-phone") !== "") {
                if (inputs[index].value !== "") {
                    var phone = inputs[index].getAttribute("data-phone");
                    if (validatePhone(inputs[index], phone)) {
                        if (inputs[index].getAttribute("data-error")) {
                            err_arr[inputs[index].name] = inputs[index].getAttribute("data-error");
                        } else {
                            err_arr[inputs[index].name] = validatePhone(inputs[index], phone);
                        }
                    }
                }

            //Check for alpha characters only
            } else if (inputs[index].getAttribute("data-alpha") =="true") {
                if (inputs[index].value !== "") {
                    if (validateAlpha(inputs[index])) {
                        if (inputs[index].getAttribute("data-error")) {
                            err_arr[inputs[index].name] = inputs[index].getAttribute("data-error");
                        } else {
                            err_arr[inputs[index].name] = validateAlpha(inputs[index]);
                        }
                    }
                }

            //Check for numeric characters only
            } else if (inputs[index].getAttribute("data-numeric") =="true") {
                if (inputs[index].value !== "") {
                    if (validateNumeric(inputs[index])) {
                        if (inputs[index].getAttribute("data-error")) {
                            err_arr[inputs[index].name] = inputs[index].getAttribute("data-error");
                        } else {
                            err_arr[inputs[index].name] = validateNumeric(inputs[index]);
                        }
                    }
                }

            //Check for properly formatted url
            } else if (inputs[index].getAttribute("data-url") == "true") {
                if (inputs[index].value !== "") {
                    if (validateUrl(inputs[index])) {
                        if (inputs[index].getAttribute("data-error")) {
                            err_arr[inputs[index].name] = inputs[index].getAttribute("data-error");
                        } else {
                            err_arr[inputs[index].name] = validateUrl(inputs[index]);
                        }
                    }
                }

            //Check for Alpha and Numeric values only
            } else if (inputs[index].getAttribute("data-alphaNumeric") == "true") {
                if (inputs[index].value !== "") {
                    if (validateAlphaNumeric(inputs[index])) {
                        if (inputs[index].getAttribute("data-error")) {
                            err_arr[inputs[index].name] = inputs[index].getAttribute("data-error");
                        } else {
                            err_arr[inputs[index].name] = validateAlphaNumeric(inputs[index]);
                        }
                    }
                }

            //Check for special characters allowed
            } else if (inputs[index].getAttribute("data-special") !== "" && inputs[index].getAttribute("data-special") !== null) {
                if (inputs[index].value !== "") {
                    chars = inputs[index].getAttribute("data-special");
                    special = createRegEx(chars);
                    if (validateSpecial(inputs[index],special,chars)) {
                        if (inputs[index].getAttribute("data-error")) {
                            err_arr[inputs[index].name] = inputs[index].getAttribute("data-error");
                        } else {
                            err_arr[inputs[index].name] = validateSpecial(inputs[index],special,chars);
                        }
                    }
                }
            }

        //Check for required textboxes
        } else if (inputs[index].type == "checkbox") {
            if (inputs[index].getAttribute("data-required") == "true" && inputs[index].checked === false) {
                if (inputs[index].getAttribute("data-error")) {
                        err_arr[inputs[index].name] = inputs[index].getAttribute("data-error");
                    } else {
                        err_arr[inputs[index].name] = "You must check this box to submit this form";
                    }
            }

        //Check for required select drop downs
        } else if (inputs[index].type == "select-one" || inputs[index].type == "select-multiple") {
            if (inputs[index].getAttribute("data-required") == "true" && inputs[index].value === "") {
                if (inputs[index].getAttribute("data-error")) {
                    err_arr[inputs[index].name] = inputs[index].getAttribute("data-error");
                } else {
                    err_arr[inputs[index].name] = "Please make a selection";
                }
            }

        //Check for required textareas
        } else if (inputs[index].type == "textarea") {
            if (inputs[index].getAttribute("data-required") == "true" && inputs[index].value === "") {
                if (inputs[index].getAttribute("data-error")) {
                    err_arr[inputs[index].name] = inputs[index].getAttribute("data-error");
                } else {
                    err_arr[inputs[index].name] = "Please enter text here";
                }
            } else if (inputs[index].getAttribute("data-special") !== "" && inputs[index].getAttribute("data-special") !== null) {
                if (inputs[index].value !== "") {
                    chars = inputs[index].getAttribute("data-special");
                    special = createRegEx(chars);
                    if (validateSpecial(inputs[index],special,chars)) {
                        if (inputs[index].getAttribute("data-error")) {
                            err_arr[inputs[index].name] = inputs[index].getAttribute("data-error");
                        } else {
                            err_arr[inputs[index].name] = validateSpecial(inputs[index],special,chars);
                        }
                    }
                }
            }
        }

}//End for
    //determine if the err_arr object has any error values
    for (var key in err_arr) {
        var exists = (err_arr.hasOwnProperty(key)) ? true : false;
    }

    //if the err_arr object has errors, report them inline
    if (exists) {
        for (var x in err_arr) {

            //focus on first field with an error
            if (focus === 0 && report == "single") {
                warn(inputs[x], err_arr[x]);
                inputs[x].focus();
                focus++;
            } else if (report == "all") {
                warn(inputs[x], err_arr[x]);
                if (focus === 0) {
                    inputs[x].focus();
                    focus++;
                }
            }
        }
        //if errors do not allow the form to submit
        return false;
    } else {
        //if no errors allow the form to submit
        return true;
    }
}// End function validate(formname);

function warn(field, errMessage) {
         var parent = field.parentNode;
         var warning = errMessage;
         if (parent.getElementsByTagName("h5").length === 0) {
            if(parent.tagName.toLowerCase() === 'div') {
                parent = parent.parentNode;
            }
            var h = document.createElement("h5");
            parent.appendChild(h);
            var warningNode = document.createTextNode(warning);
            h.appendChild(warningNode);
        } else {
           var h = parent.getElementsByTagName("h5")[0];
           h.childNodes[0].nodeValue = warning;
       }
} // End function warn (field, errMessage)

function unwarn(field) {
   if (field.getElementsByTagName("h5").length > 0) {
       var h = field.getElementsByTagName("h5")[0];
       field.removeChild(h);
}
} /* End function unwarn (field, errMessage)*/

function validateEmail(email) {
    if (email.value !== "") {
        var regex = /([a-z0-9][-a-z0-9_\+\.]*[a-z0-9])@([a-z0-9][-a-z0-9\.]*[a-z0-9]\.(arpa|root|aero|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|tv|me|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)|([0-9]{1,3}\.{3}[0-9]{1,3}))+$/;
        if (!regex.test(email.value)) {
            var error = "Please enter an email formatted as name@domain.com";
            return error;
        } else {
            return false;
        }
    }
}

function validatePhone(entry, phone) {
    if (entry.value != "") {
        var domestic = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        var international = /^\(?\+([0-9]{2,3})\)?[-.\s ]?([0-9]{2,3})[-.\s ]?([0-9]{3,9})$/;
        if (phone == "domestic" || (entry.value.length == 10 && phone == "both") && entry.value.charAt(0) != "+" || (entry.value.charAt(0) == "(" && entry.value.charAt(9) == "-" && entry.value.length > 10)) {
            if (!domestic.test(entry.value)) {
                var error = "Please enter a phone number formatted as (xxx) xxx-xxxx";
                return error;
            } else {
                entry.value = entry.value.replace(domestic, "($1) $2-$3");
                return false;
            }
        } else if (phone == "international" || phone == "both") {
            if (!international.test(entry.value)) {
                var error = "Please format international phone number as +cc xxx xxxxxxx";
                return error;
            } else {alert("here");
                entry.value = entry.value.replace(international, "+$1 $2 $3");
                return false;
            }
        }
    }
}

function validateAlpha(entry) {
    if (entry.value !== "") {
        var alpha = /[^a-zA-Z]/;
        if(alpha.test(entry.value)){
            var error = "Please enter alphabetical characters only";
            return error;
        } else {
            return false;
        }
    }
}

function validateNumeric(entry) {
    if (entry.value !== "") {
        var numeric = /[^0-9]/;
        if (numeric.test(entry.value)) {
            var error = "Please enter numeric characters only";
            return error;
        } else {
            return false;
        }
    }
}

function validateUrl(entry) {
    if (entry.value !== "") {
        var url = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        if (!url.test(entry.value)) {
            var error = "Please enter a valid url";
            return error;
        } else {
            return false;
        }
    }
}

function validateAlphaNumeric(entry) {
    if (entry.value !== "") {
        var alphaNumeric = /[^a-zA-Z0-9]/;
        if (alphaNumeric.test(entry.value)) {
            var error = "Please enter alpha-numeric characters only";
            return error;
        } else {
            return false;
        }
    }
}

function validateSpecial(entry,special,chars) {
    var re = new RegExp(special,"g");
    if (entry.value !== "") {
        if (re.test(entry.value)) {
            var error = getError(chars);
            return error;
        } else {
            return false;
        }
    }
}

function createRegEx(allowed) {
    var special = "[^";
    for (var i=0;i<allowed.length;i++) {
        if (allowed.charAt(i) == "a") {
            special += "a-zA-Z";
        } else if (allowed.charAt(i) == "n") {
            special += "0-9";
        } else if (allowed.charAt(i) == "s") {
            special += "\\s";
        } else if (allowed.charAt(i) == "?") {
            special += "\\?";
        } else if (allowed.charAt(i) == ",") {
            special += "\\,";
        } else if (allowed.charAt(i) == ".") {
            special += "\\.";
        } else if (allowed.charAt(i) == "<") {
            special += "\\<";
        } else if (allowed.charAt(i) == ">") {
            special += "\\>";
        } else if (allowed.charAt(i) == "/") {
            special += "\\/";
        } else if (allowed.charAt(i) == ";") {
            special += "\\;";
        } else if (allowed.charAt(i) == ":") {
            special += "\\:";
        } else if (allowed.charAt(i) == "[") {
            special += "\\[";
        } else if (allowed.charAt(i) == "]") {
            special += "\\]";
        } else if (allowed.charAt(i) == "{") {
            special += "\\{";
        } else if (allowed.charAt(i) == "}") {
            special += "\\}";
        } else if (allowed.charAt(i) == "|") {
            special += "\\|";
        } else if (allowed.charAt(i) == "`") {
            special += "\\`";
        } else if (allowed.charAt(i) == "~") {
            special += "\\~";
        } else if (allowed.charAt(i) == "!") {
            special += "\\!";
        } else if (allowed.charAt(i) == "@") {
            special += "\\@";
        } else if (allowed.charAt(i) == "#") {
            special += "\\#";
        } else if (allowed.charAt(i) == "$") {
            special += "\\$";
        } else if (allowed.charAt(i) == "%") {
            special += "\\%";
        } else if (allowed.charAt(i) == "^") {
            special += "\\^";
        } else if (allowed.charAt(i) == "&") {
            special += "\\&";
        } else if (allowed.charAt(i) == "*") {
            special += "\\*";
        } else if (allowed.charAt(i) == "(") {
            special += "\\(";
        } else if (allowed.charAt(i) == ")") {
            special += "\\)";
        } else if (allowed.charAt(i) == "-") {
            special += "\\-";
        } else if (allowed.charAt(i) == "_") {
            special += "\\_";
        } else if (allowed.charAt(i) == "=") {
            special += "\\=";
        } else if (allowed.charAt(i) == "+") {
            special += "\\+";
        } else if (allowed.charAt(i) == "g") {
            special += "\\'";
        } else if (allowed.charAt(i) == "b") {
            special += "\\\\";
        } else if (allowed.charAt(i) == "d") {
            special += "\\\"";
        }
    }
    special += "]";
    return special;
}

function getError(chars) {
    var error = "You can only enter the following characters: ";
    for (var i=0;i<chars.length;i++) {
        if (chars.charAt(i) == "a") {
            error += "Alpha";
        } else if (chars.charAt(i) == "n") {
            error += "Numeric";
        } else if (chars.charAt(i) == "s") {
            error += "Spaces";
        } else if (chars.charAt(i) == "b") {
            error += "\\ ";
        } else if (chars.charAt(i) == "d") {
            error += "\" ";
        } else if (chars.charAt(i) == "g") {
            error += "\' ";
        } else {
            error += chars.charAt(i)+" ";
        }

        if (i < chars.length-1) {
            error += ", ";
        }
    }
    return error;
}