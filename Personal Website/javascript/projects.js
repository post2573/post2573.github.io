var galWindow = document.getElementById("galWindow");
var close = document.getElementById("close");
var currentPhoto = document.getElementById("slide-image");
var gallery = document.getElementsByTagName("img");

function imageDisplay(pic)	{
	document.getElementById("galWindow").style.display = "block";
	document.getElementById("slide-image").src = document.getElementsByTagName("img")[pic-1].src;
	document.getElementById("caption").innerHTML = document.getElementsByTagName("img")[pic-1].alt;
}

function closeWindow()	{
	document.getElementById("galWindow").style.display = "none";
}