
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

function autoBottom() {
  window.scrollBy(0, 2);
  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) { //condition for bottom of page
    console.log("Bottom Reached.");
    clearInterval(scrolldelay);  // stops the autoscrool setInterval func
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
    console.log("Scrolling to Bottom of Page.");
  }
  else if (message.command == 'scroll to top') {
    toTop();
    console.log("Scrolling to Top of Page.");
  }
  else if (message.command == 'auto scroll down') {
    console.log("Auto Scrolling to Bottom.");
    scrolldelay = setInterval( 'autoBottom()', 12); //to continually run autoscroll
  }

  else {
    console.log('Error receiving message.');
  }
});
