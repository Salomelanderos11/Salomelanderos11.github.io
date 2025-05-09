
const miImagen = document.getElementById("producto");
const descripcion = document.getElementById("Descripcion");
var valor = 1;
var nombre_prod;
var objetoRecuperado;
import base from '/DATA/datos.json' with { type: 'json' };
var dic_productos = base;


window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = Number(urlParams.get('productId'));
    objetoRecuperado = dic_productos.find(objeto => objeto.id == productId);
    if ( objetoRecuperado) {
        var value = objetoRecuperado.nombre;
        nombre_prod = value.replace(/ /g, "_");
        var ruta = "/media/" + nombre_prod + "/" + nombre_prod + "_1.avif";
        miImagen.src = ruta;

        var desc_html = `
            <h1>${objetoRecuperado.nombre}</h1>
            <h2>A solo : $${objetoRecuperado.precio}</h2>
            <p>${objetoRecuperado.descripcion} <br><br>
            Encuentralo disponible es estos colores : ${objetoRecuperado.colores}</p>            
            <h3>Modelo : ${objetoRecuperado.tipo.slice(0, 3) + objetoRecuperado.id}</h3>
        `;
        descripcion.innerHTML = desc_html;
    } else {
        console.log("no se encontró id o el producto no existe");
    }
};



const right = document.querySelector('#right');
const left = document.querySelector('#left');

window.click_next_ant = function(n) { // Asegurarse de que la función esté disponible globalmente
    valor += n;
    if (valor > 5) {  
        valor = 1;
    }
    if (valor < 1) {
        valor = 5;
    }
    var ruta = `/media/${nombre_prod}/${nombre_prod}_${valor}.avif`;
    verificarImagen(ruta, function(existe) {
        if (existe) {
            miImagen.src = ruta;
            console.clear();
        } else {
            valor -= n;
            if (valor > 5) {  
                valor = 1;
            }
            if (valor < 1) {
                valor = 5;
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

//searchBar////////////////////////
function goresultados(criterio) {
    window.location.href = `/resultados/resultados.html?criterio=${criterio}`;
}

window.click_busqueda = function(event) {
    event.preventDefault(); // Evita la recarga de la página
    var query = document.getElementById("barra_busqueda").value;
    if(query != null){
        query= query.replace(/ /g, "_");
        goresultados(query);
    }else{
        alert("Ingresa algún criterio de busqueda");
    }
    

}

//searchBar////////////////////////

