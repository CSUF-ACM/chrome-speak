function remove_links() {
    var number_links = document.querySelectorAll(".chrome-speak-number-links");
        
    for (var i = 0; i < number_links.length; ++i) {
        number_links[i].remove();
    }
}

/*
    Entry Point
*/
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    
    if(message.command == "number links") {
        var anchor = document.querySelectorAll("a");
        var link_number, text_node;

        for (var i = 0; i < anchor.length; ++i) {
            link_number = document.createElement("SPAN");
            text_node = document.createTextNode(i + 1);
            link_number.classList.add('chrome-speak-number-links');
            link_number.appendChild(text_node);
            anchor[i].insertBefore(link_number, anchor[i].firstChild);
        }

    } else if (message.command == "cancel links") {
        remove_links();
    }
});
