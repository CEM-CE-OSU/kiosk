
function showMenu(){
 //document.getElementById('divMenu').style.visibility='visible';
}
function showMenuItems(){

	document.getElementById('frmContent').style.visibility='hidden';
	document.getElementById('divMenuItems').style.visibility='visible';
	document.getElementById('imgLeftArrow').style.visibility='hidden';
	document.getElementById('imgRightArrow').style.visibility='hidden';
	document.getElementById('divMenu').style.visibility='hidden';
}
function showImages(strURL){
	document.getElementById('divMenu').style.visibility='visible';
	document.getElementById('divMenuItems').style.visibility='hidden';
	document.getElementById('frmContent').src=strURL;
	document.getElementById('frmContent').style.visibility='visible';
	document.getElementById('imgLeftArrow').style.visibility='visible';
	document.getElementById('imgRightArrow').style.visibility='visible';
	document.getElementById('frmContent').contentDocument.startShow();
}

function start(){

}
