const articulos = [

{id:1,nombre:"Cerveza IPA",precio:120,descripcion:"Cerveza amarga de color rojizo",imagen:"./images/IPA.png"},
{id:2,nombre:"Cerveza Brown",precio:130,descripcion:"Cerveza de color oscuro y notas de caramelo",imagen:"./images/Brown.png"},
{id:3,nombre:"Cerveza Lager",precio:115,descripcion:"Cerveza con amargor medio de color cobre con notas a Citricos",imagen:"./images/Lager.png"}
];



function mostrarProductos() {
let contenido = document.getElementById("contenido");
let salida = "";
for (const itemProducto of articulos) {
  salida += `<div class="col-md-4">
  <img class="img-fluid" src="${itemProducto.imagen}" alt="${itemProducto.nombre}" onClick="agregarAlCarrito(${itemProducto.id})">
   <p>${itemProducto.nombre}<br/> ${itemProducto.descripcion} <br/> Precio: ${itemProducto.precio} </p>
   <p><button class="btn btn-dark" onClick="agregarAlCarrito (${itemProducto.id})">Agregar al Carrito</button></p>
  </div>`;
}
contenido.innerHTML = salida;
console.log(contenido);
}
mostrarProductos()

