<?php 
if(isset($_POST['submit'])) {
    echo "error; you need to submit the form!";
    exit;
}

$name = $_POST['nombre'];
$visitor_email = $_POST['email'];
$message = $_POST['comentario'];

if(empty($name) || empty($visitor_email)) {
    echo "Name and email are mandatory!";
    exit;
}

$my_email = "db2166419@gmail.com";
$email_subject = "New mail from ".$name;
$email_body = "You have received a new message from $name.\n".
    "email address: $visitor_email\n".
    "Here is the message:\n $message";

$to = "db2166419@gmail.com";
$headers = "From: $visitor_email\r\n";

mail($to, $email_subject, $email_body, $headers);
echo "Success!";
?>