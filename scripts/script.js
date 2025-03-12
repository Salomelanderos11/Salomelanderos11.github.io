
function  goinicio(){
   
    window.location.href ='index.html';
}
function  goregistro(){
   c=1;         
    //window.location.href = 'Sesion.html';
}
function  govista(){
    window.location.href = 'vista.html';
}
function  gocategoria(){
    window.location.href = 'categoria.html';
}
/*Array de productos */
const dic_productos=[
    { name:"865762", nombre: "Mano del Salomé",precio:"15.00$", desc:`<h2>nombre1</h2>
            <p>Una mano ordinaria.<hr>
                Tiene corte de piel y material sintético, con forro textil. Es de color bronce, y se ajusta con agujetas. Debido a su suela TR, se amoldan fácilmente a tus pies.
                <hr>
                Ya es hora de que estrenes... ¡Adquiérelas hoy mismo!</p>` },
    { name:"1", nombre: "Botas",precio:"15.00$" , desc:`<h2>La mano del Salomé</h2>
        <p>Una mano ordinaria.<hr>
            Tiene corte de piel y material sintético, con forro textil. Es de color bronce, y se ajusta con agujetas. Debido a su suela TR, se amoldan fácilmente a tus pies.
            <hr>
            Ya es hora de que estrenes... ¡Adquiérelas hoy mismo!</p>` },
    { name:"2", nombre: "Camisa",precio:"15.00$" , desc:`<h2>La mano del Salomé</h2>
        <p>Una mano ordinaria.<hr>
            Tiene corte de piel y material sintético, con forro textil. Es de color bronce, y se ajusta con agujetas. Debido a su suela TR, se amoldan fácilmente a tus pies.
            <hr>
            Ya es hora de que estrenes... ¡Adquiérelas hoy mismo!</p>` },
    { name:"4", nombre: "Carrito",precio:"15.00$" , desc:`<h2>La mano del Salomé</h2>
        <p>Una mano ordinaria.<hr>
            Tiene corte de piel y material sintético, con forro textil. Es de color bronce, y se ajusta con agujetas. Debido a su suela TR, se amoldan fácilmente a tus pies.
            <hr>
            Ya es hora de que estrenes... ¡Adquiérelas hoy mismo!</p>` },
    { name:"5", nombre: "Jeep",precio:"15.00$", desc:`<h2>La mano del Salomé</h2>
        <p>Una mano ordinaria.<hr>
            Tiene corte de piel y material sintético, con forro textil. Es de color bronce, y se ajusta con agujetas. Debido a su suela TR, se amoldan fácilmente a tus pies.
            <hr>
            Ya es hora de que estrenes... ¡Adquiérelas hoy mismo!</p>`  },
    { name:"6", nombre: "Botas",precio:"15.00$", desc:`<h2>La mano del Salomé</h2>
        <p>Una mano ordinaria.<hr>
            Tiene corte de piel y material sintético, con forro textil. Es de color bronce, y se ajusta con agujetas. Debido a su suela TR, se amoldan fácilmente a tus pies.
            <hr>
            Ya es hora de que estrenes... ¡Adquiérelas hoy mismo!</p>`  },
    { name:"7", nombre: "Camisa",precio:"15.00$", desc:`<h2>La mano del Salomé</h2>
        <p>Una mano ordinaria.<hr>
            Tiene corte de piel y material sintético, con forro textil. Es de color bronce, y se ajusta con agujetas. Debido a su suela TR, se amoldan fácilmente a tus pies.
            <hr>
            Ya es hora de que estrenes... ¡Adquiérelas hoy mismo!</p>`  },
    { name:"8", nombre: "Carrito",precio:"15.00$" , desc:`<h2>La mano del Salomé</h2>
        <p>Una mano ordinaria.<hr>
            Tiene corte de piel y material sintético, con forro textil. Es de color bronce, y se ajusta con agujetas. Debido a su suela TR, se amoldan fácilmente a tus pies.
            <hr>
            Ya es hora de que estrenes... ¡Adquiérelas hoy mismo!</p>` },
    { name:"9", nombre: "Jeep",precio:"15.00$", desc:`<h2>La mano del Salomé</h2>
        <p>Una mano ordinaria.<hr>
            Tiene corte de piel y material sintético, con forro textil. Es de color bronce, y se ajusta con agujetas. Debido a su suela TR, se amoldan fácilmente a tus pies.
            <hr>
            Ya es hora de que estrenes... ¡Adquiérelas hoy mismo!</p>`  },
    { name:"10", nombre: "Botas",precio:"15.00$" , desc:`<h2>La mano del Salomé</h2>
        <p>Una mano ordinaria.<hr>
            Tiene corte de piel y material sintético, con forro textil. Es de color bronce, y se ajusta con agujetas. Debido a su suela TR, se amoldan fácilmente a tus pies.
            <hr>
            Ya es hora de que estrenes... ¡Adquiérelas hoy mismo!</p>` },
    { name:"11", nombre: "Camisa",precio:"15.00$" , desc:`<h2>La mano del Salomé</h2>
        <p>Una mano ordinaria.<hr>
            Tiene corte de piel y material sintético, con forro textil. Es de color bronce, y se ajusta con agujetas. Debido a su suela TR, se amoldan fácilmente a tus pies.
            <hr>
            Ya es hora de que estrenes... ¡Adquiérelas hoy mismo!</p>` },
    { name:"12", nombre: "Carrito",precio:"15.00$", desc:`<h2>La mano del Salomé</h2>
        <p>Una mano ordinaria.<hr>
            Tiene corte de piel y material sintético, con forro textil. Es de color bronce, y se ajusta con agujetas. Debido a su suela TR, se amoldan fácilmente a tus pies.
            <hr>
            Ya es hora de que estrenes... ¡Adquiérelas hoy mismo!</p>`  },
    { name:"13", nombre: "Jeep",precio:"15.00$", desc:`<h2>La mano del Salomé</h2>
        <p>Una mano ordinaria.<hr>
            Tiene corte de piel y material sintético, con forro textil. Es de color bronce, y se ajusta con agujetas. Debido a su suela TR, se amoldan fácilmente a tus pies.
            <hr>
            Ya es hora de que estrenes... ¡Adquiérelas hoy mismo!</p>`  }/** ,
    { name:"1", nombre: "Botas",precio:"15.00$" , desc:`<h2>La mano del Salomé</h2>
        <p>Una mano ordinaria.<hr>
            Tiene corte de piel y material sintético, con forro textil. Es de color bronce, y se ajusta con agujetas. Debido a su suela TR, se amoldan fácilmente a tus pies.
            <hr>
            Ya es hora de que estrenes... ¡Adquiérelas hoy mismo!</p>` },
    { name:"2", nombre: "Camisa",precio:"15.00$" , desc:`<h2>La mano del Salomé</h2>
        <p>Una mano ordinaria.<hr>
            Tiene corte de piel y material sintético, con forro textil. Es de color bronce, y se ajusta con agujetas. Debido a su suela TR, se amoldan fácilmente a tus pies.
            <hr>
            Ya es hora de que estrenes... ¡Adquiérelas hoy mismo!</p>` },
    { name:"4", nombre: "Carrito",precio:"15.00$" , desc:`<h2>La mano del Salomé</h2>
        <p>Una mano ordinaria.<hr>
            Tiene corte de piel y material sintético, con forro textil. Es de color bronce, y se ajusta con agujetas. Debido a su suela TR, se amoldan fácilmente a tus pies.
            <hr>
            Ya es hora de que estrenes... ¡Adquiérelas hoy mismo!</p>` },
    { name:"5", nombre: "Jeep",precio:"15.00$", desc:`<h2>La mano del Salomé</h2>
        <p>Una mano ordinaria.<hr>
            Tiene corte de piel y material sintético, con forro textil. Es de color bronce, y se ajusta con agujetas. Debido a su suela TR, se amoldan fácilmente a tus pies.
            <hr>
            Ya es hora de que estrenes... ¡Adquiérelas hoy mismo!</p>`  },
    { name:"6", nombre: "Botas",precio:"15.00$" , desc:`<h2>La mano del Salomé</h2>
        <p>Una mano ordinaria.<hr>
            Tiene corte de piel y material sintético, con forro textil. Es de color bronce, y se ajusta con agujetas. Debido a su suela TR, se amoldan fácilmente a tus pies.
            <hr>
            Ya es hora de que estrenes... ¡Adquiérelas hoy mismo!</p>` },
    { name:"7", nombre: "Camisa",precio:"15.00$", desc:`<h2>La mano del Salomé</h2>
        <p>Una mano ordinaria.<hr>
            Tiene corte de piel y material sintético, con forro textil. Es de color bronce, y se ajusta con agujetas. Debido a su suela TR, se amoldan fácilmente a tus pies.
            <hr>
            Ya es hora de que estrenes... ¡Adquiérelas hoy mismo!</p>`  },
    { name:"8", nombre: "Carrito",precio:"15.00$" , desc:`<h2>La mano del Salomé</h2>
        <p>Una mano ordinaria.<hr>
            Tiene corte de piel y material sintético, con forro textil. Es de color bronce, y se ajusta con agujetas. Debido a su suela TR, se amoldan fácilmente a tus pies.
            <hr>
            Ya es hora de que estrenes... ¡Adquiérelas hoy mismo!</p>` },
    { name:"9", nombre: "Jeep",precio:"15.00$" , desc:`<h2>La mano del Salomé</h2>
        <p>Una mano ordinaria.<hr>
            Tiene corte de piel y material sintético, con forro textil. Es de color bronce, y se ajusta con agujetas. Debido a su suela TR, se amoldan fácilmente a tus pies.
            <hr>
            Ya es hora de que estrenes... ¡Adquiérelas hoy mismo!</p>` },
    { name:"10", nombre: "Botas",precio:"15.00$", desc:`<h2>La mano del Salomé</h2>
        <p>Una mano ordinaria.<hr>
            Tiene corte de piel y material sintético, con forro textil. Es de color bronce, y se ajusta con agujetas. Debido a su suela TR, se amoldan fácilmente a tus pies.
            <hr>
            Ya es hora de que estrenes... ¡Adquiérelas hoy mismo!</p>`  },
    { name:"11", nombre: "Camisa",precio:"15.00$", desc:`<h2>La mano del Salomé</h2>
        <p>Una mano ordinaria.<hr>
            Tiene corte de piel y material sintético, con forro textil. Es de color bronce, y se ajusta con agujetas. Debido a su suela TR, se amoldan fácilmente a tus pies.
            <hr>
            Ya es hora de que estrenes... ¡Adquiérelas hoy mismo!</p>`  },
    { name:"12", nombre: "Carrito",precio:"15.00$" , desc:`<h2>La mano del Salomé</h2>
        <p>Una mano ordinaria.<hr>
            Tiene corte de piel y material sintético, con forro textil. Es de color bronce, y se ajusta con agujetas. Debido a su suela TR, se amoldan fácilmente a tus pies.
            <hr>
            Ya es hora de que estrenes... ¡Adquiérelas hoy mismo!</p>` },
    { name:"13", nombre: "Jeep",precio:"15.00$" , desc:`<h2>La mano del Salomé</h2>
        <p>Una mano ordinaria.<hr>
            Tiene corte de piel y material sintético, con forro textil. Es de color bronce, y se ajusta con agujetas. Debido a su suela TR, se amoldan fácilmente a tus pies.
            <hr>
            Ya es hora de que estrenes... ¡Adquiérelas hoy mismo!</p>` },*/
   
]

