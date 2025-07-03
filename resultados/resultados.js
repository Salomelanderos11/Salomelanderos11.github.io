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
import base from '/DATA/datos.json' with { type: 'json' };

document.addEventListener('DOMContentLoaded', function () {
    var dic_productos = base;
    var filteredProducts = [];

    const urlParams = new URLSearchParams(window.location.search);
    var criterio_r = urlParams.get('criterio');
    if (criterio_r != null) {
        criterio_r = criterio_r.replace(/_/g, " ");
    }
    var criterio_ini = criterio_r?.toLowerCase() || "";
    const criterios = criterio_ini ? criterio_ini.split(" ") : [];

    dic_productos.forEach(producto => {
        criterios.forEach(criterio => {
            if (criterio.length > 2 &&
                (producto.nombre.toLowerCase().includes(criterio) || producto.descripcion.toLowerCase().includes(criterio))
            ) {
                if (!filteredProducts.some(p => p.id === producto.id)) {
                    filteredProducts.push(producto);
                }
            }
        });
    });
    const categorias = ["Blusas", "Pantalones", "Shorts", "Lenceria", "Camisas"];
    const contenedorCategorias = document.getElementById("categorias");
    
    categorias.forEach(categoria => {
        const btn = document.createElement("button");
        btn.setAttribute("id",categoria);
        btn.classList.add("boton-categoria"); // puedes personalizar esta clase en tu CSS
        btn.textContent = categoria;
        btn.onclick = function () {
            goresultados_cat(criterio_r, categoria); // o la función que uses para filtrar
        };
        contenedorCategorias.appendChild(btn);
    });

    
    const categoria = urlParams.get('cat');
    
    if (categoria != null) {
        filteredProducts = filteredProducts.filter(product => product.tipo == categoria);
        const btnAct = document.getElementById(categoria);
        if (btnAct) {btnAct.classList.add("active");
            
        }
        
    }

    if (filteredProducts.length >0){
        const divresult= document.getElementById("result");
        const presultado= document.createElement("p");
        presultado.innerText= "Estos son los resultados de tu busqueda : "+ criterio_r;
        divresult.appendChild (presultado);
    }
    else{
        const divresult= document.getElementById("result");
        const presultado= document.createElement("p");
        presultado.innerText= "No se encontraron resultados para : "+ criterio_r;
        divresult.appendChild (presultado);
    }

    const product_x_pag = 15;
    const cant_productos = filteredProducts.length;
    var can_paginas = Math.ceil(cant_productos / product_x_pag);

    const div_paginas = document.getElementById("div_paginas");
    const gallery = document.getElementById("gallery");

    let text_paginas = "";
    for (let i = 0; i < Math.min(can_paginas, 3); i++) {
        text_paginas += `<div id="pagina${i + 1}" value="${i + 1}">${i + 1}</div>`;
    }

    div_paginas.innerHTML = `
        <div id="ant">&laquo;</div>
        ${text_paginas}
        <div id="next">&raquo;</div>
    `;

    const btnnext = document.getElementById("next");
    const btnant = document.getElementById("ant");
    let pagina_activa = 1;
    const dig = div_paginas.querySelectorAll('[id]');

    function galleryproduct(pagina) {
        let gall = "";
        let inicio = (pagina - 1) * product_x_pag;
        let limite = pagina != can_paginas ? product_x_pag : (filteredProducts.length - (can_paginas - 1) * product_x_pag);

        for (let i = 0; i < limite; i++) {
            const producto = filteredProducts[i + inicio];
            const produc_nom = producto.nombre.replace(/ /g, "_");
            const imagen = `${produc_nom}_1.avif`;

            gall += `
            <div class="product-card" onclick="click_imagen(${producto.id})">
                <img src="/media/${producto.tipo}/${produc_nom}/${imagen}" alt="${producto.nombre}">
                <div class="product-info">
                    <h3>${producto.nombre}</h3>
                    <p>$${producto.precio}</p>
                </div>
            </div>`;
        }
        gallery.innerHTML = gall;
    }

    function pag_activa(nueva_pagina) {
        if (nueva_pagina < 1 || nueva_pagina > can_paginas) return;

        pagina_activa = nueva_pagina;
        let grupo = Math.ceil(nueva_pagina / 3);
        let inicio = (grupo - 1) * 3 + 1;

        dig.forEach((el, idx) => {
            if (el.id !== "ant" && el.id !== "next") {
                let offset = idx - 1;
                let nuevo_valor = inicio + offset;
                if (nuevo_valor <= can_paginas) {
                    el.textContent = nuevo_valor;
                    el.setAttribute("value", nuevo_valor);
                    el.style.display = "block";
                    el.classList.remove("active");
                    if (nuevo_valor == nueva_pagina) {
                        el.classList.add("active");
                    }
                } else {
                    el.style.display = "none";
                }
            }
        });

        galleryproduct(nueva_pagina);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function setupPageButtons() {
        dig.forEach(el => {
            if (el.id !== "ant" && el.id !== "next") {
                el.onclick = () => {
                    const valor = parseInt(el.getAttribute("value"));
                    pag_activa(valor);
                };
            }
        });

        btnnext.onclick = () => {
            if (pagina_activa < can_paginas) {
                pag_activa(pagina_activa + 1);
            }
        };
        btnant.onclick = () => {
            if (pagina_activa > 1) {
                pag_activa(pagina_activa - 1);
            }
        };
    }

    setupPageButtons();
    pag_activa(1);
});


//////////////////////////CARGA DE CONTENIDO//////////////////////////



window.click_imagen = function(id) {
    govista(id);
}




