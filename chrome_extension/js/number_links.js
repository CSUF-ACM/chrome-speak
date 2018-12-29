/*
    
*/
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if(message.command == "number links") {
        var anchor = document.getElementsByTagName("a");

        for (var i = 0; i < anchor.length; ++i) {
            anchor[i].innerHTML = (i + 1) + ' ' + anchor[i].innerHTML;
        }
    }
});