//obntener el radiobutton cheked
function Seleccion() {
    let opciones = document.getElementsByName('opcion');
    let seleccion = '';
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            seleccion = opciones[i].value;
            break;
        }
    }
    return seleccion
}
function Quitarseleccion() {
    let opciones = document.getElementsByName('opcion');
    
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            opciones[i].checked= false;
            break;
        }
    }
    
}
//obntener el radiobutton cheked

//Capturar ruta de imagen
document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
document.getElementById('downloadButton').addEventListener('click', downloadImage, false);

        let selectedFile;

        function handleFileSelect(event) {
            selectedFile = event.target.files[0];
        }

        function downloadImage() {
            if (selectedFile) {
                const url = URL.createObjectURL(selectedFile);
                const link = document.createElement('a');
                link.href = url;
                link.download = selectedFile.name;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
            } else {
                alert('Por favor, selecciona una imagen primero.');
            }
        }
//Capturar ruta de imagen

// Function to send form data using Fetch API
function fech(nuevo) {
    fetch('/php/capturaproduc.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevo)
    })
    .then(response => {
        
        if (!response.ok) {
            
            // Handling non-OK responses
            return response.text().then(text => {
                throw new Error(text);
            });
        }

        // Parsing JSON response
        return response.json();
    })
    .then(data => {
        // Log success data
        console.log('Success:', data);
    })
    .catch(error => {
        // Log error
        console.error('Error:', error);
    });
}

// Adding event listener to handle form submission
document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    Seleccion();

    // Retrieving form values
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const inventario = document.getElementById('inventario').value;
    const descripcion = document.getElementById('descripcion').value;
    const colores = document.getElementById('colores').value;
    const tipo = Seleccion();
    const tallas = document.getElementById('tallas').value;

    // Creating object with form data
    var nuevo = {
        nombre: nombre,
        precio: precio,
        inventario: inventario,
        descripcion: descripcion,
        colores:colores,
        tipo:tipo,
        tallas:tallas
    };
   
    // Calling fetch function to send data to backend
    fech(nuevo);

    // Resetting form values
    
    document.getElementById('nombre').value="";
    document.getElementById('precio').value="";
    document.getElementById('inventario').value="";
    document.getElementById('descripcion').value="";
    document.getElementById('colores').value="";
    Quitarseleccion();
    document.getElementById('tallas').value="";
    // Alerting user of successful registration
    alert("El producto ha sido registrado ");
    
});

//BOTONES DE HEADER
const button1 = document.querySelector('#inicio');
const button2 = document.querySelector('#cuenta');
function  goinicio(){
   
    window.location.href ='/html/index.html';
}
function  goregistro(){
   
    window.location.href = '/html/Registro.html';
}

button1.onclick =function() {  goinicio();   };
button2.onclick =function() {  goregistro();   };
//BOTONES DE HEADER
/*

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Obtener ruta de imagen cargada</title>
</head>
<body>

<input type="file" id="inputImagen" accept="image/*">
<p id="rutaImagen"></p>
<img id="previewImagen" src="" alt="Previsualización de la imagen" style="display:none;">

<script>
    document.getElementById('inputImagen').addEventListener('change', function(event) {
        const archivo = event.target.files[0];
        if (archivo) {
            const lector = new FileReader();
            lector.onload = function(e) {
                const rutaImagen = e.target.result;
                document.getElementById('rutaImagen').innerText = 'Ruta de la imagen: ' + rutaImagen;
                document.getElementById('previewImagen').src = rutaImagen;
                document.getElementById('previewImagen').style.display = 'block';
            }
            lector.readAsDataURL(archivo);
        }
    });
</script>

</body>
</html>
*/