/*Array de productos */

/*////Definir cantidad de paginas////*/
const cant_productos = dic_productos.length;
const product_x_pag= 20;

var can_paginas= Math.floor(cant_productos / product_x_pag);//cantidad entera de paginas

if (cant_productos%product_x_pag!=0){   can_paginas +=1;    }// crear pagina con el residuo

if (cant_productos<product_x_pag){    can_paginas=1;   }// Si la cantidad de productos es menor a la cantidad de productos por pagina declaramos can_paginas = 1 

var pagina=[];// Array vacio para añadir la cantidad de paginas  
var text_paginas="";//aqui vamos agragar los div de cada pagina
for(i=0;i<can_paginas;i++){         
    text_paginas +=`<div id="pagina${i+1}">${i+1}</div>`
    
}
var div_paginas= document.getElementById("div_paginas");
div_paginas.innerHTML=
`<div >&laquo;</div>
${text_paginas}
<div >&raquo;</div>`;
/*////Definir cantidad de pagina////*/

/*añadir class active a numero de pagina*/
var pagina_activa ;
dig=div_paginas.querySelectorAll('[id]');
    dig[0].classList.add("active");
    dig.forEach(element => {
      element.onclick= function (){
        dig.forEach(element => {
            element.classList.remove("active");
        
        });
        element.classList.add("active");
        pagina_activa= element.getAttribute("id");
        pagina_activa.toString();
        pagina_activa = pagina_activa[pagina_activa.length-1]; 
        galleryproduct(pagina_activa);
      } 
    });
