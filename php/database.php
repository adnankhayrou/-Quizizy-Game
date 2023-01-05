<?php

class Database {
    public $serverName = "localhost";
    public $userName = "root";
    public $password = "";
    public $databaseName = "quizizy";
    public $connection ;
    
    function connect(){

        try{
        $this->connection = new PDO("mysql:host=$this->serverName;dbname=$this->databaseName", $this->userName, $this->password);
        return $this->connection;
        
        }catch (PDOException $e){
            echo $e;
        }
        
    }
}

   
?>