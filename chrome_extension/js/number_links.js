/*
    
*/

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    alert(message.command);
//     //sendResponse({data: data, success: true});
});