// This is included and executed in the inspected page
function inserted() {
    console.log("Here is addcomments")
    document.addEventListener('mousemove', this.log);
    // document.removeEventListener('mousemove', this.log);
    // document.removeEventListener('scroll', this.layout);
    // document.removeEventListener('click', this.toggle);
    document.addEventListener("click",handler);
    function handler(event) {
        var x = event.clientX, y = event.clientY;
        elementMouseIsOver = document.elementFromPoint(x, y);
        ele = document.createElement('div');
        ele.innerHTML = "This is query selector";
        elementMouseIsOver.appendChild(ele);
    }
	console.log('External script attached');
}
inserted();