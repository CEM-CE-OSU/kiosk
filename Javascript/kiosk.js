var menuItems=new Array();
var maxColumns=2;
var blnSubMenu=false;
baseURL=window.location.href.split('?')[0];
var wasTouched=0;
var intSequence=0;
console.log(queryObj()["menu"]);
//Choses which menu should be rendered.
switch (queryObj()["menu"]){
//renders the Menu items for the CEM menu.
case "CEM":
	menuItems[menuItems.length]=new menuItem("CEM Composites", "MenuItems/cem1969.png", "showPage('StaticHTML/cemcomp.html', '1080');");
	menuItems[menuItems.length]=new menuItem("CEM Program Formation", "MenuItems/cemearly.png", "showPage('StaticHTML/cemearly.html', '1080');");
	menuItems[menuItems.length]=new menuItem("CEM in the 70's", "MenuItems/70s.png", "showPage('StaticHTML/70s.html', '1080');");
	menuItems[menuItems.length]=new menuItem("CEM in the 80's", "MenuItems/80s.png", "showPage('StaticHTML/80s.html', '1080');");
	menuItems[menuItems.length]=new menuItem("CEM in the 90's", "MenuItems/90s.png", "showPage('StaticHTML/90s.html', '1080');");
	menuItems[menuItems.length]=new menuItem("CEM in the 2000's", "MenuItems/2000s.png", "showPage('StaticHTML/2000s.html', '1080');");
	menuItems[menuItems.length]=new menuItem("CEM Today", "MenuItems/cemtoday.png", "showPage('StaticHTML/cemtoday.html', '1080');");
	blnSubMenu = true;
	break;
//renders the menu items for the CCE page.
//TODO: Add more catigories and menu items.
case "CE":
	menuItems[menuItems.length]=new menuItem("CE Composites", 'MenuItems/1954.jpg', "showPage('StaticHTML/cecomp.html', '1080');");
	blnSubMenu = true;
	break;
	
//renders the default landing menu Where you will have three choices either CEM, CCE or Campus Map
default:
	menuItems[menuItems.length]=new menuItem("Campus Map", "MenuItems/map.png", "showPage('StaticHTML/map.html', '1080');");
	menuItems[menuItems.length]=new menuItem("Civil Engineering", "MenuItems/CE.jpg", "changeMenu('CE')");
	menuItems[menuItems.length]=new menuItem("Construction Engineering Management (CEM)", "MenuItems/cem.jpg", "changeMenu('CEM')"); 
}
function start(){
	var divMenuItemsArea=document.getElementById('menuItemsArea');
	//divMenuItemsArea.style.width=Math.min((256*menuItems.length),767)+"px";
	for (x=0; x<menuItems.length;x++){
		//divMenuItemsArea.innerHTML+="<img src='" + menuItems[x].imageSrc + "' onclick=\"" +  menuItems[x].action + "\"><div align='center' class='menuTitle'>"+menuItems[x].name+"</div>";
		divMenuItemsArea.innerHTML+="<div class='menuFrame left' > <img border='1px' src='" + menuItems[x].imageSrc + "' onmousedown=\"" +  menuItems[x].action + "\" /> <br />"+menuItems[x].name+"</div>";
	}
	if (blnSubMenu==true){
		document.getElementById('divMenu').classList.remove('hidden');
	}
	//setInterval(go2default,unattendedTimeout);
}
function menuItem(name, imageSrc, action)
{
	this.name=name;
	this.imageSrc=imageSrc;
	this.action=action;
}
function showHome(){
	window.location.href=baseURL;
}
function changeMenu(strMenu){
	window.location.href=baseURL+"?menu="+strMenu;
}
function queryObj() {
    var result = {}, keyValuePairs = location.search.slice(1).split('&');

    keyValuePairs.forEach(function(keyValuePair) {
        keyValuePair = keyValuePair.split('=');
        result[keyValuePair[0]] = keyValuePair[1] || '';
    });

    return result;
}

function showPage(strURL, strHeight){
	document.getElementById('canvas').classList.add('hidden');
	document.getElementById('label').classList.add('hidden');
	document.getElementById('frmContent').src="";
	document.getElementById('frmContent').classList.remove('hidden');
	document.getElementById('frmContent').height=strHeight;
	document.getElementById('divMenu').classList.remove('hidden');
	document.getElementById('frmContent').src=strURL;
}
/*function go2default(){
	if (wasTouched>0) {
		wasTouched--;
		return;
	}
	if (intSequence==2) {
		showPage('faculty-ads.html', '1080');
	}
	if (intSequence==1) {
		showPage('awards.html', '1080');
	}
	if (intSequence==0) {
		showPage('events.html', '1080');
	}
	intSequence++;
	if (intSequence>2) intSequence=0;

}*/
function touched(){
	wasTouched=2;
	//unattendedRunning=false;
}

