<?php
include_once "database.php";


    $conn = new Database;
    $test = "SELECT * FROM questions";
    $stmt =  $conn->connect()->prepare($test);
    $stmt->execute() ;
    $data = $stmt -> fetchAll(PDO::FETCH_ASSOC);

    // var_dump($data);

    $quizzData = json_encode($data);
    // "var questions = ".
    // ." ; var questionsStock = [];"
    // file_put_contents('./assets/js/data.js',$quizzData) ;
    echo $quizzData;



?>