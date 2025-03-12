function goinicio() {
    window.location.href = '/html/index.html';
}
function goregistro() {
    window.location.href = '/html/Sesion.html';
}
function govista() {
    window.location.href = '/html/vista.html';
}

/* Array de productos */
const dic_productos = [
    { name: "865762", nombre: "Mano del Salomé", precio: "15.00$" }
];

/* Capturar la categoría clicada en el index */
var categoria_elegida = localStorage.getItem('valorCompartido');

/* Conexión a la BD */
function enviarString(categoria_elegida) {
    fetch('/php/consulta_categoria.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'miString=' + encodeURIComponent(categoria_elegida)
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
        } else {
            console.log(data); // Imprime el array de productos en la consola
        }
        if (Array.isArray(data)) {
            // Agrega los productos al array `dic_productos`
            data.forEach(producto => {
                const productonuevo = {
                    name: producto.nombre,
                    nombre: producto.nombre,
                    precio: producto.precio
                };
                dic_productos.push(productonuevo);
            });
            // Llama a la función para mostrar los productos
            galleryproduct(pagina_activa); // Asume que la página activa inicial es la primera
        } 
        else {
            console.error('Datos no válidos:', data);
        }
    })
    .catch(error => console.error('Error:', error));
}

 var categoria_elegida = localStorage.getItem('valorCompartido');
    enviarString(categoria_elegida);



/* Definir cantidad de páginas */
const cant_productos = dic_productos.length;
const product_x_pag = 20;
var can_paginas = Math.floor(cant_productos / product_x_pag);
if (cant_productos % product_x_pag != 0) { can_paginas += 1; }
if (cant_productos < product_x_pag) { can_paginas = 1; }

var text_paginas = "";
for (i = 0; i < can_paginas; i++) {
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
var gallery = document.getElementById("gallery");
console.log(lista_mezclada.length );

// Modifica la función `galleryproduct` para aceptar `dic_productos` actualizado
function galleryproduct(pagina_activa) {
    var gall = "";
    var x = (pagina_activa - 1) * product_x_pag;
    if (pagina_activa != can_paginas) {
        for (var i = 0; i < product_x_pag; i++) {
            gall += `
                <div class="product-card" onclick="click_imagen(${i + 1})">
                    <img id="img${i + 1}" src="/media/${dic_productos[i + x].name}.jpg" name="${dic_productos[i + x].name}" alt="imagen1">
                    <div class="product-info">
                        <h3 id="h${i + 1}">${dic_productos[i + x].name}</h3>
                        <p id="p${i + 1}">${dic_productos[i + x].precio}</p>
                    </div>
                </div>
            `;
        }
    } else {
        for (var i = 0; i < dic_productos.length; i++) {
            gall += `
                <div class="product-card" onclick="click_imagen(${i + 1})">
                    <img id="img${i + 1}" src="/media/${dic_productos[i + x].name}.jpg" name="${dic_productos[i + x].name}" alt="imagen1">
                    <div class="product-info">
                        <h3 id="h${i + 1}">${dic_productos[i + x].name}</h3>
                        <p id="p${i + 1}">${dic_productos[i + x].precio}</p>
                    </div>
                </div>
            `;
        }
    }
    gallery.innerHTML = gall;
}


function click_imagen(id) {
    var val = document.getElementById("img" + id);
    var valor = val.getAttribute("name");
    localStorage.setItem('valorCompartido', valor);
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
