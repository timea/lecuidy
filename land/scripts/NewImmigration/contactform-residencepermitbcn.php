<!DOCTYPE html>
<html lang="en">
<body>
<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if(!empty($_POST['contactname']) && !empty($_POST['contactemail'])) {
	$to = 'marc.mozos@gmail.com, jamil@lequidy.com, federichardson@gmail.com'; // Your e-mail address here.
	$body = "Name: {$_POST['contactname']}\nEmail: {$_POST['contactemail']}\nPhone: {$_POST['contactphone']}\n\nMessage: {$_POST['contactmessage']}";
	mail($to, "Message from Landing Residence Permit Barcelona", $body, "From: {$_POST['contactemail']}"); // E-Mail subject here.
    }
}
?>
</body>
</html>