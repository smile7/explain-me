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

<body class="rules">
    <div class="wrapper">
        <?php include('partials/header.html'); ?>

        <section>
            <div class="content">
                <h1>Правила</h1>
                <div class="rules">
                    <p>За да играете играта, са ви нужни поне 4 човека, ограничение на броя играчи няма, стига да са четен брой. Натискайки бутона "Играй, системата ще ви предостави възможност да се разделите на отбори по 2-ма човека или, ако предпочитате, ще ви разпредели отборите произволно. И тук шоуто започва:)</p>
                    <p>Целта на всеки отбор е да познае колкото се може повече думи за 30 секунди. Системата ще ви каже кой от отбора трябва да обяснява дума, съответно съотборникът му трябва да познае обясняваните думи. След като натиснете "СТАРТ", обратно отброяване на 30 секунди започва. При позната дума от играча, обясняващият трябва да натисне бутона <strong>space</strong> от клавиатурата и 1 точка се добавя в архива на отбора. Ако решите, че тази дума съотборникът ви няма да я познае, независимо дали вече сте започнали да я обяснявате или не, или просто не искате да я обяснявате, натискате <strong>escape</strong> от клавиатурата.</p>
                    <p><strong>ВНИМАНИЕ!</strong> При три натискания на <strong>escape</strong> губите 1 точка.</p>
                    <p><strong>Внимавайте</strong> в динамиката на играта да не объркате случайно бутоните space и escape (имало е случаи:). </p>
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