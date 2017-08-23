var buffer=0;
var position=0;
var pause=0;
var myimages = new Array();
var arrowDelay=0;
function showMenu(){

	if (document.getElementById('divAlum').style.visibility=='visible'){
		showAlumArrows();
		return;
	}
	if (document.getElementById('divRobot').style.visibility=='visible'){
		arrowDelay=2;
		document.getElementById('divMenu').style.visibility='visible';
		return;
	}
}
function showMenuItems(){

	document.getElementById('divAlum').style.visibility='hidden';
	document.getElementById('divRobot').style.visibility='hidden';
	//alert('');
		//document.getElementById('MediaPlayer').stop();
			//alert('');
	document.getElementById('imgLeftArrow').style.visibility='hidden';
	document.getElementById('imgRightArrow').style.visibility='hidden';
	document.getElementById('divMenu').style.visibility='hidden';
	document.getElementById('divMenuItems').style.visibility='visible';
}
function showAlum(){
	document.getElementById('divMenuItems').style.visibility='hidden';
	document.getElementById('divAlum').style.visibility='visible';
	
}
function showRobot(){
	document.getElementById('divMenuItems').style.visibility='hidden';
	document.getElementById('divRobot').style.visibility='visible';
	document.getElementById('divRobot').innerHTML='<object ><embed src="http://www.youtube.com/v/cHJt1n62MA8?version=3&hd=1&loop=1&autoplay=1&controls=0" type="application/x-shockwave-flash" allowfullscreen="false" allowScriptAccess="always" width="1280" height="720"></object>';
	//document.getElementById('MediaPlayer').style.visibility='hidden';
	//var s = document.getElementById('video');
	//var m= document.getElementsByTagName("video")[0]
		//m.play();
		//alert('');
	//s.attachEvent("playStateChange",robotStopped);
		
	//s.play();
	//s.onplaystatechange = robotStopped();

}
function robotStopped(){
	var s = document.getElementById('MediaPlayer');
	if (s.PlayState==0){
		showMenuItems();
	}
}
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
function showAlumArrows(){
	arrowDelay=2;
	document.getElementById('imgLeftArrow').style.visibility='visible';
	document.getElementById('imgRightArrow').style.visibility='visible';
	document.getElementById('divMenu').style.visibility='visible';
}
function hideArrows(){
	if (arrowDelay>0){
		arrowDelay=arrowDelay-1;
		return;
	}
	document.getElementById('imgLeftArrow').style.visibility='hidden';
	document.getElementById('imgRightArrow').style.visibility='hidden';
	document.getElementById('divMenu').style.visibility='hidden';
}
function nextImage(delay){
	if (delay){
		pause=pauseMult;
	} else {
		if (pause>0){
			pause=pause-1;
			return;
		}
	}
	animate(1);
}
function prevImage(delay){
	if (delay){
		pause=pauseMult;
	}
	animate(-1);
}
function animate(dir){
	position=position+dir;
	if (position<0) position=myimages.length-1;
	if (position>myimages.length-1) position=0;
	e=document.getElementById("composite");
	e.src=myimages[position].src;
}
