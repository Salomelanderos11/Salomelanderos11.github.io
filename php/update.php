<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $jsonData = file_get_contents('php://input');
    $dic_productos = json_decode($jsonData, true);

    if (json_last_error() === JSON_ERROR_NONE) {
        if (is_array($dic_productos)) {
            // Modificar los datos JSON
            foreach ($dic_productos as &$product) {
                if (isset($product['name']) && $product['name'] == "7") {
                    $product['precio'] = "900";
                }
            }

       

            $updatedData = json_encode($dic_productos, JSON_PRETTY_PRINT);
            $filePath = __DIR__ . '/../DATA/datos.json';
            file_put_contents($filePath, $updatedData);
            echo "¡Datos actualizados";
        } else {
            echo "Error: Los datos JSON no son un array.";
        }
    } else {
        echo "Error en el formato JSON recibido: " . json_last_error_msg();
    }
} 
?>