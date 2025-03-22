<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include 'conexion.php'; // Incluye la conexión a la base de datos

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'POST') {
    try {
        // Obtener datos enviados desde el script JavaScript
        $data = json_decode(file_get_contents('php://input'), true);

        if ($data === null) {
            throw new Exception("JSON inválido");
        }

        $usuario = $data['usuario'];
        $password = $data['password'];

        // Consultar datos de la base de datos
        $sql = "SELECT `password` FROM `usuarios` WHERE `usuario` = ?;";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $usuario);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $usuario_contra = $row['password'];

            // Verificar la contraseña
            if (password_verify($password, $usuario_contra)) {
                echo json_encode(array("message" => "¡La contraseña es correcta!"));
            } else {
                echo json_encode(array("message" => "La contraseña es incorrecta."));
            }
        } else {
            throw new Exception("Usuario no encontrado");
        }
    } catch (Exception $e) {
        // Manejar la excepción
        echo json_encode(array("error" => $e->getMessage()));
    }

    $stmt->close();
}

$conn->close();



?>


