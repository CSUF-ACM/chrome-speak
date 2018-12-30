/*
    
*/
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if(message.command == "number links") {
        var anchor = document.querySelectorAll("a");
        var link_number, text_node;

        for (var i = 0; i < anchor.length; ++i) {
            if (false) { // This statement is a temporary solution to prevent adding more and more numbers to a page that is already numbered.
                
            } else {
                link_number = document.createElement("SPAN");
                text_node = document.createTextNode(i + 1);
                link_number.classList.add('chrome-speak-number-links');
                link_number.appendChild(text_node);
                anchor[i].insertBefore(link_number, anchor[i].firstChild);
                console.log(anchor[i]);
            }
        }
    }
});