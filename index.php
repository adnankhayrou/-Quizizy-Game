

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- CSS -->
    <link rel="stylesheet" href="./assets/sass/sass.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>
<body class="bodyy">
    <!-- NAVBAR -->
    <nav>
        <div class="navBar">
            <div class="logo"><a href="index.html">Quizizy</a></div>
            <div class="links">
                <div><a href="#">Contact</a></div>
                <div><a href="#">Info</a></div>
                <div><a href="#"><i class="fab fa-instagram"></i></a></div>
                <div><a href="#"><i class="fab fa-twitter"></i></a></div>
            </div>
        </div>
    </nav>

<!-- STEPPER -->
    <div class="stepper">
        <div class="step active">
          <div class="step-icon"><i class="bi bi-info"></i></div>
          <div class="step-label">Informations</div>
        </div>
        <div class="step">
          <div class="step-icon"><i class="bi bi-question"></i></div>
          <div class="step-label">Quiz</div>
        </div>
        <div class="step">
          <div class="step-icon"><i class="bi bi-list-check"></i></div>
          <div class="step-label">Results</div>
        </div>
      </div>

      <!-- timerBar component -->
      <div id="progress-bar">
        <div id="progress-bar-inner"></div>
      </div>
    <!-- Informations, Quiz and Results -->
    <div class="container">

        <!-- INFORMATIONS -->
        <div class="cardd" id="card-info">
            <h2 class="title">Informations</h2>
            <p class="parag">1) you can't go back to the informations after the quiz start.</br>
            </br>
                2) you can't pass to the next question until you answer.</br>
            </br>
                3) you can't see your result until the end of the quiz.</br>
            </br>
                4) you most to answer right for '5' questions to win.</br></p>
            <div class="button-start">
                <button class="btn-start" id="start-button">Start Quiz --></button>
            </div>
        </div>

        <!-- Quiz Cards-->
        <div class="cards" id="cards-quiz">
            <!-- quiz title -->
            <h2 class="title1">Quiz Time</h2>
            <!-- quiz counter -->
            <p class="counter"></p>
            <!-- question -->
            <div class="ques-div">
                <p class="question" id="question"></p>
            </div>
           
            <!-- progress timer -->
           
            <!-- answers buttons -->
            <div class="cards-ans">
                <button class="answer" id="choice1" onclick="answerSubmit('1');"></button>
                            
                <button class="answer" id="choice2" onclick="answerSubmit('2');"></button>
                            
                <button class="answer" id="choice3" onclick="answerSubmit('3');"></button>
                            
                <button class="answer" id="choice4" onclick="answerSubmit('4');"></button>
            </div>

            <!-- result button -->
            <div class="stepper-nav">  
                <button class="btn-result" id="results">Results --></button>
            </div>
        </div>

        <!-- results -->
        <div class="results" id="card-results">
            <h2 class="res-title">Results</h2>
            <p class="res-parag"></p>
            <div class="button-try">
                <button class="btn-try" id="try"><a href="index.php">TRY AGAIN</a></button>
            </div>
            <div class="answers">
                    <!-- <p class="questionn"></p>
                    <p class="justification"></p> -->
            </div>
        </div>

    </div>


   


   <!-- <script src="./assets/js/data.js"></script> -->
   <script src="./assets/js/app.js"></script>
</body>
</html>