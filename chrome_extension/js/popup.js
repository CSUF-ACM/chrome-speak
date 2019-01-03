/*
    
*/
document.addEventListener('DOMContentLoaded', function() {
    var number_links_btn = document.getElementById('number-links-btn'); // NUMBER THE LINKS

    number_links_btn.addEventListener('click', function() { // When the number links button is clicked on...
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { // Tell the tab the user has currently opened to...
                chrome.tabs.sendMessage(tabs[0].id, {"command": "number links"}); // number the links (sends message to all content scripts).
            });
    });

    var canel_links_btn = document.getElementById('cancel-links-btn'); // REMOVE NUMBERS FROM LINKS

    canel_links_btn.addEventListener('click', function() { 
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {"command": "cancel links"});
        });
    });

    var submit_link_number_btn = document.getElementById('submit-link-number-btn');

    submit_link_number_btn.addEventListener('click', function() {
        var link_number = document.getElementById('link-number-text').value; // Get link number as input
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {"command": "access link", "link_number":link_number}); // Include link number in JSON.
        });
    });
});