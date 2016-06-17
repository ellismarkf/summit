<?php
if(isset($_POST['submit'])){
    // $to = "info@group206.com";
    $to = "ellismarkf@gmail.com";
    $from = $_POST['email'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $msg = $_POST['msg'];
    $subject = "Summit Client Contact Form Submission";
    $message = "Name:" . "\n" . $name . "\n\n Email:\n" . $from . "\n\n Phone #:\n" . $phone . "\n\n Message:\n" . $msg;

    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);

    header('Location: http://traintrifecta.com/summit');
    // echo "Contact info sent. Thank you " . $name . ", we will contact you shortly!";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>