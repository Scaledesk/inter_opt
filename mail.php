<?php
/* echo json_encode("no");*/
if(isset($_POST['email'])) 
{
  
$email=$_POST['email']; 
$phone=$_POST['phone'];
$name=$_POST['name'];
$text=$_POST['message'];

//$emailadmin="nkscoder@gmail.com";
$emailadmin="sanat@interioroptions.in";
$emailadmin1="hello@yagotimber.com";
$emailadmin2="lakhani@scaledesk.com";



$subject = "Enquiry";
$Usersubject="Thank You";
$messageUsers=file_get_contents('template.html');
$message ='<html>
<body>
<div id="abcd" style="text-align:justify;font-size:18px;"> Name:-'.$name.'<br> Email:-'.$email.'<br>Phone:-'.$phone.'<br>Message :-'.$text.'</div>
</body>
</html>';

           
            

$headers = "MIME-Version: 1.0" . "\r\n";
$headers = "From:sanat@interioroptions.in\r\n";
$headers = "Content-type: text/html;charset=iso-8859-1" . "\r\n";
      if(mail($emailadmin,$subject,$message,$headers))
 {
         mail($emailadmin1,$subject,$message,$headers);
         mail($emailadmin2,$subject,$message,$headers);
         
           if(mail($email,$subject,$messageUsers,$headers)){
      
      
           echo "ok";

             } 
          else{
            
      
           echo "ok";
                 }    
       
  }
       else{
            
        echo "no";
         }
      
}
else{
   
  header("location: index.php");
}
?>