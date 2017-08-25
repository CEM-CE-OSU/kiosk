var buffer=0;
var position=0;
var pause=0;
var myalumni = new Array();
var arrowDelay=0;
// Adjust below values as needed.
var displayTime=10000; //Amount of time each image is displayed (in milliseconds). 
var pauseMult=10; //If a user uses the scrollwheel, the normal displayTime will be multiplied by this value.
var zoomIn=1600;
var zoomOut=980;
//var unattendedTimeout=180000;
var intSequence=0;


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
	if (position<0) position=myalumni.length-1;
	if (position>myalumni.length-1) position=0;
	//var frmContent=document.getElementById('frmContent');
	e=document.getElementById("composite");
	info=document.getElementById("divInfo");
	e.src=myalumni[position].src;
	//alert(myalumni[position].text);
	if(myalumni[position].text){
		info.innerText=myalumni[position].text;
	}
}


function zoom(){
	document.getElementById("composite").height=zoomIn;
}
function preloading(){
	for (x=0; x<preloading.arguments.length; x++){
	myalumni[x] = new Image();
	//alert(preloading.arguments[x][1]);
	myalumni[x].src = preloading.arguments[x][0];
	myalumni[x].text=preloading.arguments[x][1];
	}
}
function startShow(){
	e=document.getElementById("composite");
	info=document.getElementById("divInfo");
	e.src=myalumni[0].src;
	if(myalumni[0].text){
		info.innerText=myalumni[0].text;
	}
	setInterval(nextImage, displayTime);
}

function setUpListeners(){
	var iframe = document.getElementById('frmContent');
	console.log(iframe.innerHTML);
}