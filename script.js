window.addEventListener("load", manageScribbling, false);

function manageScribbling()
{
	var isScribbling = false;
	var sigmaX = 0, sigmaY = 0;
	var thetaX = 0, thetaY = 0;
	
	var canvas, context;
	canvas = document.getElementById("&");
	context = canvas.getContext("2d");
	
	canvas.addEventListener("mouseup", quitScribbling, false);
	canvas.addEventListener("mouseout", quitScribbling, false);
	canvas.addEventListener("mousedown", beginScribbling, false);
	canvas.addEventListener("mousemove", continueScribbling, false);
	
	function beginScribbling(event) {continueScribbling(event); isScribbling = true;}
	function quitScribbling(event) {continueScribbling(event); isScribbling = false;}
	
	function continueScribbling(event)
	{
		sigmaX = thetaX; sigmaY = thetaY;
		
		thetaX = event.clientX - canvas.offsetLeft - 1;
		thetaY = event.clientY - canvas.offsetTop - 1;
		
		if(isScribbling)
		{
			context.strokeStyle = "#FA00AF";
			context.lineCap = "round";
			context.lineWidth = 5;
			
			console.log("!");
			context.beginPath();
			context.moveTo(sigmaX, sigmaY);
			context.lineTo(thetaX, thetaY);
			context.stroke();
		}
	}
}

function submitInformation()
{
	var cookie = decodeURIComponent(document.cookie.match("(^|;)[\s]*telepictionary=([^;]*)")[2]);
	
	if(cookie == "image") {document.cookie = "telepictionary=text; max-age=60;";}
	else if(cookie == "text") {document.cookie = "telepictionary=image; max-age=60;";}
	
	window.location = "/telepictionary";
}