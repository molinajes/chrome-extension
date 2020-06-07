// let homecontainer = $('#homecontainer');
// let maincontainer = $('#maincontainer');
// homecontainer.hide()
// $('#addcomment').click(function(){
//     homecontainer.hide();
//     maincontainer.show();

//     console.log("click button")
//     // container.empty();
//     // container.append(home)
// });

// $('#hometag').click(function() {
//     homecontainer.show();
//     maincontainer.hide();
// });
$('#urlinput').keypress(function(e) {

    console.log('key', e.which)
    if (e.which == 13) {
        console.log('key', e.which)
        url = $('#urlinput').val();
        // url = "'https://www.google.com/'";
        command = `window.location.href = "${url}"`;
        console.log(url)
        sendObjectToInspectedPage({action: "code", content: command});        
        sendObjectToInspectedPage({action: "script", content: 'hoverinspect.js'});        
    }
})
$('#addcomment').click(function() {
    sendObjectToInspectedPage({action: "script", content: 'inserted-script-absolute.js'});        
})
