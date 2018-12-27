/*
    
*/
document.addEventListener('DOMContentLoaded', function() {
    var number_links_btn = document.getElementById('number-links-btn');

    number_links_btn.addEventListener('click', function() { // When the number links button is clicked on...
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { // Tell the tab the user has currently opened to...
                chrome.tabs.sendMessage(tabs[0].id, {"command": "dislplay_links"});
            });
    });
});