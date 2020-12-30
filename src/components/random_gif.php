<?php
    $url = "https://api.tenor.com/v1/search?q=runescape&key=LIVDSRZULELA&limit=26";

    // cURL performs better than file_get_contents
    $stream = curl_init();
    curl_setopt($stream, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($stream, CURLOPT_URL, $url);
    $json = json_decode(curl_exec($stream), true);
    $gif = $json["results"][rand(0, 25)]["media"][0]["gif"]["url"];
    //echo "<img src=".$gif.">";
    curl_close($stream);
?>