const button1 = document.querySelector('#inicio');
const miImagen = document.getElementById("producto");
const textt_descripcion = document.getElementById("Descripcion")
const objetoRecuperado = JSON.parse(localStorage.getItem("ValorCompartido"));
var valor= 0;
console.log(objetoRecuperado);
/*Extraer valor compartido del localstorage al cargar la pagina y establecer la imagen inicial*/
window.onload = function() { 
    var value = objetoRecuperado.name; 
    var ruta= "/media/"+(value)+".jpg"
    miImagen.src=ruta;
    }
/*Extraer valor compartido del localstorage al cargar la pagina y establecer la imagen inicial*/
function  goinicio(){
        window.location.href ='/html/index.html';
    }
button1.onclick =function() {  goinicio();   };
var descripcion=objetoRecuperado.desc;
descripcion= descripcion.replace("nombre1",objetoRecuperado.name);
textt_descripcion.innerHTML= descripcion;
/*Asignar una const y accion a los botones con su respectivo id */
const right = document.querySelector('#right');
const left = document.querySelector('#left');

/*Crear funciones para cambiar de imagen ASEGURARSE QUE TENGAN EL MISMO NOMBRE Y TIPO DE ARCHIVO A EXCEPCION DEL NUMERO */
function sig_right(){
    valor += 1;
    if  (valor>4)
    {  
        var texto= "/media/"+(objetoRecuperado.name)+".jpg"
        miImagen.src=texto;
        valor=0
    }
    else{
    var texto= "/media/"+(objetoRecuperado.name)+"."+(valor)+".jpg"
    miImagen.src=texto;
    }
}
function sig_left(){
    valor -= 1;
    if (valor ==-1 )
    {
        valor=4
        var texto= "/media/"+(objetoRecuperado.name)+"."+(valor)+".jpg"
        miImagen.src=texto;
    }
    if(valor!=0)
    {
        var texto= "/media/"+(objetoRecuperado.name)+"."+(valor)+".jpg"
        miImagen.src=texto;
    }
    else{
        var texto= "/media/"+(objetoRecuperado.name)+".jpg"
        miImagen.src=texto;   
    }
}
/*Dar evento de click a botones */
right.onclick = function() { 
    sig_right();
 };
 left.onclick= function(){
    sig_left();
 };


