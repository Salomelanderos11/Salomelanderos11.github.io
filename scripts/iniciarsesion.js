function fech(nuevo){
    fetch('/php/iniciarsesion.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevo)
    })
    .then(response => {
        console.log(response.json);
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
///OONCLICK
document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const usuario = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    var nuevo = {
            usuario: usuario,
            password: password
                    };
                
    fech(nuevo);
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";

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