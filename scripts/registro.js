var divresultado = document.getElementById('resultado');

// Function to send form data using Fetch API
function fech(nuevo) {
    fetch('/php/obtenerdatos.php', {
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

    // Retrieving form values
    const nombre = document.getElementById('nombre').value;
    const usuario = document.getElementById('username').value;
    const correo = document.getElementById('email').value;
    const contraseña = document.getElementById('password').value;
    const apellidos = document.getElementById('ape').value;

    // Creating object with form data
    var nuevo = {
        nombre: nombre,
        apellidos: apellidos,
        usuario: usuario,
        correo: correo,
        contraseña: contraseña
    };
   
    // Calling fetch function to send data to backend
    fech(nuevo);

    // Resetting form values
    
    document.getElementById('nombre').value = "";
    document.getElementById('username').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
    document.getElementById('ape').value = "";
    
    // Alerting user of successful registration
    alert("Tu cuenta ha sido registrada ;) ");
    window.location.href="/html/Sesion.html";
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
