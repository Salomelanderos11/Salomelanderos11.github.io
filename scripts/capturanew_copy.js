///////////////////////DATOS GLOBALES///////////////////////
//var base = [];
var modalidad = 1;
var contenedor;
var objetoEncontrado;
import base from '/mypro/DATA/datos.json' with { type: 'json' };/**IMPORTAR DATOS */
import { miArray } from '/mypro/DATA/codigos_copy.js';/**IMPORTAR html para modalidades */
let baseJSON = JSON.stringify(base);
var codigos = miArray;
var formu = document.getElementById('registroForm');
var imagenes;
///////////////////////DATOS GLOBALES///////////////////////

///////////////////////  obntener el radiobutton cheked  ///////////////////////
function Seleccion() {
    let opciones = document.getElementsByName("opcion");
    let seleccion = '';
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            seleccion = opciones[i].value;
            break;
        }
    }
    return seleccion;
}
//Quitar seleccion de tipo no se usa pero me puede servir para despues
function Quitarseleccion() {
    let opciones = document.getElementsByName("opcion");
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            opciones[i].checked = false;
            break;
        }
    }
}
///////////////////////  obntener el radiobutton cheked  ///////////////////////


///////////////////////  Cambiar formulario HTML  ///////////////////////

window.click_modo = function(modo) {
    switch (modo) {
        case "delete": modalidad = 0;
            console.log(modalidad);
            break;
        case "captura": modalidad = 1;
            console.log(modalidad);
            break;
        case "update": modalidad = 2;
            console.log(modalidad);
            break;
    }
    contenedor = document.getElementById("modalidad");
    contenedor.innerHTML = codigos[modalidad]; //actualizar el formulario
    formu = document.getElementById('registroForm');
    if (formu) { adevento(formu); dropper(); }//agregar evento a los formularios de captura update y delete
    if (modalidad == 2) { // agregar evendo al form de buscar producto
        buscarpro();
    }

}

///////////////////////  Cambiar formulario ///////////////////////

///////////////////////  Funcion fecth para usar php  ///////////////////////
async function fechu(base, nuevo, accion) {
    try {
        // Enviar los datos al script PHP
        const response = await fetch('/mypro/php/capturanew.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ baseJSON: base, nuevojson: nuevo, metodo: accion })
        });

        // Convertir la respuesta a JSON
        const data = await response.json();
        console.log('Success:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}
///////////////////////  Funcion fecth para usar php  ///////////////////////
///////////////////////  Funcion fecth para usar php  ///////////////////////
async function fechu_img(nombre) {
    try {
        const formData = new FormData();
        var imgarray=[];
        var i=1;
        console.log(imagenes);
        for (const file of imagenes) {
            formData.append(`imageFile${i}`, file);
            i++;
        }
        
        formData.append('folderName',nombre)
        // Enviar los datos al script PHP
        const response = await fetch('/mypro/php/carga_img.php', {
            method: 'POST',
            body: formData
        });

        // Convertir la respuesta a JSON
        const data = await response.text();
        alert(data.mensaje);
    } catch (error) {
        console.error('Error:', error);
    }
}
///////////////////////  Funcion fecth para usar php  ///////////////////////
var formimg= document.getElementById('formimg');
formimg.addEventListener('submit', function(event) {
    event.preventDefault();
    
});
///////////////////////  Enviar datos de formulario al Fetch  ///////////////////////
function adevento(formulario) {
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        
        switch (modalidad) {
            case 0:
                deleter();
                break;
            case 1:
                captura_update(1);
                break;
            case 2:
                captura_update(2);
                break;
        }
      // window.location.reload();// Recargar la pagina para tomar datos.json actualizado para la siguiente ejecucion

    });
    
}
///////////////////////  Enviar datos de formulario al Fetch  ///////////////////////

