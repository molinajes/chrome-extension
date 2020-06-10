// Chrome automatically creates a background.html page for this to execute.
// This can access the inspected page via executeScript
// 
// Can use:
// chrome.tabs.*
// chrome.extension.*
// (function() {

// 	var tabs = {};


// 	var inspect = {
		
// 		// css, js script is activated and send 'activate' action to hoverinspect.js.
// 		activate: function(id) {

// 			this.id = id;

// 			chrome.tabs.executeScript(this.id, {
// 				file: 'toggle.js'
// 			}, function() {
// 				chrome.tabs.sendMessage(this.id, {
// 					action: 'activate'
// 				});
// 			}.bind(this));

// 			chrome.browserAction.setIcon({
// 				tabId: this.id,
// 				path: {
// 					19: "src/icon_active.png"
// 				}
// 			});
// 		},

// 		// send 'deactivaate' action to hoverinspect.js.
// 		deactivate: function() {

// 			chrome.tabs.sendMessage(this.id, {
// 				action: 'deactivate'
// 			});

// 			chrome.browserAction.setIcon({
// 				tabId: this.id,
// 				path: {
// 					19: "src/icon.png"
// 				}
// 			});
// 		}

// 	};

// 	// whenever a user click extension icon, activate or deactivate function is called.
// 	function toggle(tab) {

// 		if (!tabs[tab.id]) {
// 			tabs[tab.id] = Object.create(inspect);
// 			tabs[tab.id].activate(tab.id);
// 		} else {
// 			tabs[tab.id].deactivate();
// 			for (var tabId in tabs) {
// 				if (tabId == tab.id) delete tabs[tabId];
// 			}
// 		}
// 	}

// 	// chrome.browserAction.onClicked.addListener(toggle);

// })();






// chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
//     if (changeInfo.url === undefined){
//         chrome.tabs.executeScript(tabId, {file: "js/refresh.js"} );
//     }
//   });



chrome.extension.onConnect.addListener(function (port) {

    var extensionListener = function (message, sender, sendResponse) {

        if(message.tabId && message.content) {

                //Evaluate script in inspectedPage
                if(message.action === 'code') {
                    chrome.tabs.executeScript(message.tabId, {code: message.content});

                //Attach script to inspectedPage
                } else if(message.action === 'script') {
                    chrome.tabs.executeScript(message.tabId, {file: message.content});

                //Pass message to inspectedPage
                } else {
                    chrome.tabs.sendMessage(message.tabId, message, sendResponse);
                }

        // This accepts messages from the inspectedPage and 
        // sends them to the panel
        } else {
            port.postMessage(message);
        }
        sendResponse(message);
    }

    // Listens to messages sent from the panel
    chrome.extension.onMessage.addListener(extensionListener);

    port.onDisconnect.addListener(function(port) {
        chrome.extension.onMessage.removeListener(extensionListener);
    });

    // port.onMessage.addListener(function (message) {
    //     port.postMessage(message);
    // });

});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    return true;
});