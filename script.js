var canvas, context;

window.addEventListener("load", function()
{
	canvas = document.getElementById("&");
	context = canvas.getContext("2d");

	context.strokeStyle = "#FA00AF";
	context.lineCap = "round";
	context.lineWidth = 5;

	context.beginPath();
	context.moveTo(50, 100);
	context.lineTo(100, 50);
	context.stroke();
}, false);