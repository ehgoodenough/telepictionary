<?php
if(empty($_COOKIE['telepictionary']))
{
	setcookie('telepictionary', 'text', time() + (60 * 60 * 24 * 7));
	header("location: /telepictionary/begin.htm");
}
?>

<?php
$username = "root"; $password = "";
$dsn = "mysql:host=localhost;dbname=telepictionary";
try {$db = new PDO($dsn, $username, $password);}
catch(PDOException $e) {die($e->getMessage());}
?>

<!DOCTYPE html><head><html><title>Telepictionary</title>
<script type="text/javascript" src="script.js"></script>
<link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
<?php
$telebits = 'SELECT * FROM telebits WHERE idnum NOT IN (SELECT refnum FROM telebits)';
$telebits = $db->query($telebits . 'AND type = "' . $_COOKIE['telepictionary'] . '"');

$telebits = $telebits->fetchAll(PDO::FETCH_ASSOC);
$telebit = $telebits[rand(1,count($telebits)) - 1];

if($_COOKIE['telepictionary'] == 'text')
{
	echo '<div>' . $telebit['source'] . '</div>';
	echo '<canvas id="&" width="480px" height="360px"></canvas>';
	echo '<script>manageScribbling()</script>';
}
else if($_COOKIE['telepictionary'] == 'image')
{
	echo '<img src="' . $telebit['source'] . '"/>';
	echo '<input id="&" type="text" maxlength="25" autofocus/>';
}
?>
<button onclick="submitInformation()">Submit</button>
</body>
</html>