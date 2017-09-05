var menuItems=new Array();
var maxColumns=2;
var blnSubMenu=false;
baseURL=window.location.href.split('?')[0];
var wasTouched=0;
var intSequence=0;
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
	blnSubMenu = true; //indicates this is a sub menu so the home button will be displayed
	break;
//renders the menu items for the CCE page.
case "CE":
	menuItems[menuItems.length]=new menuItem("CE Composites", 'MenuItems/1954.jpg', "showPage('StaticHTML/cecomp.html', '1080');");
	menuItems[menuItems.length]=new menuItem("CE Today", "MenuItems/cetoday.jpg", "showPage('StaticHTML/cetoday.html', '1080');");
	menuItems[menuItems.length]=new menuItem("CE The 2000's", "MenuItems/ce2000s.jpg", "showPage('StaticHtml/ce2000s.html', '1080');");
	menuItems[menuItems.length]=new menuItem("CE The 90's", "MenuItems/ce90s.jpg", "showPage('StaticHTML/ce90s.html', '1080');");
	menuItems[menuItems.length]=new menuItem("CE The Early Days", "MenuItems/ceEarlyDays.jpg", "showPage('StaticHTML/ceEarlyDays.html', '1080');");
	blnSubMenu = true;//indicates this is a sub menu so the home button will be displayed
	break;
//renders the default landing menu Where you will have three choices either CEM, CCE or Campus Map
default:
	menuItems[menuItems.length]=new menuItem("Campus Map", "MenuItems/map.png", "showPage('StaticHTML/map.html', '1080');");
	menuItems[menuItems.length]=new menuItem("Civil Engineering", "MenuItems/CE.jpg", "changeMenu('CE')");
	menuItems[menuItems.length]=new menuItem("Construction Engineering Management (CEM)", "MenuItems/cem.jpg", "changeMenu('CEM')"); 
}

//Runs on page loading to display the menu items on the page. 
//Which menu items will be displayed have already been determined
//through the query paramater and switch statement above.
function start(){
	var divMenuItemsArea=document.getElementById('menuItemsArea');
	//divMenuItemsArea.style.width=Math.min((256*menuItems.length),767)+"px";
	for (x=0; x<menuItems.length;x++){
		divMenuItemsArea.innerHTML+="<div class='menuFrame left' > <img border='1px' src='" + menuItems[x].imageSrc + "' onmousedown=\"" +  menuItems[x].action + "\" /> <br />"+menuItems[x].name+"</div>";
	}
	if (blnSubMenu==true){
		document.getElementById('divMenu').classList.remove('hidden');
	}
	//setInterval(go2default,unattendedTimeout);
}

//This function creates the menu item object (much like a constructor)
function menuItem(name, imageSrc, action)
{
	this.name=name;
	this.imageSrc=imageSrc;
	this.action=action;
}

//this functoin redirects the user to the home page
//This is what is run when you click the home icon
function showHome(){
	window.location.href=baseURL;
}

//This function adds a query paramater to the url
//so you can change to one of the sub menus.
function changeMenu(strMenu){
	window.location.href=baseURL+"?menu="+strMenu;
}

//splits the query object off the URL
function queryObj() {
    var result = {}, keyValuePairs = location.search.slice(1).split('&');

    keyValuePairs.forEach(function(keyValuePair) {
        keyValuePair = keyValuePair.split('=');
        result[keyValuePair[0]] = keyValuePair[1] || '';
    });

    return result;
}

//When you click on one of the menu items that 
//takes you to one of the slide shows this function
//takes the page for that slide show and puts it in the
//Iframe in the start.html file.
function showPage(strURL, strHeight){
	document.getElementById('canvas').classList.add('hidden');
	document.getElementById('label').classList.add('hidden');
	document.getElementById('frmContent').src="";
	document.getElementById('frmContent').classList.remove('hidden');
	document.getElementById('frmContent').height=strHeight;
	document.getElementById('divMenu').classList.remove('hidden');
	document.getElementById('frmContent').src=strURL;
}

//this function is run when the screen has been touched.
function touched(){
	wasTouched=2;
	//unattendedRunning=false;
}

