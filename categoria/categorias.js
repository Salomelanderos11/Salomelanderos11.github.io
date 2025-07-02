function govista(productId) {
    window.location.href = `/vista/vista.html?productId=${productId}`;
}
function goresultados(criterio) {
    window.location.href = `/resultados/resultados.html?criterio=${criterio}`;
}
window.click_imagen = function(id) {
    govista(id);
}
window.click_busqueda = function(event) {
    event.preventDefault(); // Evita la recarga de la página
    var query = document.getElementById("barra_busqueda").value.toLowerCase();
    console.log(query);
    
    goresultados(query);
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
    const product_x_pag = 16;
    var can_paginas = Math.ceil(cant_productos / product_x_pag);
    
    if (cant_productos < product_x_pag) {
    can_paginas = 1;
    }

    var text_paginas = "";
    if(can_paginas <= 3){
        for (var i = 0; i < can_paginas; i++) {
            text_paginas += `<div id="pagina${i + 1}" value="${i + 1}">${i + 1}</div>`;
        }
    } else {
        for (var i = 0; i < 3; i++) {
            text_paginas += `<div id="pagina${i + 1}" value="${i + 1}">${i + 1}</div>`;
        }
    }

    var div_paginas = document.getElementById("div_paginas");
    div_paginas.innerHTML = `
    <div id="ant">&laquo;</div>
    ${text_paginas}
    <div id="next">&raquo;</div>`;/* Añadir class active a número de página */
    
    /* Añadir class active a numero de pagina */
    const btnnext = document.getElementById("next");
    const btnant = document.getElementById("ant");
    var pagina_activa = 1; // Comenzar en página 1
    var dig = div_paginas.querySelectorAll('[id]');
    
    function pag_activa(new_pag_activa) {
        // Validar que la página esté en rango
        if (new_pag_activa < 1 || new_pag_activa > can_paginas) {
            return;
        }
        
        var element_pag_active;
        var grupo_actual = Math.ceil(new_pag_activa / 3); // Grupo de 3 páginas
        var inicio_grupo = (grupo_actual - 1) * 3 + 1;
        
        dig.forEach(element => {
            if (element.getAttribute("id") != "next" && element.getAttribute("id") != "ant") {
                // Remover clase active
                if (element.classList.contains("active")) {
                    element.classList.remove("active");
                }
                
                // Actualizar valores y texto de los botones según el grupo actual
                var index = Array.from(dig).indexOf(element) - 1; // -1 porque el primer elemento es 'ant'
                if (index >= 0 && index < 3) {
                    var nuevo_valor = inicio_grupo + index;
                    if (nuevo_valor <= can_paginas) {
                        element.setAttribute("value", nuevo_valor);
                        element.textContent = nuevo_valor;
                        element.style.display = "block";
                        
                        // Marcar el elemento activo
                        if (nuevo_valor == new_pag_activa) {
                            element_pag_active = element;
                        }
                    } else {
                        element.style.display = "none";
                    }
                }
            }
        });
        
        // Agregar clase active al elemento correspondiente
        if (element_pag_active) {
            element_pag_active.classList.add("active");
        }
        
        // Actualizar página activa global
        pagina_activa = new_pag_activa;
        galleryproduct(pagina_activa);
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Hace el scroll suave
            });
    }
    function setupPageButtons() {
        dig.forEach(element => {
            if (element.getAttribute("id") != "next" && element.getAttribute("id") != "ant") {
                element.onclick = function() {
                    var page_value = parseInt(element.getAttribute("value"));
                    pag_activa(page_value);
                };
            }
        });
    }

    // Event listeners para botones anterior y siguiente
    btnant.addEventListener("click", function() {
        if (pagina_activa > 1) {
            pag_activa(pagina_activa - 1);
        }
    });
    
    /* Añadir class active a numero de pagina */


    btnnext.addEventListener("click", function() {
        if (pagina_activa < can_paginas) {
            pag_activa(pagina_activa + 1);
        }
    });

    function galleryproduct(pagina_activa) {

        var gallery = document.getElementById("gallery");
        let gall = "";
        // Calcular el índice de inicio para esta página
        let indice_inicio = (pagina_activa - 1) * product_x_pag;        let limite = pagina_activa != can_paginas ? product_x_pag : (filteredProducts.length - (can_paginas - 1) * product_x_pag);
        

        for (let i = 0; i < limite; i++) {
            let producto = filteredProducts[i + indice_inicio];
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
    setupPageButtons(); // Configurar event listeners
    pag_activa(1);
    
});










