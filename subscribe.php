<?php
//get data from form  

$email= $_POST['email'];
$to = "your email";
$subject = "Mail From website";
$txt ="Email = " . $email . ;
$headers = "From: noreply@yoursite.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("index.html");
?>