
function agregarAlCarrito(id) {
    let articulo = articulos.find((articulo) => articulo.id == id);
    let carrito = JSON.parse(localStorage.getItem('Carrito')) || [];

    // Asegurarse de que carrito sea siempre un array
    if (!Array.isArray(carrito)) {
        carrito = [];
    }
    
    carrito.push(articulo);


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

    //respuesta.innerHTML = `<button class="btn btn-dark" onClick="obtenerProducto()">Ver Carrito</button></p>`;
  }
  
  function obtenerProducto() {
    let lista = []
    const carritoActual = JSON.parse(localStorage.getItem('Carrito')) || []
    let textSwal = "Estos son los articulos que estan en tu carrito: <br>"
    let total = 0

    carritoActual.forEach(item => {
          const div = document.createElement("div");
          div.classList.add("carrito-producto");
          div.innerHTML = `
              <img class="carrito-producto-imagen" src="${item.imagen}" alt="${item.nombre}">
              <div class="carrito-producto-titulo">
                  <small>Título</small>
                  <h3>${item.nombre}</h3>
              </div>
              <div class="carrito-producto-cantidad">
                  <small>Cantidad</small>
                  <p>1</p>
              </div>
              <div class="carrito-producto-precio">
                  <small>Precio</small>
                  <p>$${item.precio}</p>
              </div>
              <div class="carrito-producto-subtotal">
                  <small>Subtotal</small>
                  <p>$${item.precio}</p>
              </div>
              <button class="carrito-producto-eliminar" id="${item.id}"><i class="bi bi-trash-fill"></i></button>`
      })

    // carritoActual.forEach(item => {
    //     lista.push(`<b>Articulo</b>: ${item.nombre} <b>Precio</b>: ${item.precio}<br>`)
    //     total += item.precio
    //     //console.log(`ID: ${item.id}, Nombre: ${item.nombre}, Precio: ${item.precio}, Cantidad: ${item.cantidad}`);
    //   });
    //   console.log(lista)
    // Swal.fire({
    //     title: 'Lista del carrito!',
    //     html: textSwal + lista +"<hr><br> <b>Total:</b> "+ total,
    //     imageUrl: articulos.imagen,
    //     imageWidth: 400,
    //     imageHeight: 200,
    //     imageAlt: 'Custom image',
    // });
  }
  
