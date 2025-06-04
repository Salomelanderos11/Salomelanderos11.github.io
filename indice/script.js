function govista(productId) {
    window.location.href = `/vista/vista.html?productId=${productId}`;
}


function gocategoria(categoria) {
    window.location.href = `/categoria/categoria.html?categoria=${categoria}`;
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

/* Array de productos */

import base from '/DATA/datos.json' with { type: 'json' };
var dic_productos= base;


/* Definir cantidad de paginas */





const cant_productos = dic_productos.length;
const product_x_pag = 15;

var can_paginas = Math.floor(cant_productos / product_x_pag); // cantidad entera de paginas

if (cant_productos % product_x_pag != 0) {
    can_paginas += 1;
}

if (cant_productos < product_x_pag) {
    can_paginas = 1;
}

var pagina = []; // Array vacio para añadir la cantidad de paginas  
var text_paginas = ""; // aqui vamos agragar los div de cada pagina
for (var i = 0; i < can_paginas; i++) {
    text_paginas += `<div id="pagina${i + 1}">${i + 1}</div>`;
}

var div_paginas = document.getElementById("div_paginas");
div_paginas.innerHTML = `
<div>&laquo;</div>
${text_paginas}
<div>&raquo;</div>`;

/* Añadir class active a numero de pagina */
var pagina_activa;
var dig = div_paginas.querySelectorAll('[id]');
dig[0].classList.add("active");
dig.forEach(element => {
    element.onclick = function () {
        dig.forEach(element => {
            element.classList.remove("active");
        });
        element.classList.add("active");
        pagina_activa = element.getAttribute("id");
        pagina_activa = pagina_activa.toString();
        pagina_activa = pagina_activa[pagina_activa.length - 1];
        galleryproduct(pagina_activa);
        window.scrollTo({
        top: 0,
        behavior: "smooth" // Hace el scroll suave
        });
    }
});
/* Añadir class active a numero de pagina */

/* Añadir categorias de ropa */
const categori = document.getElementById("categorias");
var div_categori = "";
const categorias = ["Blusas", "Pantalones", "Shorts", "Lenceria","Camisas"];
for (i = 0; i < categorias.length; i++) {
    div_categori += `<div class="container" onclick="click_categorias('${categorias[i]}')">
    <img id="${categorias[i]}" src="/media/categorias/${categorias[i]}.avif" alt="Descripción" class="image-48x48">
    <div class="text-blue">${categorias[i]}</div>
  </div>`;
}
categori.innerHTML = div_categori;
/* Añadir categorias de ropa */

/* Establecer imagenes de pagina principal de manera aleatoria */
var lista_mezclada = dic_productos.sort(() => Math.random() - 0.5);
/* Establecer imagenes de pagina principal de manera aleatoria */

function galleryproduct(pagina_activa) {
    var gallery = document.getElementById("gallery");
    let gall = "";
    let x = (pagina_activa - 1) * product_x_pag;
    let limite = pagina_activa != can_paginas ? product_x_pag : lista_mezclada.length % product_x_pag;

    for (let i = 0; i < limite; i++) {
        let producto = lista_mezclada[i + x];
        let produc_nom= producto.nombre.replace(/ /g, "_");
        let imagen = pagina_activa != can_paginas ? `${produc_nom}_1.avif` : `${produc_nom}_1.avif`;
        console.log(imagen);
        gall += `
        <div class="product-card" onclick="click_imagen(${producto.id})">
            <img id="img${i + 1}" src="/media/${producto.tipo}/${produc_nom}/${imagen}" nombre="${producto.nombre}" alt="imagen1">
            <div class="product-info">
                <h3 id="h${i + 1}">${producto.nombre}</h3>
                <p id="p${i + 1}">$${producto.precio}</p>
            </div>
        </div>`;
    }

    gallery.innerHTML = gall;
    
}


/* Click en productos */
window.click_imagen = function(id) {
    govista(id);
}

window.click_categorias = function(categoria) {
    gocategoria(categoria);
}

/* Activar class active a la pagina 1 al cargar la pagina */
window.onload = function () {
    dig[0].onclick();
};
