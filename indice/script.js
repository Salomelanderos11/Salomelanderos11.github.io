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
const product_x_pag = 16;

var can_paginas = Math.ceil(cant_productos / product_x_pag); // Usar Math.ceil para redondear hacia arriba

if (cant_productos < product_x_pag) {
    can_paginas = 1;
}

var pagina = []; // Array vacio para añadir la cantidad de paginas  
var text_paginas = ""; // aqui vamos agragar los div de cada pagina
// Generar botones de página
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
<div id="next">&raquo;</div>`;


/* Añadir class active a numero de pagina */
const btnnext = document.getElementById("next");
const btnant = document.getElementById("ant");
var pagina_activa = 1; // Comenzar en página 1
var dig = div_paginas.querySelectorAll('[id]');

function pag_activa(new_pag_activa) {
    console.log("new_pag_activa: " + new_pag_activa);
    
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

// Event listeners para los botones de página numerada
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

btnnext.addEventListener("click", function() {
    if (pagina_activa < can_paginas) {
        pag_activa(pagina_activa + 1);
    }
});

/* Añadir class active a numero de pagina */

/* Añadir categorias de ropa */
const categori = document.getElementById("categorias");
var div_categori = "";
const categorias = ["Blusas", "Pantalones", "Shorts", "Lenceria", "Camisas"];
for (i = 0; i < categorias.length; i++) {
    div_categori += `<div class="container" onclick="click_categorias('${categorias[i]}')">
    <img id="${categorias[i]}" src="/mypro/media/categorias/${categorias[i]}.avif" alt="Descripción" class="image-48x48">
    <div class="text-blue">${categorias[i]}</div>
  </div>`;
}
categori.innerHTML = div_categori;
/* Añadir categorias de ropa */

/* Establecer imagenes de pagina principal de manera aleatoria */
var lista_mezclada = dic_productos.sort(() => Math.random() - 0.5);
/* Establecer imagenes de pagina principal de manera aleatoria */

function galleryproduct(pagina_activa) {
    console.log("Mostrando página: " + pagina_activa);
    console.log("Productos por página: " + product_x_pag);
    
    var gallery = document.getElementById("gallery");
    let gall = "";
    
    // Calcular el índice de inicio para esta página
    let indice_inicio = (pagina_activa - 1) * product_x_pag;
    
    // Calcular cuántos productos mostrar en esta página
    let productos_restantes = lista_mezclada.length - indice_inicio;
    let productos_a_mostrar = Math.min(product_x_pag, productos_restantes);
    
    console.log(`Página ${pagina_activa}: mostrando desde índice ${indice_inicio}, ${productos_a_mostrar} productos`);
    
    // Generar HTML para los productos de esta página
    for (let i = 0; i < productos_a_mostrar; i++) {
        let indice_producto = indice_inicio + i;
        let producto = lista_mezclada[indice_producto];
        
        if (producto) { // Verificar que el producto existe
            let produc_nom = producto.nombre.replace(/ /g, "_");
            let imagen = `${produc_nom}_1.avif`;
            
            console.log(`Producto ${i + 1}: ${producto.nombre} (índice ${indice_producto})`);
            
            gall += `
            <div class="product-card" onclick="click_imagen(${producto.id})">
                <img id="img${i + 1}" src="/mypro/media/${producto.tipo}/${produc_nom}/${imagen}" nombre="${producto.nombre}" alt="imagen1">
                <div class="product-info">
                    <h3 id="h${i + 1}">${producto.nombre}</h3>
                    <p id="p${i + 1}">${producto.precio}</p>
                </div>
            </div>`;
        }
    }

    gallery.innerHTML = gall;
    console.log(`Total productos mostrados: ${productos_a_mostrar}`);
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
