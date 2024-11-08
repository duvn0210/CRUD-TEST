<?php
include './crud-app/back/db_connection.php';

$pdo = createConnection();

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); // Incluye OPTIONS para la solicitud preflight
header("Access-Control-Allow-Headers: Content-Type"); // Permite Content-Type en CORS



$method = $_SERVER['REQUEST_METHOD'];
$requestPath = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');

switch ($requestPath) {
    case 'items':
        if ($method == 'GET') {
            require './crud-app/back/get.php';
        }
        break; 
    case 'create':
        if ($method == 'POST') {
            require './crud-app/back/create.php';
        }
        break;
    case 'update':
        if ($method == 'PUT') {
            require './crud-app/back/update.php';
        }
        break;
    case 'delete':
        if ($method == 'DELETE') {
            require './crud-app/back/delete.php';
        }
        break;
    default:
        echo json_encode(['message' => 'Invalid request method']);
        break;
}

?>
