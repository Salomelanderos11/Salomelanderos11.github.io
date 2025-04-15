function goinicio() {
    window.location.href = '/mypro/html/index.html';
}
function goregistro() {
    window.location.href = '/html/Sesion.html';
}
function govista() {
    window.location.href = '/mypro/html/vista.html';
}
var gallery = document.getElementById("gallery");
/* Array de productos */
import base from '/mypro/DATA/datos.json' with { type: 'json' };

/* Capturar la categoría clicada en el index */
var categoria_elegida = localStorage.getItem('categoria');

console.log(categoria_elegida);
let dic_productos = base.filter(numero => numero.tipo == categoria_elegida);
console.log(dic_productos);


/* Definir cantidad de páginas */
const cant_productos = dic_productos.length;
const product_x_pag = 20;
var can_paginas = Math.floor(cant_productos / product_x_pag);
if (cant_productos % product_x_pag != 0) { can_paginas += 1; }
if (cant_productos < product_x_pag) { can_paginas = 1; }

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
        galleryproduct(pagina_activa);
    };
});

/* Establecer imágenes de página principal de manera aleatoria */
function mezclarLista(lista) {
    return lista.sort(() => Math.random() - 0.5);
}
console.log(dic_productos.length);
var lista_mezclada = mezclarLista(dic_productos);
console.log(lista_mezclada.length );

// Modifica la función `galleryproduct` para aceptar `dic_productos` actualizado
function galleryproduct(pagina_activa) {
    if(dic_productos.length<1){
        gallery.innerHTML=`<p>De momento no contamos con productos de esta categorias. Sigue navegando en las categorias disponibles.</p>`;
    }else{
    var gall = "";
    var x = (pagina_activa - 1) * product_x_pag;
    if (pagina_activa != can_paginas) {
        for (var i = 0; i < product_x_pag; i++) {
            gall += `
                <div class="product-card" onclick="click_imagen(${i + 1})">
                    <img id="img${i + 1}" src="/media/${dic_productos[i + x].nombre}.jpg" name="${dic_productos[i + x].nombre}" alt="imagen1">
                    <div class="product-info">
                        <h3 id="h${i + 1}">${dic_productos[i + x].nombre}</h3>
                        <p id="p${i + 1}">${dic_productos[i + x].precio}</p>
                    </div>
                </div>
            `;
        }
    } else {
        for (var i = 0; i < dic_productos.length; i++) {
            gall += `
                <div class="product-card" onclick="click_imagen(${i + 1})">
                    <img id="img${i + 1}" src="/media/${dic_productos[i + x].nombre}.jpg" name="${dic_productos[i + x].nombre}" alt="imagen1">
                    <div class="product-info">
                        <h3 id="h${i + 1}">${dic_productos[i + x].nombre}</h3>
                        <p id="p${i + 1}">${dic_productos[i + x].precio}</p>
                    </div>
                </div>
            `;
        }
    }
    gallery.innerHTML = gall;
    }
}



window.click_imagen = function(id) {
    var val = document.getElementById("img" + id);
    var valor = val.getAttribute("nombre");
    var indice = dic_productos.findIndex(objeto => objeto.nombre === valor);
    console.log(valor);
    console.log(indice);
    localStorage.setItem("ValorCompartido", JSON.stringify(dic_productos[indice]));
    govista();
}

function click_categorias(id) {
    localStorage.setItem('valorCompartido', id);
    govista();
}

window.onload = function() {
    dig[0].onclick();
    const button1 = document.querySelector('#inicio');
    const button2 = document.querySelector('#cuenta');
    button1.onclick = function() { goinicio(); };
    button2.onclick = function() { goregistro(); };
};
