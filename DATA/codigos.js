export const miArray = [
    //DELETE    
    `<div class="container">      
        <form id="registroForm">
            <div class="form-group">
                <label for="Borrar">ELIMINAR PRODUCTO:</label>
                <input  type="number" min="1"  id="Borrar" name="borrar" placeholder="Escribe el id a eliminar" required>
            </div>
            <div class="form-group">
                <button id="ELIMINAR">ELIMINAR</button>
            </div>
        </form>
    </div>`,
    //CAPTURA
        `<div class="container" >
                    <h2 id="hresultado" value="Registro">Captura de productos</h2>
                    <form id="registroForm">
                        <div class="form-group">
                            <label for="nombre">Nombre:</label>
                            <input type="text" id="nombre" name="nombre" placeholder="Escribe el nombre del producto" required>
                        </div>
                        <div class="form-group">
                            <label for="precio">Precio:</label>
                            <input  type="number" min="1" id="precio" name="precio" placeholder="Escribe el precio" required>
                        </div>
                        <div id="seleccion" class="form-group">
                            <label for="tipo">Seleccione una opción:</label>
                            <div id="tipo"class="radio-group">
                                <input type="radio" id="opcion1" name="opcion" value="Camisas" required>
                                <label for="opcion1">Camisas</label>
                                <input type="radio" id="opcion2" name="opcion" value="Pantalones" required>
                                <label for="opcion2">Pantalones</label>
                                <input type="radio" id="opcion3" name="opcion" value="Blusas" required>
                                <label for="opcion3">Blusas</label>
                                <input type="radio" id="opcion4" name="opcion" value="Shorts" required>
                                <label for="opcion4">Shorts</label>
                                <input type="radio" id="opcion5" name="opcion" value="Lenceria" required>
                                <label for="opcion5">Lencería</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="tallas">Tallas:</label>
                            <input type="text" id="tallas" name="tallas" placeholder="Escribe las tallas disponibles" required>
                        </div>
                        <div class="form-group">
                            <label for="colores">Colores:</label>
                            <input type="text" id="colores" name="colores" placeholder="Escribe los colores disponibles" required>
                        </div>
                        <div class="form-group">
                            <label for="inventario">Cantidad de inventario:</label>
                            <input type="number" min="1"  id="inventario" name="inventario" placeholder="Escribe la Cantidad de inventario" required>
                        </div>
                        <div class="form-group">
                            <label for="descripcion">Descripcion producto:</label>
                            <textarea type="text" id="descripcion" name="descripcion" placeholder="Escribe la descripcion" rows="10" cols="60" required ></textarea>
                        </div>
                        <div>
                <div id="drop-area">
                Arrastra y suelta archivos aquí
                </div>
            
                <div id="gallery"></div>
            </div>
                    
                        <div class="form-group" >
                            <button type="submit">Registrar</button>
                        </div>
                    </form>
                </div>    `,
                //UPDATE
    
                `
                <div style="align-items=center;">
                <div class= "update" >
        <form id="Buscap" class="search-container ">
            
                <label for="IDS">Ingresa el id del producto:</label>
                <input  type="number" min="1"  id="IDS" name="IDS" placeholder="Escribe el ID a buscar"  required>
                <button type="submit">Registrar</button>
            
        </form>
    </div>
    <div id="resultado3" class="container">
        <h2 id="hresultado" value="Actualizar">Actualizar productos</h2>
        <form id="registroForm">
            <div class="form-group">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" placeholder="Escribe el NUEVO nombre del producto" required>
            </div>
            <div class="form-group">
                <label for="precio">Precio:</label>
                <input  type="number" min="1"  id="precio" name="precio" placeholder="Escribe el NUEVO precio" required>
            </div>
            <div id="seleccion" class="form-group">
                <label for="tipo">Seleccione una opción:</label>
                 <div id="tipo"class="radio-group">
                    <input type="radio" id="opcion1" name="opcion" value="Camisas" required>
                    <label for="opcion1">Camisas</label>
                    <input type="radio" id="opcion2" name="opcion" value="Pantalones" required>
                    <label for="opcion2">Pantalones</label>
                    <input type="radio" id="opcion3" name="opcion" value="Blusas" required>
                    <label for="opcion3">Blusas</label>
                    <input type="radio" id="opcion4" name="opcion" value="Shorts" required>
                    <label for="opcion4">Shorts</label>
                    <input type="radio" id="opcion5" name="opcion" value="Lenceria" required>
                    <label for="opcion5">Lencería</label>
                </div>
            </div>
            <div class="form-group">
                <label for="tallas">Tallas:</label>
                <input type="text" id="tallas" name="tallas" placeholder="Escribe las NUEVAS tallas disponibles" required>
            </div>
            <div class="form-group">
                <label for="colores">Colores:</label>
                <input type="text" id="colores" name="colores" placeholder="Escribe los NUEVOS colores disponibles" required>
            </div>
            <div class="form-group">
                <label for="inventario">Cantidad de inventario:</label>
                <input  type="number" id="inventario" name="inventario" min="1"  placeholder="Escribe la NUEVA Cantidad de inventario" required>
            </div>
            <div class="form-group">
                <label for="descripcion">Descripción producto:</label>
                <textarea id="descripcion" name="descripcion" placeholder="Escribe la NUEVA descripción" rows="10" cols="60" required></textarea>
            </div>
            <div id="gallery1"></div>
            <div id="drop-area">
                Arrastra y suelta archivos aquí
            </div>    
            <div id="gallery2"></div>
    
    
            <div class="form-group">
                <button type="submit">Registrar</button>
            </div>
            
    
    
        </form>
    </div>
    </div>`
    ];