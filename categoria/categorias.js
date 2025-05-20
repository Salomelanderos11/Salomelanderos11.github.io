function govista(productId) {
    window.location.href = `/vista/vista.html?productId=${productId}`;
}
function goresultados(criterio) {
    window.location.href = `/resultados/resultados.html?criterio=${criterio}`;
}

/* Array de productos */
import base from '/DATA/datos.json' with { type: 'json' };

/* Capturar la categoría clicada en el index */

document.addEventListener('DOMContentLoaded', function() {
    var gallery = document.getElementById("gallery");
    var filteredProducts = new Array;
    const urlParams = new URLSearchParams(window.location.search);
    const categoria_elegida = urlParams.get('categoria');
    filteredProducts=base.filter(product => product.tipo == categoria_elegida);
/* Definir cantidad de páginas */
    const cant_productos = filteredProducts.length;
    const product_x_pag = 15;
    var can_paginas = Math.floor(cant_productos / product_x_pag);
    console.log(can_paginas);
    if (cant_productos % product_x_pag != 0) { can_paginas += 1; }
    if (cant_productos <= product_x_pag) { can_paginas = 1; }

    var text_paginas = "";
    for (var i = 0; i < can_paginas; i++) {
        text_paginas += `<div id="pagina${i + 1}">${i + 1}</div>`;
    }
    var div_paginas = document.getElementById("div_paginas");
    div_paginas.innerHTML = `<div>&laquo;</div>${text_paginas}<div>&raquo;</div>`;
    /* Añadir class active a número de página */
    var pagina_activa;
    var dig = div_paginas.querySelectorAll('[id]');
    
    dig[0].classList.add("active");

    dig.forEach(element => {
        element.onclick = function() {
            dig.forEach(element => {
                element.classList.remove("active");
            });
            element.classList.add("active");
            pagina_activa = element.getAttribute("id").slice(-1);
            console.log(pagina_activa);
            galleryproduct(pagina_activa);
        };
    });

    function galleryproduct(pagina_activa) {
        var gallery = document.getElementById("gallery");
        let gall = "";
        let x = (pagina_activa - 1) * product_x_pag;
        let limite = pagina_activa != can_paginas ? product_x_pag : (filteredProducts.length - (can_paginas - 1) * product_x_pag);
        console.log(limite);
        for (let i = 0; i < limite; i++) {
            let producto = filteredProducts[i + x];
            let produc_nom= producto.nombre.replace(/ /g, "_");
            let imagen = pagina_activa != can_paginas ? `${produc_nom}_1.avif` : `${produc_nom}_1.avif`;
            console.log(imagen);
            gall += `
            <div class="product-card" onclick="click_imagen(${producto.id})">
                <img id="img${i + 1}" src="/media/${producto.tipo}/${produc_nom}/${imagen}" nombre="${producto.nombre}" alt="imagen1" >
                <div class="product-info">
                    <h3 id="h${i + 1}">${producto.nombre}</h3>
                    <p id="p${i + 1}">$${producto.precio}</p>
                </div>
            </div>`;
        }
    
        gallery.innerHTML = gall;
    }
    dig[0].onclick();
    
});


// Modifica la función `galleryproduct` para aceptar `filteredProducts` actualizado



window.click_imagen = function(id) {
    govista(id);
}
window.click_busqueda = function(event) {
    event.preventDefault(); // Evita la recarga de la página
    var query = document.getElementById("barra_busqueda").value.toLowerCase();
    console.log(query);
    
    goresultados(query);
}




