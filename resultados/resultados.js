import base from '/DATA/datos.json' with { type: 'json' };
function govista(productId) {
    window.location.href = `/vista/vista.html?productId=${productId}`;
}    

//searchBar////////////////////////
function goresultados(criterio) {
    window.location.href = `resultados.html?criterio=${criterio}`;
}
window.goresultados_cat= function (criterio,categoria) {
    window.location.href = `resultados.html?criterio=${criterio}&cat=${categoria}`;
}


window.click_busqueda = function(event) {
    event.preventDefault(); // Evita la recarga de la página
    var query = document.getElementById("barra_busqueda").value;
    if(query != null){
        query= query.replace(/ /g, "_");
        goresultados(query);
    }else{
        alert("Ingresa un criterio de busqueda valido");
    }
    

}

//searchBar////////////////////////


//////////////////////////CARGA DE CONTENIDO//////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    var dic_productos = base;
    var filteredProducts = new Array;


    ////////////////////////// GENERAR LAS PRODUCT CARDS //////////////////////////
function galleryproduct(pagina_activa) {
    var result= document.getElementById("result");
    if (filteredProducts.length >0){
        result.innerText=`Estos son los resultados de tu busqueda sobre ; ${criterio_r}`;
    }else{
        if(categoria!=null){ 
            result.innerText=`No hay productos de tu busqueda en esta categoria :( n\ Prueba con otra categoria ;)`;
        }else{
            result.innerText=`No encontramos productos para tu busqueda :( n\ Prueba haciendo otra busqueda ;)`;
        }
        
    }
    
    var gallery = document.getElementById("gallery");
    let gall = "";
    let x = (pagina_activa - 1) * product_x_pag;
    let limite = pagina_activa != can_paginas ? product_x_pag : filteredProducts.length % product_x_pag;

    for (let i = 0; i < limite; i++) {
        let producto = filteredProducts[i + x];
        let produc_nom = producto.nombre.replace(/ /g, "_");
        let imagen = pagina_activa != can_paginas ? `${produc_nom}_1.avif` : `${produc_nom}_1.avif`;
      
        gall += `
        <div class="product-card" onclick="click_imagen(${producto.id})">
            <img id="img${i + 1}" src="/media/${produc_nom}/${imagen}" nombre="${producto.nombre}" alt="imagen1">
            <div class="product-info">
                <h3 id="h${i + 1}">${producto.nombre}</h3>
                <p id="p${i + 1}">$${producto.precio}</p>
            </div>
        </div>`;
    }

    gallery.innerHTML = gall;
}
////////////////////////// GENERAR LAS PRODUCT CARDS //////////////////////////

    
    /*/////obtener los datos del URL ///// */
    const urlParams = new URLSearchParams(window.location.search);
    var criterio_r=urlParams.get('criterio');// Obtener el criterio directamente como cadena
    if(criterio_r!= null){ //Verificar que criterio de busqueda no sea nulo
        criterio_r= criterio_r.replace("_"," ");//remplaza _ por espacios
    }
    //FILTRADO DE PRODUCTOS
    var criterio_ini= criterio_r.toLowerCase();
    const criterios = criterio_ini ? criterio_ini.split("_") : []; // Dividir la cadena en un array si por si buscan mas de una palabra
    dic_productos.forEach(producto => {//busca entodos los productos de la base 
        criterios.forEach(criterio => {// busca por cada palabra del criterio de busqueda
            if (criterio.length > 2) { // si la palabra es de 2 o menos caracteres la rechaza
                if (producto.nombre.toLowerCase().includes(criterio) || producto.descripcion.toLowerCase().includes(criterio)) { 
                    if (!filteredProducts.some(productofil => productofil.id === producto.id)) { //si no se encuentra en el array de productos filtrados lo mete 
                        filteredProducts.push(producto);
                    }
                }
            }
        });
    });
    //FILTRADO DE PRODUCTOS
    
    /* Añadir botones de categorias de ropa */
    const categori = document.getElementById("categorias");
    var div_categori = "";
    const categorias = ["Blusas", "Pantalones", "Shorts", "Lenceria","Camisas"];
    for (i = 0; i < categorias.length; i++) {
        div_categori += ` <button id="${categorias[i]}" class="boton-elegante" onclick="goresultados_cat('${criterio_r}','${categorias[i]}')">${categorias[i]}</button>`;
    }
    categori.innerHTML = div_categori;
    /* Añadir botones de categorias de ropa */

    ///////////////FILTRADO POR CATEGORIA
    var categoria=urlParams.get('cat'); //si se seleccionó una categoria en los resultados de busqueda la captura
    
    if(categoria!=null){ 
        var categoria_elegida=urlParams.get('cat');// Obtener el criterio directamente como cadena
        filteredProducts=filteredProducts.filter(product => product.tipo == categoria_elegida);
        var button_active= document.getElementById(categoria_elegida);
        button_active.classList.add("active");
        
    }
    //////////////FILTRADO POR CATEGORIA

    /* Definir cantidad de paginas */
    const cant_productos = filteredProducts.length;
    const product_x_pag = 15;

    var can_paginas = Math.floor(cant_productos / product_x_pag); // cantidad entera de paginas

    if (cant_productos % product_x_pag != 0) {
        can_paginas += 1;
    }

    if (cant_productos < product_x_pag) {
        can_paginas = 1;
    }
    /* Definir cantidad de paginas */


    var text_paginas = ""; // aqui vamos agragar los div de cada pagina
    for (var i = 0; i < can_paginas; i++) {
        text_paginas += `<div id="pagina${i + 1}">${i + 1}</div>`;
    }
    
    var div_paginas = document.getElementById("div_paginas");
    
    if (div_paginas) {
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
            }
        });

        /* Activar class active a la pagina 1 al cargar la pagina */
        dig[0].onclick();
    } else {
        console.error("El elemento 'div_paginas' no se encuentra en el DOM.");
    }
    
});

//////////////////////////CARGA DE CONTENIDO//////////////////////////

window.click_categorias = function(categoria_elegida) {
    
    var filtrado_categoria= new Array;
    filteredProducts.forEach(producto => {
        if(producto.tipo == categoria_elegida){
            if (!filtrado_categoria.some(productofil => productofil.id === producto.id)) {
                filtrado_categoria.push(producto);
            }
        }
    });
    filteredProducts=filtrado_categoria;


 }


window.click_imagen = function(id) {
    govista(id);
}
