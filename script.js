var canvas, context;

window.addEventListener("load", function()
{
	canvas = document.getElementById("&");
	context = canvas.getContext("2d");
	
	canvas.addEventListener("mouseup", quitScribbling, false);
	canvas.addEventListener("mouseout", quitScribbling, false);
	canvas.addEventListener("mousedown", beginScribbling, false);
	canvas.addEventListener("mousemove", continueScribbling, false);
	
	function beginScribbling(event) {continueScribbling(event); isScribbling = true;}
	function quitScribbling(event) {continueScribbling(event); isScribbling = false;}
	
	var isScribbling = false;
	var sigmax = 0, sigmay = 0;
	var thetax = 0, thetay = 0;
	
	function continueScribbling(event)
	{
		if(isScribbling)
		{
			sigmax = thetax; sigmay = thetay;
			
			thetax = event.clientX;
			thetay = event.clientY;
			
			context.strokeStyle = "#FA00AF";
			context.lineCap = "round";
			context.lineWidth = 5;

			context.beginPath();
			context.moveTo(sigmax, sigmay);
			context.lineTo(thetax, thetay);
			context.stroke();
		}
	}
}, false);