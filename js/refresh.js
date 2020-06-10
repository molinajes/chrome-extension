// documentCopy = document.body.cloneNode(true)
// document.replaceChild(document.body, documentCopy)
// document.body.classList.remove("changecursor");
// location.reload();

getcomments();
// window.onload = function() {
//     getcomments();

// }
// setTimeout(() => {
//     console.log("getcomments");
//     getcomments();
// }, 6000);
function getcomments() {
    url = window.location.href;
    var xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
        console.log(this.responseText);
        comments = JSON.parse(this.responseText);
        localStorage.setItem('spotcomments',JSON.stringify(comments));
        chrome.storage.local.set({'spotcomments':comments}, function() {
            console.log({action:"savedlocal"});
            sendObjectToDevTools({action:"savedlocal"});
        } );

        if(comments.length>0) {
            localStorage.setItem('currentcommentid',comments[comments.length-1].commentid + 1);
        }
        else {
            localStorage.setItem('currentcommentid',1);
        }
        comments.forEach(function (item , index) {
            addElementtobody(item.commentid, item.posX, item.posY);
        })

    }
    });

    xhr.open("GET", "http://localhost:3000/comments/url?url="+url);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send();

}
document.addEventListener('click', function(event) {
    event.stopPropagation();
    event.preventDefault();    
})

function addElementtobody(commentid, posX, posY) {
    elcontent = `<div style="
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #2982FF;
    border: solid;
    transform: translate(-50%, -50%);
    /* margin: auto; */
    ">
    <div style="border-radius: 50%;/* background-color: white; */margin: auto;margin-top: 30%;margin-bottom: 30%;text-align: center;line-height: 9px;color: white;font-size: 17px;/* padding-right: 2px; */">
        ${commentid}
    </div>
    </div>`;
    el = document.createElement('div');
    el.innerHTML = elcontent;
    el.classList.add("spotcommentelem")

    el.style.position = "absolute";

    el.style.top = posY;
    el.style.left = posX;
    el.style.zIndex = 1000;


    document.body.appendChild(el);
}




// let commentid = parseInt(localStorage.getItem('currentcommentid'));
// getcomments();
// console.log('comments', comments);
// comments.forEach((comment) => {
//     addElementtobody(comment.commentid, comment.posX, commnet.posY);
// })

function sendObjectToDevTools(message) {
    // The callback here can be used to execute something on receipt
    chrome.extension.sendMessage(message, function(message){});
}
