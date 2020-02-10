/*
client.js connects to a server. Then it listens for messages from the server and
sends the message to correct content scripts or performs the necessary
actions.
*/

/*
Test Cases Down:
number_links.js
1)number links [x]
2)cancel links [x]
3)access link []

client.js
1) Reload [x]
2) Forward [x]
3) Back [x]

scroll_content.js
 1) scroll down [x]                              
 2) scroll up   []
 3) scroll to bottom [x]  
 4) scroll to top   []
 5) auto scroll down []
 6) auto scroll up' []
*/

console.log("Running");
var socket = io('http://localhost:3000');   //Connects to server
socket.on('message', function(msg){         //Listens for a messsage event, msg is a JSON object
    var parsedMsg = JSON.parse(msg);
    console.log(parsedMsg);                       
                                            //Content scripts do not have access to chrome.tabs
                                            // Therefore reload, forward, and back must be execeuted in this background script
                                            //Click this link for more information: https://stackoverflow.com/questions/15034859/chrome-tabs-returns-undefined-in-content-script
    if(parsedMsg.command == "back") {
        chrome.tabs.goBack(); 
    }
    else if(parsedMsg.command == "forward") {

        chrome.tabs.goForward(); 
    }
    else if(parsedMsg.command == "refresh") {
        chrome.tabs.reload();

    } else if (parsedMsg.command == "google query") {
        chrome.tabs.update({ url: "http://en.wikipedia.org"});
    } else {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { // Tell the tab the user has currently opened to...
            console.log("I sent the message");
            chrome.tabs.sendMessage(tabs[0].id, parsedMsg); // number the links (sends message to all content scripts).
        });
    }
});

