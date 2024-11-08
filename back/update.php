<?php
header("Content-Type: application/json");
   
$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['id']) && isset($data['nombre']) && isset($data['descripcion'])) {
    $id = $data['id'];
    $nombre = $data['nombre'];
    $descripcion = $data['descripcion'];

    $stmt = $pdo->prepare("UPDATE items SET nombre = :nombre, descripcion = :descripcion WHERE id = :id");
    $stmt->bindParam(':nombre', $nombre);
    $stmt->bindParam(':descripcion', $descripcion);
    $stmt->bindParam(':id', $id);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Item actualizado exitosamente"]);
    } else {
        echo json_encode(["message" => "Error al actualizar el item"]);
    }
} else {
    echo json_encode(["message" => "Datos incompletos"]);
}
?>
