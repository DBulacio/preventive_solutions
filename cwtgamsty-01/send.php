<?php 
if(isset($_POST['submit'])) {
    echo "error; you need to submit the form!";
    exit;
}

$name = $_POST['nombre'];
$visitor_email = $_POST['email'];
$message = $_POST['comentario'];
file();

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

function file() {
    /*
    The code above is getting the different attributes of the uploaded file from the $_FILES[] array.
    */
    $name_of_uploaded_file =
    basename($_FILES['uploaded_file']['name']);

    //get the file extension of the file
    $type_of_uploaded_file =
        substr($name_of_uploaded_file,
        strrpos($name_of_uploaded_file, '.') + 1);

    $size_of_uploaded_file =
        $_FILES["uploaded_file"]["size"]/1024;//size in KBs

    /*
    In the code below, we are validating the file size and type. We have the maximum allowed file ($max_allowed_file_size) size set to 100KB. The $allowed_extensions array contains the file extensions of all allowed file types. The validation code checks to see whether the file extension matches any of the extensions in the $allowed_extensions array.

    If there are errors found in the validation, the error is displayed. Else we proceed with sending the email.
    */
    //Settings
    $max_allowed_file_size = 100; // size in KB
    $allowed_extensions = array("jpg", "jpeg", "gif", "bmp");

    //Validations
    if($size_of_uploaded_file > $max_allowed_file_size )
    {
    $errors .= "\n Size of file should be less than $max_allowed_file_size";
    }

    //------ Validate the file extension -----
    $allowed_ext = false;
    for($i=0; $i<sizeof($allowed_extensions); $i++)
    {
    if(strcasecmp($allowed_extensions[$i],$type_of_uploaded_file) == 0)
    {
        $allowed_ext = true;
    }
    }

    if(!$allowed_ext)
    {
    $errors .= "\n The uploaded file is not supported file type. ".
    " Only the following file types are supported: ".implode(',',$allowed_extensions);
    }
}
?>