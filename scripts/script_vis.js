const button1 = document.querySelector('#inicio');
const miImagen = document.getElementById("producto");
const textt_descripcion = document.getElementById("Descripcion")
/*Extraer valor compartido del localstorage al cargar la pagina y establecer la imagen inicial*/
var objetoRecuperado = JSON.parse(localStorage.getItem("ValorCompartido"));
console.log(objetoRecuperado);
var valor= 0;

window.onload = function() { 
    var value = objetoRecuperado.nombre; 
    var ruta= "/media/"+(value)+"/"+(value)+".jpg"
    miImagen.src=ruta;
    }
/*Extraer valor compartido del localstorage al cargar la pagina y establecer la imagen inicial*/
function  goinicio(){
        window.location.href ='html/index.html';
    }
button1.onclick =function() {  goinicio();   };

var descripcion=objetoRecuperado.descripcion;
//descripcion= descripcion.replace("nombre1",objetoRecuperado.name);
textt_descripcion.innerHTML= descripcion;
/*Asignar una const y accion a los botones con su respectivo id */
const right = document.querySelector('#right');
const left = document.querySelector('#left');

/*Crear funciones para cambiar de imagen ASEGURARSE QUE TENGAN EL MISMO NOMBRE Y TIPO DEDE ARCHIVO A EXCEPCION DEL NUMERO */
function sig_right() {
    valor += 1;
    if (valor > 4) {  
        valor = 0;
    }
    var texto = valor === 0 ? `/media/${objetoRecuperado.nombre}/${objetoRecuperado.nombre}.jpg` : `/media/${objetoRecuperado.nombre}/${objetoRecuperado.nombre}.${valor}.jpg`;
    miImagen.src = texto;
}

function sig_left() {
    valor -= 1;
    if (valor < 0) {
        valor = 4;
    }
    var texto = valor === 0 ? `/media/${objetoRecuperado.nombre}/${objetoRecuperado.nombre}.jpg` : `/media/${objetoRecuperado.nombre}/${objetoRecuperado.nombre}.${valor}.jpg`;
    miImagen.src = texto;
}

/*Dar evento de click a botones */
right.onclick = function() { 
    sig_right();
};
left.onclick = function() {
    sig_left();
};
