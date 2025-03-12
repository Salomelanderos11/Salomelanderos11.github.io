document.addEventListener('DOMContentLoaded', function() {
    fetch('/php/consulta.php')
        .then(response => response.json())
        .then(data => {
            const productosLista = document.getElementById('productos-lista');
            data.forEach(producto => {
                const productoDiv = document.createElement('div');
                productoDiv.classList.add('product-card');

                productoDiv.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <div class="product-info">
                        <h3>${producto.nombre}</h3>
                        <p><strong>Precio:</strong> ${producto.precio}</p>
                        <p><strong>Inventario:</strong> ${producto.inventario}</p>
                        <p><strong>Descripción:</strong> ${producto.descripcion}</p>
                        <p><strong>Colores:</strong> ${producto.colores}</p>
                        <p><strong>Tipo:</strong> ${producto.tipo}</p>
                        <p><strong>Tallas:</strong> ${producto.tallas}</p>
                    </div>
                `;
                productosLista.appendChild(productoDiv);
            });
        })
        .catch(error => console.error('Error:', error));
});
