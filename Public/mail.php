<?php
if(isset( $_POST['name']))
$name = $_POST['name'];

if(isset( $_POST['email']))
$email = $_POST['email'];

if(isset( $_POST['message']))
$email = $_POST['message'];

// if(isset( $_POST['newsletter']))
// $email = $_POST['newsletter'];

// if(isset( $_POST['contact-pref']))
// $email = $_POST['contact-pref'];



$content="From: $name";
$recipient = "xyz@pqr.com";
$subject = "Message From Viewers";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
echo "Email sent!";
?>
