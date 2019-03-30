document.addEventListener('DOMContentLoaded', function(){

    var back = document.getElementById('back');
    back.addEventListener('click', function(){  
            chrome.tabs.goBack();  // Moves selected tab back one web page if possible
        });                       // Defaults to selected tab if no arguments are provided


    var forward = document.getElementById('forward');
    forward.addEventListener('click', function(){
        chrome.tabs.goForward(); // Moves selected tab forward one web page if possible
                                    // Defaults to selected tab if no arguments are provided
    });


    var reload = document.getElementById('reload');
    reload.addEventListener('click', function(){
        chrome.tabs.reload(); // Reloads the selected tab
                               // Defaults to selected tab if no arguments are provided
    }); 

 });


    
  