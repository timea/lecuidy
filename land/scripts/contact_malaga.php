<!DOCTYPE html>
<html lang="en">
    <body>
<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if(!empty($_POST['contactname']) && !empty($_POST['contactemail'])) {
	$to = 'marc.mozos@gmail.com, jamil@lequidy.com, federichardson@gmail.com'; // Your e-mail address here.
	$body = "Name: {$_POST['contactname']}\nEmail: {$_POST['contactemail']}\nPhone: {$_POST['contactphone']}\n\nMessage: {$_POST['contactmessage']}";
	mail($to, "Message from Landing Malaga", $body, "From: {$_POST['contactemail']}"); // E-Mail subject here.
    }
}
?>




<!-- Google Code for Lead Conversion Page -->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 964363036;
var google_conversion_label = "fuqbCNq8x3oQnIbsywM";
var google_conversion_value = 1.00;
var google_conversion_currency = "EUR";
var google_remarketing_only = false;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/964363036/?value=1.00&amp;currency_code=EUR&amp;label=fuqbCNq8x3oQnIbsywM&amp;guid=ON&amp;script=0"/>
</div>
</noscript>


</body>

</html>