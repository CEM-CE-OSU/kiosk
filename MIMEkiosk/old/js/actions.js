var buffer=0;
var position=0;
var pause=0;
var myimages = new Array();
var arrowDelay=0;

function preloading(){
	for (x=0; x<preloading.arguments.length; x++){
	myimages[x] = new Image();
	myimages[x].src = preloading.arguments[x];
	}
}
function start(){
	e=document.getElementById("composite");
	e.src=myimages[0].src;
	setInterval(nextImage,displayTime);
	setInterval(hideArrows,checkArrows);
}
function showArrows(){
	arrowDelay=3;
	document.getElementById('imgLeftArrow').style.visibility='visible';
	document.getElementById('imgRightArrow').style.visibility='visible';
}
function hideArrows(){
	if (arrowDelay>0){
		arrowDelay=arrowDelay-1;
		return;
	}
	document.getElementById('imgLeftArrow').style.visibility='hidden';
	document.getElementById('imgRightArrow').style.visibility='hidden';
}
function nextImage(){
	if (pause>0){
		pause=pause-1;
		return;
	}
	animate(1);
}
function prevImage(){
	animate(-1);
}
function animate(dir){
	position=position+dir;
	if (position<0) position=myimages.length-1;
	if (position>myimages.length-1) position=0;
	//position=Math.min(Math.max(position+dir,0),myimages.length-1);
	//theDiv=document.getElementById("divImage");
	//theDiv.innerHTML=myimages[position];
	e=document.getElementById("composite");
	e.src=myimages[position].src;
	
}
function handle(delta) {

	buffer=buffer+delta;
    //if (delta < 0){
		if (buffer<-bufferThreshold){
			pause=pauseMult;
			buffer=0;
			animate(-1);
		}
	//}
    //else
	//{
		if (buffer>bufferThreshold){
			pause=pauseMult;
			buffer=0;
			animate(1);
		}
	//}
}

/** Event handler for mouse wheel event.
 */
function wheel(event){
	window.status="test";
        var delta = 0;
        if (!event) /* For IE. */
                event = window.event;
        if (event.wheelDelta) { /* IE/Opera. */
                delta = event.wheelDelta/120;
                /** In Opera 9, delta differs in sign as compared to IE.
                 */
                if (window.opera)
                        delta = -delta;
        } else if (event.detail) { /** Mozilla case. */
                /** In Mozilla, sign of delta is different than in IE.
                 * Also, delta is multiple of 3.
                 */
                delta = -event.detail/3;
        }
        /** If delta is nonzero, handle it.
         * Basically, delta is now positive if wheel was scrolled up,
         * and negative, if wheel was scrolled down.
         */
		 //delta=delta/10;
        if (delta)
                handle(delta);
        /** Prevent default actions caused by mouse wheel.
         * That might be ugly, but we handle scrolls somehow
         * anyway, so don't bother here..
         */
        if (event.preventDefault)
                event.preventDefault();
	event.returnValue = false;
}

/** Initialization code. 
 * If you use your own event management code, change it as required.
 */
if (window.addEventListener)
        /** DOMMouseScroll is for mozilla. */
        window.addEventListener('DOMMouseScroll', wheel, false);
/** IE/Opera. */
window.onmousewheel = document.onmousewheel = wheel;
