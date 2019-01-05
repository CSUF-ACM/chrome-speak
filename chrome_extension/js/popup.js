/*
    
*/
document.addEventListener('DOMContentLoaded', function() {
    var number_links_btn = document.getElementById('number-links-btn');

    number_links_btn.addEventListener('click', function() { // When the number links button is clicked on...
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { // Tell the tab the user has currently opened to...
                chrome.tabs.sendMessage(tabs[0].id, {"command": "number links"}); // number the links (sends to all content scripts).
            });
    });

    var canel_links_btn = document.getElementById('cancel-links-btn'); // Same notes as above.

    canel_links_btn.addEventListener('click', function() { 
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {"command": "cancel links"});
        });
    });
});