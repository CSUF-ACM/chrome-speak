function number_links() {
    var anchor = document.querySelectorAll("a");
    var link_number, text_node;
    var already_numbered = document.querySelector(".chrome-speak-number-links");

    if (!already_numbered) {
        for (var i = 0; i < anchor.length; ++i) {
            link_number = document.createElement("SPAN");
            text_node = document.createTextNode(i + 1);
            link_number.classList.add('chrome-speak-number-links');
            link_number.appendChild(text_node);
            anchor[i].insertBefore(link_number, anchor[i].firstChild);
        }
    }
}

function remove_links() {
    var already_numbered = document.querySelector(".chrome-speak-number-links");

    if(already_numbered) {
        var number_links = document.querySelectorAll(".chrome-speak-number-links");
        
        for (var i = 0; i < number_links.length; ++i) {
            number_links[i].remove();
        }
    }
}

/*
    ENTRY POINT
*/
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if(message.command == "number links") {
        number_links();
    } else if (message.command == "cancel links") {
        remove_links();
    }
});