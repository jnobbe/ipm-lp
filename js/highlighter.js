var theForm = document.forms["eoyForm"];
var theFormEls = theForm.elements;

var theFormElsLen = theFormEls.length;

function highlight() {
// Get the inputs
for(var i = 0; i < theFormElsLen; i++) {
    var theFormItem = theForm[i];
    if ((theFormItem.tagName.toLowerCase() === "input" || theFormItem.tagName.toLowerCase() === "select") &&
        theFormItem.type !== "submit") {
        if (theFormItem.nextElementSibling != null && theFormItem.nextElementSibling.tagName.toLowerCase() === "h5" ) {
            // Style it!
            var itemClass = theFormItem.getAttribute("class");
            itemClass += " warn-halo";
            theFormItem.setAttribute("class", itemClass);
        } else if (theFormItem.nextElementSibling == null) {
            var itemClass = theFormItem.getAttribute("class");
            if (itemClass != null) {
                // Clean it up!
                if (itemClass.indexOf("warn-halo") != -1) {
                    var pos = itemClass.indexOf(" warn-halo");
                    itemClass = itemClass.substring(0, pos);
                    theFormItem.setAttribute("class", itemClass);
                }
            }
        }
    }
}
return false;
};