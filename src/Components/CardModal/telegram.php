<?php

/* https://api.telegram.org/bot5750875556:AAFhhGdNdBOlio90NRFOUbAJnCVeaUVmE14/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$userId = $_POST['userId'];
$userName = $_POST['userName'];
$purchase = $_POST['purchase'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$promo = $_POST['promo'];
$adres = $_POST['adres'];
$postcode = $_POST['postcode'];

$token = "5750875556:AAFhhGdNdBOlio90NRFOUbAJnCVeaUVmE14";
$chat_id = "-868376540";
$arr = array(
  'userID: ' => $userId,
  'userName: ' => $userName,
  'Заказ: ' => $purchase,
  'ФИО: ' => $name,
  'Телефон: ' => $phone,
  'Promo: ' => $promo,
  'Адрес: ' => $adres,
  'Почтовый индекс: ' => $postcode
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// $sendToTelegram2 = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram /*&& $sendToTelegram2*/) {
  header('Location: https://xn----btbfgaur7bm.xn--p1acf/');
} else {
  echo "Error";
}
?>