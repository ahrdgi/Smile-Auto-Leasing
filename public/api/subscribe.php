<?php

//Initialize variable for database credentials
$dbhost = '127.0.0.1';
$dbuser = 'ahrdgi';
$dbpass = 'Zj@$f2&nYv2C';
$dbname = 'smiledb';

$email = $_POST["email"];

//Create database connection
  $dblink = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

//Check connection was successful
  if ($dblink->connect_errno) {
     printf("Failed to connect to database");
     exit();
  }
  
  mysqli_set_charset( $dblink, "utf8" );
  
  $result = $dblink->query("insert into`contacts` (email) values ('$email');") or die($dblink->error);
?>