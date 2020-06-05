var iframe = document.createElement('iframe'); 
iframe.style.background = "green";
iframe.style.height = "100vh";
iframe.style.width = "500px";
iframe.style.position = "fixed";
iframe.style.top = "0px";
iframe.style.right = "0px";
iframe.style.zIndex = "9000000000000000000";
iframe.frameBorder = "none"; 
iframe.src = chrome.extension.getURL("popup.html")

document.body.appendChild(iframe);
document.body.style.width = 'calc(100vw - 510px)'