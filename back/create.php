<?php
    header("Content-Type: application/json");
   
    $data = json_decode(file_get_contents("php://input"), true);
    if (!empty($data['nombre']) && !empty($data['descripcion'])) {
        $stmt = $pdo->prepare("INSERT INTO items (nombre, descripcion) VALUES (?, ?)");
        if ($stmt->execute([$data['nombre'], $data['descripcion']])) {
            echo json_encode(['message' => 'Item created successfully']);
        } else {
            echo json_encode(['message' => 'Failed to create item']);
        }
    } else {
        echo json_encode(['message' => 'Invalid input']);
    }
?>
