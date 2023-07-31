function agregarAlCarrito(id) {
    let articulo = articulos.find((articulo) => articulo.id == id);
    let carrito = [];
    carrito.push(articulo)

    console.log(articulo);
    localStorage.setItem("Carrito", JSON.stringify(articulo));
    let respuesta = document.getElementById("respuesta");



      // 
      Swal.fire({
        title: '¡Felicitaciones!',
        text: `El producto ${articulo.nombre} fue agregado al carrito!`,
        icon: 'success', // Puedes usar 'success', 'error', 'warning', 'info' o 'question'
        confirmButtonText: 'Aceptar'
    });
      //mostrarMensaje();

    respuesta.innerHTML = `<button class="btn btn-dark" onClick="obtenerProducto()">Ver Carrito</button></p>`;
  }
  
  function obtenerProducto() {
    let producto = JSON.parse(localStorage.getItem("Carrito"));
    let salida = `<div class="col-md-4">
      <img class="img-fluid" src="${producto.imagen}" alt="${producto.nombre}" onClick="agregarAlCarrito(${producto.id})">
       <p>${producto.nombre} <br/> ${producto.precio} </p>
      </div>`;
    let recuperar = document.getElementById("recuperar");
    recuperar.innerHTML = salida;
  }
  
