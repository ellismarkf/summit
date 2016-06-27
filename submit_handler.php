<?php
if(isset($_POST['submit'])){
    $to = "info@group206.com";
    $from = $_POST['email'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $msg = $_POST['msg'];
    $subject = "Summit Client Contact Form Submission";
    $message = "Name:" . "\n" . $name . "\n\n Email:\n" . $from . "\n\n Phone #:\n" . $phone . "\n\n Message:\n" . $msg;

    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);

    header('Location: http://traintrifecta.com/summit');
    }
?>