
console.log("Hello I'm a Chrome extension.");

function scrollDown() {
  window.scrollBy(0,50);
}

function scrollUp() {
  window.scrollBy(0, -50);
}

function toBottom() {
  window.scrollTo(0,document.body.scrollHeight);
}

function toTop() {
  window.scrollTo(0, 0);
}

// AUTOSCROLL STILL HAS CONTINUOUS SCROLL BUG
function autoBottom() {
  window.scrollBy(0, 3);
  window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      console.log("Bottom Reached.");
      window.scrollBy(0, 0);
    }
    else {
      scrolldelay = setTimeout( 'autoBottom()' , 10);
    }
  }
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {    //receives message, anon func pass 3 arg.
  if(message.command == 'scroll down') {                                     // message is object. use '.command' to receive obj sent from popup.js
    scrollDown();
    console.log("Scrolling Down.");
  }
  else if (message.command == 'scroll up') {
    scrollUp();
    console.log("Scrolling Up.");
  }
  else if (message.command == 'scroll to bottom') {
    toBottom();
    console.log("Scrolling to Bottom of Page.")
  }
  else if (message.command == 'scroll to top') {
    toTop();
    console.log("Scrolling to Top of Page.")
  }
  else if (message.command == 'auto scroll down') {
    autoBottom();
    console.log("Auto Scrolling to Bottom.")
  }
  else {
    console.log('Error receiving message.')
  }
});
