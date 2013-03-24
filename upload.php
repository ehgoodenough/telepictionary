<?php

if($_POST['type'] == 'image')
{
	$source = $_POST['source'];
	$source = substr($source, strpos($source, ",") + 1);
	$source = base64_decode($source);
	
	file_put_contents('3242435.png', $source);
}

echo $_POST['refnum'] . " @ " . $_POST['type'] . " = " . $_POST['source'];

?>