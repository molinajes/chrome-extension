var iframe = document.createElement('iframe'); 
iframe.style.height = "100vh";
iframe.style.width = "500px";
iframe.style.position = "fixed";
iframe.style.top = "0px";
iframe.style.right = "0px";
iframe.style.zIndex = "90";
// iframe.frameBorder = "none"; 
iframe.src = chrome.extension.getURL("popup.html")

var mainframe = document.createElement('iframe'); 
mainframe.style.height = "100vh";
mainframe.style.width = 'calc(100vw - 510px)';
mainframe.style.position = "fixed";
mainframe.style.top = "0px";
mainframe.style.zIndex = "90";
// mainframe.frameBorder = "none"; 
mainframe.src = window.location.href;
// mainframe.src = "https://wwf.org";

document.body.innerHTML = ''
document.body.className = ''
document.body.appendChild(mainframe);
document.body.appendChild(iframe)

var script = document.createElement("script");

// Add script content

script.innerHTML = `$('#urlinput').keypress(function(e) {
    e.pre
    console.log('key', e.which)
    if (e.which == 13) {
        console.log('key', e.which)
        url = $('#urlinput').val();
        console.log(url)
        window.location.href = url;
    }

})`;

// Append

document.body.appendChild(script);