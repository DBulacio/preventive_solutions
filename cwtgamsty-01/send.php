<?php
if(isset($_POST['submit'])) {
    echo "error; you need to submit the form!";
    exit;
}

$visitor_email = $_POST['email'];
$name = $_POST['name'];
if(isset($_POST['message'])) {
    $message = "Here is the message:\n".$_POST['message'];
} else {
    $message = "There is no message!";
}

if(empty($name) || empty($visitor_email)) {
    echo "Name and email are mandatory!";
    exit;
}

$requested_service = find_requested_service($_POST['requested_service']);

$subjectMail = "New message from " . $name;

$email_body = "You have received a new message from $name.\n".
    "• E-Mail address: $visitor_email\n".
    "• Requested Service: $requested_service\n".
    "• $message";

$headers = '';
$headers .= "Reply-To: ".$visitor_email."\r\n";
$headers .= "Return-Path: ".$visitor_email."\r\n";
$headers .= "From: ".$visitor_email."\r\n";
$headers .= "Organization: Sender Organization\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
$headers .= "X-Priority: 3\r\n";
$headers .= "X-Mailer: PHP". phpversion() ."\r\n";

$toMail = "db2166419@gmail.com";

try {
    if (mail($toMail, $subjectMail, $email_body, $headers)) {
        $status = 'success';
        $msg = 'Mail sent successfully.';
        echo'<script type="text/javascript">
        alert("Message send! We will get in touch soon!");
        window.location.href="../index.php";
        </script>';
    } else {
        $status = 'failed';
        $msg = 'Unable to send mail.';
        echo'<script type="text/javascript">
        alert("There was an error! Try again later.");
        window.location.href="../index.php";
        </script>';
    }
} catch(Exception $e) {
    $msg = $e->getMessage();
}

function find_requested_service($s) {
    switch($s) {
        case 1:
            return "Air Conditioner Repair";
        case 2:
            return "Paint";
        case 3:
            return "Electricity";
        case 4:
            return "Lighting Fixtures";
        case 5:
            return "Electrical Appliances for your Kitchen";
        case 6:
            return "Electrical Appliances for your Home";
        case 7:
            return "Plumbing";
        case 8:
            return "Plumbing for your Kitchen and Laundry Room";
        case 9:
            return "Plumbing for your bathroom";
        case 10:
            return "Gas fitter for your home";
        case 11:
            return "Gas fitter for your kitchen";
        case 12:
            return "Floating floor and carpets";
        case 13:
            return "Blacksmithing";
        case 14:
            return "Furnishing";
        case 15:
            return "Small jobs for your home";
        case 16:
            return "Other";
        default:
            return "No Service Selected";
    }
}
?>