/*añadir class active a numero de pagina*/

//ANADIR CATEGORIAS DE ROPA /*////////////////////////////////////////////*/
const categori = document.getElementById("categorias");
var div_categori=""
const categorias=["Blusa","Pantalon","Vestido", "Lenceria"]
for(i=0;i<categorias.length;i++){
    div_categori += `<div class="container" onclick="click_categorias('${categorias[i]}')">
    <img id="${categorias[i]}" src="your-image-url.jpg" alt="Descripción" class="image-48x48">
    <div class="text-blue">${categorias[i]}</div>
  </div>`;

    
}
categori.innerHTML= div_categori;

//ANADIR CATEGORIAS DE ROPA /*////////////////////////////////////////////*/

/*////////////////Establecer imagenes de pagina principal de manera aleatoria ////////////////*/

function mezclarLista(lista) {
    return lista.sort(() => Math.random() - 0.5);
  }
lista_mezclada = mezclarLista(dic_productos);

var gallery=document.getElementById("gallery");
function galleryproduct(pagina_activa){
    var gall="";
    var x= (pagina_activa-1)*product_x_pag;
    if(pagina_activa!=can_paginas)
    {
        for (i=0;i<product_x_pag;i++)
        {
       gall += `
           
            <div  class="product-card" onclick="click_imagen(${i+1})">
                <img id="img${i+1}" src="media/${lista_mezclada[i+x].name}.jpg" name="${lista_mezclada[i+x].name}" value=""src="" alt="imagen1">
                <div class="product-info">
                    <h3 id="h${i+1}">${lista_mezclada[i+x].name}</h3>
                    <p id="p${i+1}">${lista_mezclada[i+x].precio}</p>
                </div>
            </div>
           
`       
        }
    }
    else{
        
        for (i=0;i<(lista_mezclada.length%product_x_pag);i++)
            {
           gall += `
                <div  class="product-card" onclick="click_imagen(${i+1})">
                    <img id="img${i+1}" src="media/${lista_mezclada[i+x].name}.jpg" name="${lista_mezclada[i+x].name}" value=""src="" alt="imagen1">
                    <div class="product-info">
                        <h3 id="h${i+1}">${lista_mezclada[i+x].name}</h3>
                        <p id="p${i+1}">${lista_mezclada[i+x].precio}</p>
                    </div>
                </div>
    `
            }

    }
        gallery.innerHTML=gall;
   
}
/*////////////////Establecer imagenes de pagina principal de manera aleatoria ////////////////*/

    /*//////////////////////click productos//////////////////////*/
     function click_imagen(id){
        var val = document.getElementById("img"+id); 
        valor =val.getAttribute("name");
        parseInt(valor);
        var indice = dic_productos.findIndex(objeto => objeto.name === valor);
        console.log(valor)
        console.log(indice)
        localStorage.setItem("ValorCompartido", JSON.stringify(dic_productos[indice]));
        govista();
     }
/*//////////////////////click productos//////////////////////*/
/*//////////////////////click productos//////////////////////*/
function click_categorias(id){
    
    localStorage.setItem('valorCompartido', id);
    gocategoria();
 }
/*//////////////////////click productos//////////////////////*/
/*Activar class active a la pagina 1 al cargar la pagina*/

window.onload = function() {    
    dig[0].onclick();  
    const button1 = document.querySelector('#inicio');
    const button2 = document.querySelector('#cuenta');
    button1.onclick = function() { goinicio(); };
    button2.onclick = function() { goregistro(); };
};