///////////////////////  Capturar los datos del formulario de Create o Update  /////////////////////// 
function captura_update(modalidad){
    
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const inventario = document.getElementById('inventario').value;
    const descripcion = document.getElementById('descripcion').value;
    const colores = document.getElementById('colores').value;
    const tipo = Seleccion();
    const tallas = document.getElementById('tallas').value;

    //Con los datos capturados se crea un objeto json  
    
    if (modalidad == 1) { /// Si es captura se registran todos los datos del producto, el id es automatico y depende del ultimo producto del array
        var mensaje= "El producto ha sido CAPTURADO \n !Se va a recargar la pagina!";
        var lastid = parseInt(base[base.length - 1].id);
        var metodo = "captura";
        var producto = {
            id: lastid + 1, //id para el nuevo producto es el ultimo id +1
            nombre: nombre,
            precio: precio,
            inventario: inventario,
            descripcion: descripcion,
            colores: colores,
            tipo: tipo,
            tallas: tallas
        };
        fechu_img(nombre);

    } else { // Si es update puedes cambiar cualquier dato a excepcion del id
        var mensaje= "El producto ha sido ACTUALIZADO \n !Volveras a la pagina de inicio!";
        var metodo = "update";
        var producto = {
            id: objetoEncontrado.id, //id para el nuevo producto es el ultimo id +1
            nombre: nombre,
            precio: precio,
            inventario: inventario,
            descripcion: descripcion,
            colores: colores,
            tipo: tipo,
            tallas: tallas
        };
    }

    fechu(baseJSON, producto, metodo).then(() => { // enviar los datos a php
        alert(mensaje); 
    }).catch(error => {
        console.error('Error en fechu:', error);
    });


}

///////////////////////  Capturar los datos del formulario de Create o Update  ///////////////////////

/*////////////////////  DROP AREA  ////////////////////*/
function dropper(){
const dropArea = document.getElementById('drop-area');
    const gallery = document.getElementById('gallery');

    dropArea.addEventListener('dragover', (event) => {
        event.preventDefault();
        dropArea.classList.add('dragover');
        });

    dropArea.addEventListener('dragleave', () => {
        dropArea.classList.remove('dragover');
        });
    var files=new Set();;
    dropArea.addEventListener('drop', (event) => {
        event.preventDefault();
        dropArea.classList.remove('dragover');
        //files = [...files, ...event.dataTransfer.files];
        for (let file of event.dataTransfer.files) {
            files.add(file);
            }
            imagenes=files;
            handleFiles(files);
        });
        
    }
function handleFiles(files) {
    for (const file of files) {
        if (file.type.startsWith('image/')) {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            gallery.appendChild(img);
            
            }   
        }
        
    }



/*////////////////////  DROP AREA  ////////////////////*/


///////////////////////  Capturar id para eliminar  ///////////////////////

function deleter(){
        const metodo = "delete";
        const producto = document.getElementById('Borrar').value; //captura id
        
        fechu(baseJSON, producto, metodo).then(() => { // enviar los datos a php
            alert("El producto ha sido ELIMINADO \n !Volveras a la pagina de inicio! ");
        }).catch(error => {
            console.error('Error en fechu:', error); //atrapar errores
        });
        console.log('Producto elimidado :', producto);
}
///////////////////////  Capturar id para eliminar  ///////////////////////

///////////////////////  Buscar el producto que se quiere modificar  ///////////////////////  

function buscarpro() {
    document.getElementById('Buscap').addEventListener('submit', function(event) { 
        event.preventDefault();
        var idprod = document.getElementById('IDS').value;//captura el id del producto
        objetoEncontrado = base.find(objeto => objeto.id == idprod); // busca el producto el el array base  que se obtuvo de datos.json
        // Lena el formulario con los datos del producto
        document.getElementById('nombre').value = objetoEncontrado.nombre;
        document.getElementById('precio').value = objetoEncontrado.precio;
        document.getElementById('inventario').value = objetoEncontrado.inventario;
        document.getElementById('descripcion').value = objetoEncontrado.descripcion;
        document.getElementById('colores').value = objetoEncontrado.colores;
        document.getElementById('tallas').value = objetoEncontrado.tallas;
        //Agregar checked al radiobuton del tipo del producto
        let opciones = document.getElementsByName("opcion");
        for (let i = 0; i < opciones.length; i++) {
            if (opciones[i].value == objetoEncontrado.tipo) {
                opciones[i].checked = true;
                break;
            }
        }
       
    });
    
}

///////////////////////  Buscar el producto que se quiere modificar  //////////////////////

//adevento(formu);// agregar evento al primer formulario



//BOTONES DE HEADER
const button1 = document.querySelector('#inicio');
const button2 = document.querySelector('#cuenta');
function goinicio() {
    window.location.href = '/html/index.html';
}
function goregistro() {
    window.location.href = '/html/Registro.html';
}

button1.onclick = function() { goinicio(); };
button2.onclick = function() { goregistro(); };
