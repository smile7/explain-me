<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>ExplainMe</title>
    
    <link rel="stylesheet" type="text/css" href="css/styles.css"/>
    <link rel='stylesheet' type='text/css' href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah">
    
    <script src="js/gameLogic.js"></script>
    <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
</head>

<body class="home">
    <div class="wrapper">
        <?php include('partials/header.html'); ?>

        <section>
            <div class="content">
                <div class="home-page-logo">
                    ExplainME
                </div>
            </div>
        </section>

        <?php include('partials/footer.html'); ?>
    </div>
<?php /*

$action = isset($_GET['action']) ?
    $_GET['action'] : 'add';

$partial = 'partials/' . $action . '.html';

if (file_exists($partial)) {
  echo file_get_contents($partial);
}
*/ ?>
</body>
</html>