<?php
require 'PHPMailerAutoload.php';
$mail = new PHPMailer;
$mail1 = new PHPMailer;
$email=$_POST['email']; 
$phone=$_POST['phone'];
$name=$_POST['name'];
$text=$_POST['message'];
$hidden=$_POST['hidden'];
$emailadmin="nkscoder@gmail.com";
/*$emailsubadmin="lakhani@scaledesk.com";*/
/*$namefrom=$_POST['pagefrom'];*/
$subject = "Contact Us";
$Usersubject="Thank You for interior Option";
$messageUsers=file_get_contents('template.html');
$message ='<html>
<body>
<div id="abcd" style="text-align:justify;font-size:18px;"> Name:-'.$name.'<br> Email:-'.$email.'<br>Phone:-'.$phone.'<br>Message :-'.$text.'</div>
</body>
</html>';




$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'sub5.mail.dreamhost.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'hi@scaledesk.com';                 // SMTP username
$mail->Password = 'qazplmq1w2e3r4';                           // SMTP password
//$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;// TCP port to connect to
$mail->IsHTML(true);
$mail->setFrom('hi@scaledesk.com', 'Scaledesk Web Studio');
//$mail->addAddress('ellen@example.com');               // Name is optional
$mail->addReplyTo('hi@scaledesk.com', 'noreply');

$mail1->isSMTP();                                      // Set mailer to use SMTP
$mail1->Host = 'sub5.mail.dreamhost.com';  // Specify main and backup SMTP servers
$mail1->SMTPAuth = true;                               // Enable SMTP authentication
$mail1->Username = 'hi@scaledesk.com';                 // SMTP username
$mail1->Password = 'qazplmq1w2e3r4';                           // SMTP password
//$mail1->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail1->Port = 587;// TCP port to connect to
$mail1->IsHTML(true);
$mail1->setFrom('hi@scaledesk.com', 'Scaledesk Web Studio');


$mail->addAddress($email, $name);     // Add a recipient


$mail1->addAddress($emailadmin);     // Add a recipient
 
$mail->Subject = $Usersubject;
$mail->Body    = $messageUsers;


$mail1->Subject = $subject;
$mail1->Body    = $message;
/*    echo "<pre/>";
    print_r($mail1);die;
*/

  




   
if(!$mail1->send())
 {
      /* header("location: ../index.html");*/
      echo $message;
} else {
    // return "ok";
            if($mail->send()){
              if ($hidden=='modal'){
                  echo "string";
                     /* header("location: ../index.html");*/
              }else{
                   echo "ok";
              }
            
               /* echo "thankyou";*/
               /* header("location: ../index.html");*/
            }else{
                /*echo "string2222";
                die();*/
                /*header("location: ../index.html");*/
            }
      }
/*
else{
     

       if(isset($popupEmail)){
              $mail1->Subject =$Popupsubject;
            $mail1->Body    = $popupMessage;
           if($mail1->send()){
                      header("location: ../thankyou.html");
                    }else{
                        
                        header("location: ../index.html");
                    }

    
}
*/