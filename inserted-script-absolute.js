// This is included and executed in the inspected page 
var postedflag = false;
var commentid = 1;
function inserted() {
    localStorage.clear();
    localStorage.setItem('currentcommentid', 1);
    window.innerHeight = 900;
    window.innerWidth = 1440;
    console.log("Here is addcomments")
    // document.addEventListener('mousemove', this.log);
    // document.removeEventListener('mousemove', this.log);
    // document.removeEventListener('scroll', this.layout);
    // document.removeEventListener('click', this.toggle);
    document.body.style.cursor = "url";
    document.addEventListener("click",handler);
    function handler(event) {
        // if(postedflag) {
        //     postedflag = false;
        //     return;
        // }
        // postedflag = true;
        event.stopPropagation();
        event.preventDefault();
        var x = event.pageX, y = event.pageY;
        var clientx = event.clientX, clienty = event.clientY;
        elementMouseIsOver = document.elementFromPoint(clientx, clienty);
        console.log('event handler',elementMouseIsOver);
        function getDIVparent(el) {
            let ptr = el;

            tag = ptr.tagName;
            // if(!tag){
            //     tag = ptr.nodeName;
            // }

        
            while(tag != 'DIV') {
                ptr = ptr.parentElement;
                tag = ptr.tagName;
                // if(!tag){
                //     tag = ptr.nodeName;
                // }
            }
            return ptr;
        }
        elementMouseIsOver = getDIVparent(elementMouseIsOver);
        elementMouseIsOver.classList.add("foraddcommentswindow")
        console.log('event handler',elementMouseIsOver);
        elecontent = `<div style="
        width: 470px;
        display: flex;
        flex-direction: column;
        background-color: #252C37;
    ">
            <div id="commentpost_header" style="
        display: flex;
        background-color: #131820;
        height: 58px;
        padding-bottom: 10px;
        padding-top: 10px;
    ">
                <div class="col" style="
        width: 40px;
        /* height: 40px; */
        margin-right: 10px;
        padding: 11px;
    ">
                    <img src="avarta.png" style="
        width: 100%;
        height: 100%;
        border-radius: 50%;
    ">
                </div>		
                <div class="col" style="
        margin: auto 50px auto 0px;
    ">
                    <p style="
        color: white;
        font-family: none;
        font-size: 15px;
    ">Max S.</p>
                </div>		
                <div class="col" style="
        padding: 0px;
        margin: auto 10px auto 10px;
        /* margin-top: auto; */
        /* margin-bottom: auto; */
    ">
                    <button class="addcomment_cancel" style="
        color: #AFD0FF;
        background-color: inherit;
        border-radius: 10px;
        border: none;
        font-size: 17px;
    ">CANCEL</button>
                </div>		
                <div class="col" style="
        /* margin-top: auto; */
        /* margin-bottom: auto; */
        margin: auto 10px auto 10px;
    ">
                    <button class="addcomment_draw" style="
        color: white;
        background-color: #252C37;
        border: none;
        font-size: 15px;
        border-radius: 12px;
        padding: 8px 15px;
    ">DRAW</button>
                </div>		
                <div class="col" style="
        /* margin-top: auto; */
        /* margin-bottom: auto; */
        margin: auto 10px auto 10px;
    ">
                    <button class="addcomment_post" style="
        color: white;
        background-color: #2982FF;
        border-radius: 12px;
        padding: 8px 15px;
        font-size: 15px;
        border: none;
    ">POST</button>
                </div>		
            </div>
            <div style="
        margin: auto 0px auto 0px;
        padding: 0px 10px 0px 10px;
        background-color: #252C37;
    "> 
                <textarea  class="commenttextarea" type="text" style="
        width: 90%;
        height: 38px;
        background-color: inherit;
        border: none;
        color: white;
        font-size: 19px;
    "></textarea>
            </div>
        </div>`;

        prevaddelemcontent = `<div style="
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #2982FF;
        border: solid;
        transform: translate(-50%, -50%);
        /* margin: auto; */
    ">
        <div style="
        width: 40%;
        height: 40%;
        border-radius: 50%;
        background-color: white;
        margin: auto;
        margin-top: 30%;
    ">
            
        </div>
    </div>`        
        ele = document.createElement('div');
        ele.classList.add("addcommentswindow")
        ele.style.position = "absolute";



        console.log(clienty, clientx);
        console.log(y, window.innerHeight, x, window.innerWidth);
        console.log(y, document.body.scrollHeight,x, document.body.scrollWidth);
        ptrx = x;
        ptry = y;
        windowWidth = document.body.scrollWidth; windowHeight = window.innerHeight
        winWidth = 470; winHeight = 208;
        if (ptry + winHeight> windowHeight) {
            if(ptry-winHeight> 0) {
                ptry -= (winHeight+15+15);
            }
        } 
        if (ptrx + winWidth > windowWidth) {
            ptrx = windowWidth-winWidth - 15;
        }
        ptrx += 15;
        ptry += 15;

        X = ptrx.toString() + 'px';
        Y = ptry.toString() + 'px';    
        // left = ((X/elementMouseIsOver.offsetWidth) * 100).toString() + "%";
        // top = ((Y/elementMouseIsOver.offsetHeight) * 100).toString() + "%";
        
        // ele.style.top = top;
        // ele.style.left = left;


        ele.style.top = Y;
        ele.style.left = X;
        ele.style.zIndex = 100;
        // console.log(left, top);
        // ele.style.top = y-elementMouseIsOver.style.top;
        // ele.style.left = x-elementMouseIsOver.style.left;
        // ele.style.zIndex = 90;
        ele.innerHTML = elecontent;


        // elementMouseIsOver.appendChild(ele);
        ele.style.position = "absolute";
        document.body.appendChild(ele);




        prevaddelem = document.createElement('div');
        prevaddelem.innerHTML = prevaddelemcontent;
        prevaddelem.classList.add("prevaddelemwindow")
        // prevaddelem.style.position = "absolute";
        posX = x.toString() + 'px';
        posY = y.toString() + 'px';

        // prevaddelem.style.top = posY;
        // prevaddelem.style.left = posX;
        // prevaddelem.style.zIndex = 100;
 

        // prevaddelem.style.position = "absolute";
        // document.body.appendChild(prevaddelem);
        addElementtobody(prevaddelem, posX, posY);

        


    
        document.removeEventListener('click', handler);
        document.addEventListener('click', nothing)
        function nothing(event) {
            event.stopPropagation();
            event.preventDefault();
        }
        cancel = ele.querySelector('.addcomment_cancel');
        draw = ele.querySelector('.addcomment_draw');
        post = ele.querySelector('.addcomment_post');
        post.addEventListener('mouseup', addcomment);
        cancel.addEventListener('mouseup', cancelcomment);
        console.log(cancel, draw, post)
        function cancelcomment(e) {
            console.log(e)
            console.log('click cancel')
            post.removeEventListener('mouseup', addcomment);
            cancel.removeEventListener('mouseup', cancelcomment);
            document.removeEventListener('click', nothing);
            document.addEventListener('click', handler);
            document.querySelector('.addcommentswindow').remove();    
            document.querySelector('.prevaddelemwindow').remove();    

        }
        function addcomment() {
            let commentid = parseInt(localStorage.getItem('currentcommentid'));
            commentspotcontent = `<div style="
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
            spotcommentelem = document.createElement('div');
            spotcommentelem.innerHTML = commentspotcontent;
            spotcommentelem.classList.add("spotcommentelem")
            spotcommentelem.style.position = "absolute";
            posX = x.toString() + 'px';
            posY = y.toString() + 'px';
    
            spotcommentelem.style.top = posY;
            spotcommentelem.style.left = posX;
            spotcommentelem.style.zIndex = 100;
        
    
            spotcommentelem.style.position = "absolute";
            document.body.appendChild(spotcommentelem);


            post.removeEventListener('mouseup', addcomment);
            cancel.removeEventListener('mouseup', cancelcomment);
            document.removeEventListener('click', nothing);
            document.addEventListener('click', handler);

            textareacomment = document.querySelector('.commenttextarea');
            comment = textareacomment.value;
            document.querySelector('.addcommentswindow').remove();    
            document.querySelector('.prevaddelemwindow').remove(); 

            console.log(comment);
            // commentid = parseInt(localStorage.getItem('currentcommentid'));
            date = new Date();
            time = date.getTime();

            data = {commentid:commentid, posX:posX, posY:posY, comment:comment, time:time};
            itemkey = 'spotcomments_' + commentid.toString();

            commentid+=1;
            localStorage.setItem('currentcommentid', commentid);

            sendObjectToDevTools(data);
            localStorage.setItem(itemkey, JSON.stringify(data));
            itemdata = JSON.parse(localStorage.getItem(itemkey));
            console.log(itemdata, itemdata.posX)
        }
       
    }
	console.log('External script attached');
}

function addElementtobody(el, posX, posY) {
    el.style.position = "absolute";

    el.style.top = posY;
    el.style.left = posX;
    el.style.zIndex = 100;


    document.body.appendChild(el);
}

function sendObjectToDevTools(message) {
    // The callback here can be used to execute something on receipt
    chrome.extension.sendMessage(message, function(message){});
}
inserted();