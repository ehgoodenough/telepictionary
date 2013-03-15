<?php
if(empty($_COOKIE['telepictionary']))
{
	setcookie( 'telepictionary', 'text', time() + 60, "/", "localhost");
}
?>

<!DOCTYPE html><head><html><title>Telepictionary</title>
<script type="text/javascript" src="script.js"></script>
<link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
<input id="@" type="text"/>
<button>Submit</button>
</body>
</html>