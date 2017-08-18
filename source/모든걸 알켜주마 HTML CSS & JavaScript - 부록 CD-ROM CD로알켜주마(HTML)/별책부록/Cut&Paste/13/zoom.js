/*
*******************************
#Document magnifying script
#Writen by Christian Patzer
#cpatzer@hotmail.com
#version 1.0.0.2
#Version 2 fixes...
#Fixed bug with table width having to be absolute 
#Fixed document bgcolor bug
#Fixed document background
#Fixed body margins
#Added double click show for zoom box
#For this script and more, visit http://www.dynamicdrive.com
*******************************
*/

//configure iframe src no script include tag
var iframeSrc = "zoom.html";

//DO NOT EDIT BELOW THIS LINE
//-------------------------------------
var tempY,tempX,initialized,X,Y;
var ie55 = false;
var firstTableWidth;

if(window.createPopup){
	
	ie55 = true;
}
else{
	ie55 = false;
}
zoomBoxHTML   = "<div id=\"zoomBox\" style=\"position:absolute;left:0;top:0;visibility:hidden\">";
zoomBoxHTML += "<table border=\"1\" width=100 height=120 bgcolor=\"#6699FF\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=black>";
zoomBoxHTML += "<tr>";
zoomBoxHTML += "<td  bgcolor=\"#EEEEEE\"  colspan=2 align=center>";
zoomBoxHTML += "<iframe src=\""+iframeSrc+"\" name=zoom  border=0 width=150 height=100  style=\"padding:0px;border:0px;\"></iframe>";
zoomBoxHTML += "</td>";
zoomBoxHTML += "</tr>";
zoomBoxHTML += "<tr>";
zoomBoxHTML += "<td OnMouseDown=\"initXY();\"  OnMouseUp=\"disable();\" style=\"cursor:hand;color:darkblue;font-size:10;font-family:굴림\" align=center>드래그하세요</td>";
zoomBoxHTML += "<td STYLE=\"cursor:hand\" align=center valign=middle><img src=\"zoomin.gif\"  OnClick=\"zoomIn()\"><img src=\"zoomout.gif\" OnClick=\"zoomOut()\"><img src=\"x.gif\" OnClick=\"hideZoomBox();\" align=absmiddle></td>";
zoomBoxHTML += "</tr>";
zoomBoxHTML += "</table>";
zoomBoxHTML += "</div>";
zoomBoxHTML += "<table border=0 cellpadding=0 cellspacing=0 width=\"100%\">"; 
zoomBoxHTML += "<tr>";
zoomBoxHTML += "<td>";

if(ie55 == true){
	document.write(zoomBoxHTML);		
}


function moveZoomBox(){
	if(initialized==true){
		zoomBox.style.pixelLeft=tempX+event.clientX-X;
		zoomBox.style.pixelTop=tempY+event.clientY-Y;
		document.frames.zoom.scrollTo(tempX+event.clientX-X,tempY+event.clientY-Y);
		return false;
	}
}

function  initXY(){
	X=event.clientX;
	Y=event.clientY;
        	document.body.onselectstart=new Function("return false")
	tempX=zoomBox.style.pixelLeft;
	tempY=zoomBox.style.pixelTop;
	initialized=true;
	document.onmousemove=moveZoomBox;	
}
function resize(){
	if(ie55 == true){
		zoomBox.style.pixelLeft=0;
		zoomBox.style.pixelTop=0;
		document.frames.zoom.scrollTo(0,0);
		document.frames.zoom.document.all.tags("TABLE")[1].width=document.body.offsetWidth-25;
	}
}

function init(){
	if(ie55 == true){
		var HTMLtoGrab = document.all.tags("HTML")[0].innerHTML;
		var HTMLtoWrite = HTMLtoGrab.replace(/<script language=javascript src=\"zoom.js\"><\/script>/i,"");
		var HTMLtoWrite = "<HTML>"+HTMLtoWrite+"</HTML>";
		zoomBox.style.visibility = "visible";
		document.frames.zoom.document.all.writeToMe.outerHTML = HTMLtoWrite;
		document.frames.zoom.document.all.zoomBox.style.visibility="hidden";
		document.frames.zoom.document.body.scroll='no';	
		document.frames.zoom.document.body.style.zoom=1.6;
		document.frames.zoom.scrollTo(0,0);
		document.frames.zoom.document.body.mergeAttributes(document.body);
		resize();	
	}
}
function zoomIn(){
	if(document.frames.zoom.document.body.style.zoom!=0) {
		document.frames.zoom.document.body.style.zoom*=1.6; 
		document.frames.zoom.document.body.scrollLeft = document.all.zoomBox.style.pixelLeft;
	}	
	else{
		document.frames.zoom.document.body.scrollLeft = document.all.zoomBox.style.pixelLeft;
		document.frames.zoom.document.body.style.zoom=1.6;
	}
}
function zoomOut(){
	if(document.frames.zoom.document.body.style.zoom!=0){
		document.frames.zoom.document.body.style.zoom*=0.625; 
	}
	else{
		document.frames.zoom.document.body.style.zoom=0.625;
	}
}
function hideZoomBox(){
	zoomBox.style.visibility="hidden";
}
function showZoomBox(){
	zoomBox.style.visibility="visible";
}
function disable(){
        	document.body.onselectstart=new Function("return true")
	initialized=false;
}
window.onload=init;
window.onresize=resize;
document.onmouseup=disable;
document.ondblclick=showZoomBox;



