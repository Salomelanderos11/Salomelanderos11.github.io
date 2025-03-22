<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json"); // Asegura que el tipo de contenido sea JSON

include 'conexion.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'POST') {
    // Obtener datos enviados desde el script JavaScript
    $data = json_decode(file_get_contents('php://input'), true);
        
        $nombre = $data['nombre'];
        $precio = $data['precio'];
        $inventario = $data['inventario'];
        $descripcion = $data['descripcion'];
        $colores = $data['colores'];
        $tipo= $data['tipo'];
        $tallas= $data['tallas'];
        

        $sql = "INSERT INTO `productos` (`id`, `nombre`,`precio`, `inventario`,`descripcion`,`colores`,`tipo`,`tallas`) VALUES ('', '$nombre','$precio','$inventario','$descripcion','$colores','$tipo','$tallas');";

        if ($conn->query($sql) === TRUE) {
            echo json_encode(array('message' => 'Producto agregado con éxito'));
        } else {
            http_response_code(500); // Código de estado HTTP adecuado para errores del servidor
            echo json_encode(array('message' => 'Error al agregar producto: ' . $conn->error));
        }
   
} else {
    // Código para obtener datos (GET)
    $sql = "SELECT * FROM productos";
    $result = $conn->query($sql);

    $productos = array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $productos[] = $row;
        }
    }

    echo json_encode($productos);
}

$conn->close();
?>
