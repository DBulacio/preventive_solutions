<?php 
if(isset($_POST['submit'])) {
    echo "error; you need to submit the form!";
    exit;
}

$name = $_POST['name'];
$visitor_email = $_POST['email'];
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

$my_email = "db2166419@gmail.com";
$email_subject = "New message from ".$name;
$email_body = "You have received a new message from $name.\n".
    "• E-Mail address: $visitor_email\n".
    "• Requested Service: $requested_service\n".
    "• $message";

$to = "db2166419@gmail.com";
$headers = "From: $visitor_email\r\n";

if(mail($to, $email_subject, $email_body, $headers)) {
    echo'<script type="text/javascript">
    alert("Message send! We will get in touch soon!");
    window.location.href="../index.php";
    </script>';
} else {
    echo'<script type="text/javascript">
    alert("There was an error! Try again later.");
    window.location.href="../index.php";
    </script>';
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