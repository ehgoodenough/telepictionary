var canvas, context;

window.addEventListener("load", function()
{
	canvas = document.getElementById("&");
	context = canvas.getContext("2d");
	
	canvas.addEventListener("mousemove", continueScribbling, false);
	
	var sigmax = 0, sigmay = 0, thetax = 0, thetay = 0;
	
	function continueScribbling(event)
	{
		sigmax = thetax;
		sigmay = thetay;
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
}, false);