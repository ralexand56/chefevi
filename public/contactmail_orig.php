<?php
$u_name=$_POST['username'];
$u_email=$_POST['useremail'];
$u_phone=$_POST['userphone'];
$u_subject=$_POST['usersubject'];
$u_msg=$_POST['user_msg'];
if(trim($u_name)!="Your Name" && trim($u_email)!="Your email" && trim($u_phone)!="Your phone" && trim($u_msg)!="Your question" && trim($u_subject)!="Your subject" && trim($u_name)!="" && trim($u_email)!="" && trim($u_phone)!="" && trim($u_msg)!="" && trim($u_subject)!="")
{
	if(filter_var($u_email, FILTER_VALIDATE_EMAIL))
	{
		$message="Hi Admin..
			<p> User Name is : ".$u_name." has sent a query</p>
			<p>Email Mail Id is : ".$u_email."</p>
			<p>Phone Number is: ".$u_phone."</p>
			<p>Event Date is: ".$u_subject."</p>
			<p>Message is : ".$u_msg."</p>";
		
		$message_user="Hi ".$u_email."<p> Thank you so much for your interest. <br> A team member will get back to you ASAP.</p><p>Have a great day!</p>";
		
		
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
		$headers .= 'From: <evi@chefevi.com>' . "\r\n";

		if(mail('evi@chefevi.com','Quote Request for Chef Evi',$message,$headers ))
		{
		mail($u_email,'Reply from Chef Evi',$message_user,$headers );
			
		echo '1#<p style="color:green;">Mail has been sent successfully.</p>';
		}
		else
		{
		echo '2#<p style="color:red;">Please, Try Again.</p>';
		}
	}
	else
		echo '2#<p style="color:red">Please, provide valid Email.</p>';
}
else
{
echo '2#<p style="color:red">Please, fill all the details.</p>';
}?>