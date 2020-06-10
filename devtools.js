// Can use
// chrome.devtools.*
// chrome.extension.*

// Create a tab in the devtools area
// (function createChannel() {
//     //Create a port with background page for continous message communication
//     var port = chrome.extension.connect({
//         name: "Communication" //Given a Name
//     });

//     // Listen to messages from the background page
//     port.onMessage.addListener(function (message) {
//         if (message.action && message.action == "createpanel") {
//             chrome.devtools.panels.create("Addcomments", "toast.png", "panel-home.html", function(panel) {}); 
//         }
        
//     });
// }());

chrome.devtools.panels.create("Addcomments", "toast.png", "panel-home.html", function(panel) {}); 

