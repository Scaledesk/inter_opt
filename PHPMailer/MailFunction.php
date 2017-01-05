<?php
require 'PHPMailerAutoload.php';
$mail = new PHPMailer;
$mail1 = new PHPMailer;
$email=$_POST['email']; 
$phone=$_POST['phone'];
$name=$_POST['name'];
$text=$_POST['message'];

$emailadmin="nkscoder@gmail.com";
/*$emailadmin="sanat@interioroptions.in";*/

/*$emailsubadmin="lakhani@scaledesk.com";*/
/*$namefrom=$_POST['pagefrom'];*/
$subject = "Enquiry";
$Usersubject="Thank You";
$messageUsers=file_get_contents('template.html');
$message ='<html>
<body>
<div id="abcd" style="text-align:justify;font-size:18px;"> Name:-'.$name.'<br> Email:-'.$email.'<br>Phone:-'.$phone.'<br>Message :-'.$text.'</div>
</body>
</html>';




$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'webmail.interioroptions.in';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'sanat@interioroptions.in';                 // SMTP username
$mail->Password = 'newyork@1983';                           // SMTP password
$mail->SMTPSecure = 'TLS';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;// TCP port to connect to
$mail->IsHTML(true);
$mail->setFrom('sanat@interioroptions.in', 'Interior Options');
//$mail->addAddress('ellen@example.com');               // Name is optional
$mail->addReplyTo('sanat@interioroptions.in', 'noreply');

$mail1->isSMTP();                                      // Set mailer to use SMTP
$mail1->Host = 'webmail.interioroptions.in';  // Specify main and backup SMTP servers
$mail1->SMTPAuth = true;                               // Enable SMTP authentication
$mail1->Username = 'sanat@interioroptions.in';                 // SMTP username
$mail1->Password = 'newyork@1983';                           // SMTP password
$mail1->SMTPSecure = 'TLS';                            // Enable TLS encryption, `ssl` also accepted
$mail1->Port = 465;// TCP port to connect to
$mail1->IsHTML(true);
$mail1->setFrom('sanat@interioroptions.in', 'Interior Options');


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
  echo 'Mailer Error: ' . $mail1->ErrorInfo;
} else {
    // return "ok";
            if($mail->send()){
                   echo "ok";

            
               /* echo "thankyou";*/
               /* header("location: ../index.html");*/
            }else{
                     echo "no";

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