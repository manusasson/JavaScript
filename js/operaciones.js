function agregarAlCarrito(id) {
    let articulo = articulos.find((articulo) => articulo.id == id);
    const carrito = JSON.parse(localStorage.getItem('Carrito')) || [];
    //carrito.push(JSON.parse(localStorage.getItem("Carrito")))

    
    carrito.push(articulo)


    console.log(articulo);
    localStorage.setItem("Carrito", JSON.stringify(carrito));
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
    let lista = []
    const carritoActual = JSON.parse(localStorage.getItem('Carrito')) || []
    let textSwal = "Estos son los articulos que estan en tu carrito: <br>"
    carritoActual.forEach(item => {
        lista.push(`<b>Nombre</b>: ${item.nombre} <b>Precio</b>: ${item.precio}<br>`)
        //console.log(`ID: ${item.id}, Nombre: ${item.nombre}, Precio: ${item.precio}, Cantidad: ${item.cantidad}`);
      });
      console.log(lista)
    Swal.fire({
        title: 'Lista del carrito!',
        html: textSwal + lista,
        imageUrl: articulos.imagen,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    });
  }
  
