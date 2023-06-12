<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

//Gets the IP Address from the visitor
$PublicIP = $_SERVER['REMOTE_ADDR'];
//Uses ipinfo.io to get the location of the IP Address, you can use another site but it will probably have a different implementation
function curlRequest($url) {
   $c = curl_init();
   curl_setopt($c, CURLOPT_URL, $url);
   curl_setopt($c, CURLOPT_RETURNTRANSFER, true);
   $data = curl_exec($c);
   curl_close($c);
   return $data;
}
$json = curlRequest('https://ipinfo.io/'.$PublicIP.'/geo');
// $json     = file_get_contents("http://ipinfo.io/$PublicIP/geo");
//Breaks down the JSON object into an array
$json     = json_decode($json, true);
//This variable is the visitor's county
$country1  = $json['country'];
//This variable is the visitor's region
$region   = $json['region'];
//This variable is the visitor's city
$city     = $json['city'];

$user_agent = $_SERVER['HTTP_USER_AGENT'];

function getOS() { 

    global $user_agent;

    $os_platform  = "Unknown OS Platform";

    $os_array     = array(
                          '/windows nt 10/i'      =>  'Windows 10',
                          '/windows nt 6.3/i'     =>  'Windows 8.1',
                          '/windows nt 6.2/i'     =>  'Windows 8',
                          '/windows nt 6.1/i'     =>  'Windows 7',
                          '/windows nt 6.0/i'     =>  'Windows Vista',
                          '/windows nt 5.2/i'     =>  'Windows Server 2003/XP x64',
                          '/windows nt 5.1/i'     =>  'Windows XP',
                          '/windows xp/i'         =>  'Windows XP',
                          '/windows nt 5.0/i'     =>  'Windows 2000',
                          '/windows me/i'         =>  'Windows ME',
                          '/win98/i'              =>  'Windows 98',
                          '/win95/i'              =>  'Windows 95',
                          '/win16/i'              =>  'Windows 3.11',
                          '/macintosh|mac os x/i' =>  'Mac OS X',
                          '/mac_powerpc/i'        =>  'Mac OS 9',
                          '/linux/i'              =>  'Linux',
                          '/ubuntu/i'             =>  'Ubuntu',
                          '/iphone/i'             =>  'iPhone',
                          '/ipod/i'               =>  'iPod',
                          '/ipad/i'               =>  'iPad',
                          '/android/i'            =>  'Android',
                          '/blackberry/i'         =>  'BlackBerry',
                          '/webos/i'              =>  'Mobile'
                    );

    foreach ($os_array as $regex => $value)
        if (preg_match($regex, $user_agent))
            $os_platform = $value;

    return $os_platform;
}

function getBrowser() {

    global $user_agent;

    $browser        = "Unknown Browser";

    $browser_array = array(
                            '/msie/i'      => 'Internet Explorer',
                            '/firefox/i'   => 'Firefox',
                            '/safari/i'    => 'Safari',
                            '/chrome/i'    => 'Chrome',
                            '/edge/i'      => 'Edge',
                            '/opera/i'     => 'Opera',
                            '/netscape/i'  => 'Netscape',
                            '/maxthon/i'   => 'Maxthon',
                            '/konqueror/i' => 'Konqueror',
                            '/mobile/i'    => 'Handheld Browser'
                     );

    foreach ($browser_array as $regex => $value)
        if (preg_match($regex, $user_agent))
            $browser = $value;

    return $browser;
}


function getUserIP() {
    if( array_key_exists('HTTP_X_FORWARDED_FOR', $_SERVER) && !empty($_SERVER['HTTP_X_FORWARDED_FOR']) ) {
        if (strpos($_SERVER['HTTP_X_FORWARDED_FOR'], ',')>0) {
            $addr = explode(",",$_SERVER['HTTP_X_FORWARDED_FOR']);
            return trim($addr[0]);
        } else {
            return $_SERVER['HTTP_X_FORWARDED_FOR'];
        }
    }
    else {
        return $_SERVER['REMOTE_ADDR'];
    }
}

$user_os        = getOS();
$user_browser   = getBrowser();
$user_ip        = getUserIP();

$email = $_POST['email'];

$mail = new PHPMailer(true);

try {
  $mail->SMTPOptions = [
    'ssl' => [
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true,
    ]
];

$mail->SMTPDebug = 0;
$mail->isSMTP();
$mail->Host = 'mail.dreameraruba.com';
$mail->SMTPAuth = true;
$mail->Username   = 'enquiry@dreameraruba.com';
$mail->Password = 'dreamerarubacodedaddy';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;       
$mail->setFrom('enquiry@dreameraruba.com', 'Aruba');
//$mail->addAddress($email,'Email');
$mail->addAddress('laxmi.codedaddy@gmail.com');
//$mail->addCC('aggarwalrahul1920@gmail.com');
$mail->isHTML(true);                                  //Set email format to HTML
$mail->Subject = 'Tours To Aruba';
$mail->Body    = '<html>
    <head><title>NewsLetter Subscription</title></head>
    <body>
    <p><b>Hi </b>'.$email.'</p>
<p><b>Thank You,</b> For Your Mail</p>
<p>OS Name : '.$user_os.'</p>
<p>Browser Name : '.$user_browser.'</p>
<p>IP : '.$user_ip.'</p>
<p>User Location'.$country1.' '.$region.' '.$city.'</p>
<p>Date : '.$user_date.'</p>
<p>TIme : '.$user_time.'</p>
</body>
</html>';
    $mail->AltBody = 'Tours To Aruba';
    /*NORMAL email*/
    $to = 'support@bharatarpanet.com';
    $subject = 'Tours To Aruba';
    $msg = '<html>
    <head><title>NewsLetter Subscription</title></head>
    <body>
    <p><b>Hi </b>'.$email.'</p>
<p><b>Thank You,</b> For Your Mail</p>
<p>OS Name : '.$user_os.'</p>
<p>Browser Name : '.$user_browser.'</p>
<p>IP : '.$user_ip.'</p>
<p>User Location'.$country1.' '.$region.' '.$city.'</p>
<p>Date : '.$user_date.'</p>
<p>TIme : '.$user_time.'</p>
</body>
</html>';
    $headers = "MIME-Version: 1.0" . "\r\n"; 
    $headers .= 'From: Aruba<webmaster@websites4demo.com>' . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

     // if($mail->send())
    if(mail($to, $subject, $msg, $headers)) {
        echo 'success';
    } else {
       echo "error";
    }
} catch (Exception $e) {
    echo "error";
}
?>