const button1 = document.querySelector('#inicio');
const miImagen = document.getElementById("producto");
const descripcion = document.getElementById("Descripcion")
/*Extraer valor compartido del localstorage al cargar la pagina y establecer la imagen inicial*/
var objetoRecuperado = JSON.parse(localStorage.getItem("ValorCompartido"));
console.log(objetoRecuperado);
var valor= 1;
var nombre_prod;
window.onload = function() { 
    var value = objetoRecuperado.nombre;
    nombre_prod= value.replace(/ /g, "_");
    var ruta= "/media/"+(nombre_prod)+"/"+(nombre_prod)+"_1.avif"
    miImagen.src=ruta;
    }
/*Extraer valor compartido del localstorage al cargar la pagina y establecer la imagen inicial*/
function  goinicio(){
        window.location.href ='/index.html';
    }
button1.onclick =function() {  goinicio();   };

var descripcion_obj=objetoRecuperado.descripcion;
//descripcion= descripcion.replace("nombre1",objetoRecuperado.name);

var desc_html=
`<h1>${objetoRecuperado.nombre}</h1>
    <h2>A solo : ${objetoRecuperado.precio}</h2>
    <p>${objetoRecuperado.descripcion} <br><br>
    Encuentralo disponible es estos colores : ${objetoRecuperado.colores}</p>            
    <h3>Modelo : ${objetoRecuperado.id}</h3>
`;
descripcion.innerHTML= desc_html;
/*Asignar una const y accion a los botones con su respectivo id */
const right = document.querySelector('#right');
const left = document.querySelector('#left');

/*Crear funciones para cambiar de imagen ASEGURARSE QUE TENGAN EL MISMO NOMBRE Y TIPO DEDE ARCHIVO A EXCEPCION DEL NUMERO */
function click_next_ant(n) {
    valor += n;
    if (valor > 5) {  
        valor = 1;
    }
    if (valor<1){
        valor=5;
    }
    var ruta = `/media/${nombre_prod}/${nombre_prod}_${valor}.avif`;
    verificarImagen(ruta, function(existe) {
        if (existe) {
            miImagen.src = ruta;
            console.clear();
        } else{
            valor -= n;
            if (valor > 5) {  
                valor = 1;
            }
            if (valor<1){
                valor=5;
            }
            ruta = `/media/${nombre_prod}/${nombre_prod}_${valor}.avif`;
            console.clear();
        }
    });

}
function verificarImagen(url, callback) {
    var img = new Image();
    img.onload = function() { callback(true); };
    img.onerror = function() { callback(false); };
    img.src = url;
}

