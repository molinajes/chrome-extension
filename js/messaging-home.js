// This creates and maintains the communication channel between
// the inspectedPage and the dev tools panel.
//
// In this example, messages are JSON objects
// {
//   action: ['code'|'script'|'message'], // What action to perform on the inspected page
//   content: [String|Path to script|Object], // data to be passed through
//   tabId: [Automatically added]
// }
// chrome.storage.sync.clear();

// chrome.storage.sync.get('alldata', function(result) {
//     if(result !== undefined || result !== null || result.length != 0) {
//         try {
//             items = JSON.parse(result.alldata);
//             if(items !=null ) {
//                 items.forEach(function(item) {
//                     addCommentSTocontainer(item.commentid, item.comment, item.time);
//                 })
//                 console.log('result', result);    
//             }
                
//         } catch (error) {
            
//         }

//     }
//     // console.log('data', items)
//     // chrome.storage.sync.set({'alldata':null}, function() {
//     //     console.log('Settings saved');
//     // });
//     chrome.storage.sync.clear();
//     });

(function createChannel() {
    //Create a port with background page for continous message communication
    var port = chrome.extension.connect({
        name: "Sample Communication" //Given a Name
    });

    // Listen to messages from the background page
    port.onMessage.addListener(function (message) {
        if (message.action && message.action == "savedlocal") {
            chrome.storage.local.get('spotcomments', function(result) {
                comments = result.spotcomments;
                comments.forEach(function(item) {
                    addCommentSTocontainer(item.commentid, item.comment, item.time);
                })
            });
            
        }
        // console.log(message);
        // contenelemcontent = `<div class="commentpost_header" >
        // <div class="commentid" >
        //             ${message.commentid}
        // </div>		
        // <div class="commentuserimgcontainer">
        //     <img class="commentuserimg" src="avarta.png" >
        // </div>		
        // <div class="commentusernamecontainer" >
        //     <div>
        //         <p class="commentusername" >Max S.</p>
        //         <div class="commenttimecontainer">
        //             <div class="tviconcontainer">
        //                 <i class="fa fa-television" aria-hidden="true"></i>	
        //             </div>
        //             <div class="timeinfo">
        //             Less than 1 Min
        //             </div>
        //         </div>
        //     </div>
        // </div>		
        // <div class="dot3">...</div>		
        // <div class="resolvebuttoncontainer" >
        //     <button class="resolvebutton">RESOLVE</button>
        // </div>
        // </div>		
        // <div class="commenttext" > 
        //     <p class="commentcontent" type="text" >${message.comment}</p>
        // </div>
        // <div class="commentreply" > 
        //     <input class="commentreplyinput" type="text" >
        // </div>
        // `
        // commentelem = document.createElement('div');
        // commentelem.classList.add('commentelem');
        // commentelem.innerHTML = contenelemcontent;
        // document.querySelector('#containerbody').appendChild(commentelem)
        else {
            addCommentSTocontainer(message.commentid, message.comment, message.time)
        }
        // chrome.storage.sync.set({'alldata':null}, function() {
        //     console.log('Settings saved');
        // });
    
        // chrome.storage.sync.set({'alldata': message.alldata}, function() {
        //     console.log('Settings saved');
        // });
        
    });

}());



  // Read it using the storage API

// This sends an object to the background page 
// where it can be relayed to the inspected page
function addCommentSTocontainer(id, content, time) {
    contenelemcontent = `<div class="commentpost_header" >
    <div class="commentid" >
                ${id}
    </div>		
    <div class="commentuserimgcontainer">
        <img class="commentuserimg" src="avarta.png" >
    </div>		
    <div class="commentusernamecontainer" >
        <div>
            <p class="commentusername" >Max S.</p>
            <div class="commenttimecontainer">
                <div class="tviconcontainer">
                    <i class="fa fa-television" aria-hidden="true"></i>	
                </div>
                <div class="timeinfo">
                ${time}
                </div>
            </div>
        </div>
    </div>		
    <div class="dot3">...</div>		
    <div class="resolvebuttoncontainer" >
        <button class="resolvebutton">RESOLVE</button>
    </div>
    </div>		
    <div class="commenttext" > 
        <p class="commentcontent" type="text" >${content}</p>
    </div>
    <div class="commentreply" > 
        <input class="commentreplyinput" type="text" >
    </div>
    `
    commentelem = document.createElement('div');
    commentelem.classList.add('commentelem');
    commentelem.innerHTML = contenelemcontent;
    document.querySelector('#containerbody').appendChild(commentelem)

}
function sendObjectToInspectedPage(message) {
    message.tabId = chrome.devtools.inspectedWindow.tabId;
    chrome.extension.sendMessage(message);
}