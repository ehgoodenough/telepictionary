<?php
if(empty($_COOKIE['telepictionary']))
{
	setcookie('telepictionary', 'text', time() + 60, '/', 'localhost');
}
?>

<!DOCTYPE html><head><html><title>Telepictionary</title>
<script type="text/javascript" src="script.js"></script>
<link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
<?php
if($_COOKIE['telepictionary'] == 'text')
{
	echo '<canvas id="&" width="480px" height="360px"></canvas>';
	echo '<script>manageScribbling()</script>';
}
else if($_COOKIE['telepictionary'] == 'image')
{
	echo '<input id="&" type="text"/>';
}
?>
<button onclick="submitInformation()">Submit</button>
</body>
</html>