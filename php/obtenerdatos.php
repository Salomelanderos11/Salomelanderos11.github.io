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
        $apellidos = $data['apellidos'];
        $usuario = $data['usuario'];
        $correo = $data['correo'];
        $contraseña = $data['contraseña'];
        $contraseña_encriptada = password_hash($contraseña, PASSWORD_DEFAULT);
        

        $sql = "INSERT INTO `usuarios` (`id`, `nombre`,`usuario`, `email`,`password`) VALUES ('', '$nombre','$usuario','$correo','$contraseña_encriptada');";

        if ($conn->query($sql) === TRUE) {
            echo json_encode(array('message' => 'Usuario agregado con éxito'));
        } else {
            http_response_code(500); // Código de estado HTTP adecuado para errores del servidor
            echo json_encode(array('message' => 'Error al agregar usuario: ' . $conn->error));
        }
   
} else {
    // Código para obtener datos (GET)
    $sql = "SELECT * FROM usuarios";
    $result = $conn->query($sql);

    $usuarios = array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $usuarios[] = $row;
        }
    }

    echo json_encode($usuarios);
}

$conn->close();
?>
