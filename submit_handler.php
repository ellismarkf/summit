<?php
if(isset($_POST['submit'])){
    $to = "info@group206.com"; 
    $from = $_POST['email'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $subject = "Summit Client Contact Form Submission";
    $message = "Name:" . "\n" . $name . "\n\n Email:" . $from . "\n\n Phone #:" . $phone;

    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);

    header('Location: http://traintrifecta.com/summit');
    // echo "Contact info sent. Thank you " . $name . ", we will contact you shortly!";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>