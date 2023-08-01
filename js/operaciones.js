function agregarAlCarrito(id) {
    let articulo = articulos.find((articulo) => articulo.id == id);
    let carrito = []
    //carrito.push(JSON.parse(localStorage.getItem("Carrito")))
    carrito.push(articulo)
    console.log(carrito)

    console.log(articulo);
    localStorage.setItem("Carrito", JSON.stringify(articulo));
    let respuesta = document.getElementById("respuesta");



      // 
      Swal.fire({
        position: 'top-end',
        title: '¡Felicitaciones!',
        text: `El producto ${articulo.nombre} fue agregado al carrito!`,
        icon: 'success', // Puedes usar 'success', 'error', 'warning', 'info' o 'question'
        confirmButtonText: 'Aceptar',
        timer: 1500
    });
      //mostrarMensaje();

    respuesta.innerHTML = `<button class="btn btn-dark" onClick="obtenerProducto()">Ver Carrito</button></p>`;
  }
  
  function obtenerProducto() {

    let articulo = JSON.parse(localStorage.getItem("Carrito"));
    Swal.fire({
        title: 'Lista del carrito!',
        text: 'Estos articulos estan en tu carrito',
        imageUrl: articulo.imagen,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    });
  }
  
