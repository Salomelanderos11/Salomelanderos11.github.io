<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include 'conexion.php';

// Recibe y convierte $categoria a string explícitamente
if (isset($_POST['miString'])) {
    $miString = $_POST['miString'];
} else {
    echo json_encode(["error" => "No se recibió ningún string."]);
    exit;
}

$productos = [];
$sql = "SELECT `id`, `nombre`, `precio`, `descripcion`, `inventario`, `colores`, `tipo`, `tallas` FROM `productos` WHERE `tipo` = '$miString'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $productos[] = $row;
}
}
echo json_encode($productos);
$conn->close();
?>
