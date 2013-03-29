<?php
if(empty($_COOKIE['user']))
{
	setcookie('user', 'andrew', time() + 3600);
}

if(empty($_COOKIE['telepictionary']))
{
	setcookie('telepictionary', 'text', time() + 3600);
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

<aside id="panel"></aside>

<?php
$telebits = 'SELECT * FROM telebits WHERE idnum NOT IN (SELECT refnum FROM telebits)';
$telebits = $db->query($telebits . 'AND type <> "' . $_COOKIE['telepictionary'] . '"');

$telebits = $telebits->fetchAll(PDO::FETCH_ASSOC);
$telebit = $telebits[rand(1,count($telebits)) - 1];

if($_COOKIE['telepictionary'] == 'image')
{
	echo '<ins>' . $telebit['source'] . '</ins>';
	echo '<div id="&"><div id="&!"></div></div>';
	echo '<script>manageScribbling()</script>';
}
else if($_COOKIE['telepictionary'] == 'text')
{
	echo '<img src="' . $telebit['source'] . '"/>';
	echo '<input id="&" type="text" maxlength="72" autofocus/>';
}

echo '<button onclick="submitInformation(' . $telebit['idnum'] . ')">Submit</button>';
?>

</body>
</html>