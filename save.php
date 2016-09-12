<?php

ini_set('display_errors', 0);

function lowercase($word) {
  return mb_convert_case($word, MB_CASE_LOWER, "UTF-8");
}

function get_words($str) {
  $words = explode(',', $str);

  return $words;
}

$db_path = 'db.txt';
$fp = fopen($db_path, 'a+');


$old_words = get_words(fread($fp, filesize($db_path)));
$new_words = array_diff(get_words(trim($_POST['words'])), $old_words);

fwrite($fp, implode(',', $new_words) . ",\n");

fclose($fp);

print 'Благодаря ти! След малко те връщам назад :)';
header("refresh:4; url=./?");
