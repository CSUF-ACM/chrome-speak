
document.addEventListener('DOMContentLoaded', function() {

  var scrollDown = document.getElementById('scrollDown');    //grabbing button from popup.html

  scrollDown.addEventListener('click', function(){           // starts anon function when button clicked
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){       //passes current tab to function
      chrome.tabs.sendMessage(tabs[0].id, {"command": "scroll down"});
    });
  });

  var scrollUp = document.getElementById('scrollUp');

  scrollUp.addEventListener('click', function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      chrome.tabs.sendMessage(tabs[0].id, {"command": "scroll up"});
    });
  });

  var toBottom = document.getElementById('scrollBottom');

  toBottom.addEventListener('click', function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      chrome.tabs.sendMessage(tabs[0].id, {"command": "scroll to bottom"});
    });
  });

  var toTop = document.getElementById('scrollTop');

  toTop.addEventListener('click', function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      chrome.tabs.sendMessage(tabs[0].id, {"command": "scroll to top"});
    });
  });

  var autoDown = document.getElementById('autoScrollBottom');

  autoDown.addEventListener('click', function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      chrome.tabs.sendMessage(tabs[0].id, {"command": "auto scroll down"});
    });
  });

});
