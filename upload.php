<?php

$refnum = $_POST['refnum'];
$source = $_POST['source'];
$type = $_POST['type'];

if($_POST['type'] == 'image')
{
	$source = substr($source, strpos($source, ",") + 1);
	$source = base64_decode($source);
	
	file_put_contents('3242435.png', $source);
	
	$source = '3242435.png';
}

$username = "root"; $password = ""; $dsn = "mysql:host=localhost;dbname=telepictionary";
try {$db = new PDO($dsn, $username, $password);} catch(PDOException $e) {die($e->getMessage());}

$insertion = $db->prepare("INSERT INTO telebits(refnum, source, type) VALUES(:refnum, :source, :type);");
$insertion->execute(array(':refnum' => $refnum, 'source' => $source, ':type' => $type));

?>