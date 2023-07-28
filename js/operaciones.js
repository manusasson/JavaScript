function agregarAlCarrito(id) {
    let articulo = articulos.find((articulo) => articulo.id == id);
    console.log(articulo);
    localStorage.setItem("Carrito", JSON.stringify(articulo));
    let respuesta = document.getElementById("respuesta");
    respuesta.innerHTML = `<p>Su producto fue agregado al carrito <button class="btn btn-dark" onClick="obtenerProducto()">Ver Producto</button></p>`;
  }
  
  function obtenerProducto() {
    let producto = JSON.parse(localStorage.getItem("Carrito"));
    let salida = `<div class="col-md-4">
      <img class="img-fluid" src="${producto.imagen}" alt="${producto.titulo}" onClick="agregarAlCarrito(${producto.id})">
       <p>${producto.titulo} <br/> ${producto.precio} </p>
      </div>`;
    let recuperar = document.getElementById("recuperar");
    recuperar.innerHTML = salida;
  }
  