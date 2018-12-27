
/*
    Popup.html
*/
document.addEventListener('DOMContentLoaded', function() {
    var number_links_btn = document.getElementById('number-links-btn');

    number_links_btn.addEventListener('click', function() { // When the number links button is clicked on...
            chrome.tabs.query({active: true}, function(tab_array) { // Tell the tab the user has currently opened to...
                chrome.tabs.sendMessage(tab_array[0].id, {data: "a message"}, function(response) { // call the number links function in content scripts.
                    
                });
            });
    });
});

/*
    Content for website.
*/