let home = `<div class = "head" id="header">
<div class= "row">
    <div class="col float-left">
        <button id="hometag" onclick="myFunction()" >Home</button>
    </div>
    <div class="col float-right">
        <img src="./src/avarta.png" class="circleimage"/>
        <i class='fas fa-bars' style='font-size:18px'></i> 
    </div>
</div>
<div class= "row headerbotcontainer">
    <div class="inputurlcontainer">
        <input id="urlinput"/>
    </div>
    <div class="sharebuttoncontainer">
        <i class='far fa-bell'></i>
        <button class="sharebutton">SHARE</button>
    </div>
</div>
</div>
<div class = "containter body">

</div>
<div class="footer">
<div class="row commentInput">
    <div class="left_input">
        <input type="text" class="input" placeholder="Comment this page..."/>                        
    </div>
    <div class="icon_container">
        <i class="fa fa-smile-o" style="font-size:36px"></i>
    </div>                
    <div class="icon_container">
        <i class="fa fa-telegram" style="font-size:36px"></i>
    </div>                
</div>
<div class="row button-container">
    <button class="btn btn-primary button">Add spot comments</button>
</div>

</div>`

let main = `
<div class = "head" id="header">
<div class= "row">
    <div class="col float-left">
        <img class = "greenlight" src="./src/Greenlight.png"/>
        <b> &nbsp;Greenlight</b>
    </div>
    <div class="col float-right">
        <i class='far fa-bell'></i>
        <img src="./src/avarta.png" class="circleimage"/>
        <i class='fas fa-bars' style='font-size:18px'></i> 
    </div>
</div>
</div>
<div class = "containter body">
<div>
    <img class="curv" src="./src/curv.png" />
</div><br/>
<div class="helpPannel">
    <div class="row comment">
        <div class="col float-left ">
            Add a Comment
        </div>
        <div class="col">
            <div class="row float-right">
                <div class="key"></div> &nbsp;+&nbsp;
                <div class="key"></div> &nbsp;+&nbsp;
                <div class="key"></div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col float-left">
            Toggle Inspector Mode
        </div>
        <div class="col">
            <div class="row float-right">
                <div class="key"></div> &nbsp;+&nbsp; 
                <div class="key"></div> &nbsp;+&nbsp;
                <div class="key"></div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            </div>
        </div>
    </div>
</div>
</div>
<div class="footer">
<div class="row commentInput">
    <div class="left_input">
        <input type="text" class="input" placeholder="Comment this page..."/>                        
    </div>
    <div class="icon_container">
        <i class="fa fa-smile-o" style="font-size:36px"></i>
    </div>                
    <div class="icon_container">
        <i class="fa fa-telegram" style="font-size:36px"></i>
    </div>                
</div>
<div class="row button-container">
    <button class="btn btn-primary button" id="addcomment">Add spot comments</button>
</div>

</div>
`
let homecontainer = $('#homecontainer');
let maincontainer = $('#maincontainer');
homecontainer.hide()
$('#addcomment').click(function(){
    homecontainer.hide();
    maincontainer.show();

    console.log("click button")
    // container.empty();
    // container.append(home)
});

$('#hometag').click(function() {
    homecontainer.show();
    maincontainer.hide();
});
$('#urlinput').keypress(function(e) {
    e.pre
    console.log('key', e.which)
    if (e.which == 13) {
        console.log('key', e.which)
        url = $('#urlinput').val();
        // url = "'https://www.google.com/'";
        command = `window.location.href = "${url}"`;
        console.log(url)
        sendObjectToInspectedPage({action: "code", content: command});        
    }

})
