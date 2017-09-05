var buffer=0;
var position=0;
var pause=0;
var myalumni = new Array(); //array that keeps holds photos.
var arrowDelay=0;
// Adjust below values as needed.
var displayTime=10000; //Amount of time each image is displayed (in milliseconds). 
var pauseMult=10; //If a user uses the scrollwheel, the normal displayTime will be multiplied by this value.
var zoomIn=1600;
var zoomOut=980;
//var unattendedTimeout=180000;
var intSequence=0;

//this function moves to the next image in the slide show
//This function is called when the right arrow is pressed in a slide show
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

//This fuction moves to the previous image in the slide show
//This function is called when the left arrow is pressed.
function prevImage(delay){
	if (delay){
		pause=pauseMult;
	}
	animate(-1);
}

//This function actually displays the photo on the page
//If the number passed in is negitive it will move backwards
//if its possitive it will move forward.
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

//This function zooms
function zoom(){
	document.getElementById("composite").height=zoomIn;
}

//this function preloads the images. Its called from another
//JS file that corespondes to each page bcause each page
//has different photos.
function preloading(){
	for (x=0; x<preloading.arguments.length; x++){
	myalumni[x] = new Image();
	//alert(preloading.arguments[x][1]);
	myalumni[x].src = preloading.arguments[x][0];
	myalumni[x].text=preloading.arguments[x][1];
	}
}

//This function is called on loading for each
//slide show page and starts the slide show.
function startShow(){
	e=document.getElementById("composite");
	info=document.getElementById("divInfo");
	e.src=myalumni[0].src;
	if(myalumni[0].text){
		info.innerText=myalumni[0].text;
	}
	setInterval(nextImage, displayTime);
}
