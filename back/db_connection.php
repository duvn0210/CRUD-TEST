<?php

function createConnection() {
    $host = 'localhost';      
    $db = 'gestion_datos';
    $user = 'root';        
    $password = '';  

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        echo "Error de conexión: " . $e->getMessage();
        exit();
    }
    return $pdo;
}
?>
