<?php
include_once "database.php";

function test(){
    $conn = new Database;
    $test = "SELECT * FROM questions";
    $stmt =  $conn->connect()->prepare($test);
    $result = $stmt->execute() ;
    $data = $stmt -> fetchAll(PDO::FETCH_ASSOC);

    // var_dump($data);

    $quizzData = "questions = ".json_encode($data)." ;  questionsStock = [];" ;

    file_put_contents('../assets/js/data1.js',$quizzData) ;
}
test();


?>