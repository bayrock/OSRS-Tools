<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>OSRS Random GIF</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Old School Runescape Random GIF">
  <meta name="author" content="Bayrock">

  <?php include 'components/random_gif.php';?>
  <meta property="og:image" content="<?php echo $gif ?>">
  <meta property="og:image:type" content="image/gif">
  <meta name="twitter:card" content="summary_large_image">

  <link rel="stylesheet" href="css/style.css?v=1.2">
  <link rel="preload" href="css/glyphicons.css?v=1.01" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="css/glyphicons.css?v=1.01"></noscript>
</head>

<body class="bg-primary">
  <center>
    <h2><a class="glyphicon glyphicon-home" aria-hidden="true" href="portal.html"></a><br>

    <img src="<?php echo $gif ?>">

    <p class="alert" id="alertBox"></p>
    <p class="error" id="errorBox"></p>
  </center>

  <script src="js/util.js?v=1.01"></script>
</body>
</html>