<?php
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['id'])) {
    $id = $data['id'];

    $stmt = $pdo->prepare("DELETE FROM items WHERE id = :id");
    $stmt->bindParam(':id', $id);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Item eliminado exitosamente"]);
    } else {
        echo json_encode(["message" => "Error al eliminar el item"]);
    }
} else {
    echo json_encode(["message" => "Datos incompletos"]);
}
?>
