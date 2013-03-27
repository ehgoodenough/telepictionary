function manageScribbling()
{
	var color = "#FA00FA";
	
	var isScribbling = false;
	var sigmaX = 0, sigmaY = 0;
	var thetaX = 0, thetaY = 0;
	
	var backscreen = document.getElementById("&");
	var frontscreen = document.getElementById("&!");
	
	var width = 480; //frontscreen.offsetWidth;
	var height = 360; //frontscreen.offsetHeight;
	
	var currentCanvaslayer = -1;
	instantiateCanvaslayer();
	
	window.addEventListener("keydown", eraseScribbling, false);
	
	frontscreen.addEventListener("mouseup", quitScribbling, false);
	frontscreen.addEventListener("mouseout", quitScribbling, false);
	frontscreen.addEventListener("mousedown", beginScribbling, false);
	frontscreen.addEventListener("mousemove", continueScribbling, false);
	
	undotag = document.createElement("span");
	undotag.setAttribute("style", "color:white; background-color:black");
	undotag.appendChild(document.createTextNode("UNDO"));
	undotag.onclick = function() {eraseScribbling();};
	document.getElementById("panel").appendChild(undotag);
	
	function instantiateCanvaslayer()
	{
		currentCanvaslayer++;
		
		canvaslayer = document.createElement("canvas");
		canvaslayer.setAttribute("width", width + "px");
		canvaslayer.setAttribute("height", height + "px");
		canvaslayer.setAttribute("id", "&" + currentCanvaslayer);
		
		backscreen.insertBefore(canvaslayer, frontscreen);
	}
	
	function beginScribbling(event)
	{
		event.preventDefault();
		instantiateCanvaslayer();
		continueScribbling(event);
		isScribbling = true;
	}
	
	function quitScribbling(event)
	{
		continueScribbling(event);
		isScribbling = false;
	}
	
	function continueScribbling(event)
	{
		var id = "&" + currentCanvaslayer;
		var canvas = document.getElementById(id);
		var context = canvas.getContext("2d");
		
		sigmaX = thetaX; sigmaY = thetaY;
		
		thetaX = event.clientX - canvas.offsetLeft + window.pageXOffset - 1;
		thetaY = event.clientY - canvas.offsetTop + window.pageYOffset - 1;
		
		if(isScribbling)
		{
			context.strokeStyle = color;
			context.lineCap = "round";
			context.lineWidth = 5;
			
			context.beginPath();
			context.moveTo(sigmaX, sigmaY);
			context.lineTo(thetaX, thetaY);
			context.stroke();
		}
	}
	
	function eraseScribbling()
	{
		if(currentCanvaslayer == 0) {return;}
		var id = "&" + currentCanvaslayer;
		var canvaslayer = document.getElementById(id);
		backscreen.removeChild(canvaslayer);
		currentCanvaslayer--;
	}
	
	redtag = document.createElement("span");
	redtag.setAttribute("style", "background-color:red");
	redtag.onclick = function() {color = "red";};
	bluetag = document.createElement("span");
	bluetag.setAttribute("style", "background-color:blue");
	bluetag.onclick = function() {color = "blue";};
	greentag = document.createElement("span");
	greentag.setAttribute("style", "background-color:green");
	greentag.onclick = function() {color = "green";};

	document.getElementById("panel").appendChild(redtag);
	document.getElementById("panel").appendChild(bluetag);
	document.getElementById("panel").appendChild(greentag);
}

function submitInformation(refnum)
{
	var source;
	
	var type = decodeURIComponent(document.cookie.match("(^|;)[\s]*telepictionary=([^;]*)")[2]);
	
	if(type == "image")
	{
		document.cookie = "telepictionary=text; max-age=3600;";
		
		var base = document.getElementById("&0").getContext("2d");
		var layers = document.getElementById("&").childNodes;
		for(var num = 0; num < layers.length - 1; num++)
		{base.drawImage(layers[num], 0, 0);}
		
		source = document.getElementById("&0").toDataURL("image/png");
	}
	else if(type == "text")
	{
		document.cookie = "telepictionary=image; max-age=3600;";
		source = document.getElementById("&").value;
	}
	
	var ajax = new XMLHttpRequest();
	ajax.open("POST", "upload.php", false);
	
	source = encodeURIComponent(source);
	
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded;");
	ajax.setRequestHeader("Content-length", source.length);
	ajax.setRequestHeader("Connection", "close");
	
	ajax.onreadystatechange = function()
	{
		if (ajax.readyState == 4)
		{
			console.log(ajax.responseText);
		}
	}
	
	ajax.send("refnum=" + refnum + "&type=" + type + "&source=" + source);
	
	window.location = "/telepictionary";
}