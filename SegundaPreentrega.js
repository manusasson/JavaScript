
let listaUsuarios = []


class NuevoUsuario {
    constructor(NombreUsuario, contraseña) {
        this.NombreUsuario= NombreUsuario;
        this.contraseña= contraseña;
       
    }
}
let usuario1 = new NuevoUsuario("Manuel",12345)
listaUsuarios.push(usuario1)


function RegistrarUsuario(){
    let nombreUsuario= prompt("Ingrese nombre del usuario: ");
    let contraseña= prompt("Ingrese una contraseña: ");
    if (listaUsuarios.findIndex(({ NombreUsuario }) => NombreUsuario === nombreUsuario) != -1) {
        alert("Usuario ya existe")
        menu()
    }
    else{
        let usuario = new NuevoUsuario(nombreUsuario,contraseña)
        alert(`Usuario ${usuario.NombreUsuario} Creado`)
    } 
}

function EliminarUsuario(NombreUsuario){
    if (listaUsuarios.findIndex( NombreUsuario  => NombreUsuario === NombreUsuario) = -1) {
        alert("Usuario no existe")
    }
    else{
        console.log(listaUsuarios)
       const index = listaUsuarios.indexOf(NombreUsuario)
       const usuarioEliminado = listaUsuarios.splice(index,1)
       console.log(`Usuario ${usuarioEliminado} Eliminado`)
    } 
}


const articulos = [{nombre:"Moto",precio:500},{nombre:"Auto",precio:1000},{nombre:"Bicicleta",precio:200}]

function ConsultarPrecios()
{
    let lista = ""

    articulos.forEach(articulo => lista +=  `Articulo: ${articulo.nombre} Precio: ${articulo.precio} \n`)
    alert(lista)
    menu()
}


function Comprar(){
    let lista = ""

    articulos.forEach((articulo,index) => lista +=  `${index+1}) Articulo: ${articulo.nombre} Precio: ${articulo.precio} \n`)
    let opt = prompt(lista + "Que articulo Desea Comprar?")

    alert(`Gracias por la compra de: ${articulos[opt].nombre}`)
    menu()
}

function menu(){
    alert("Bienvenido a la pagina de Venta de Insumos");
    let opcion= parseInt(prompt("Seleccione una opción: \n 1) Registrarse \n 2) Eliminar Cuenta \n 3) Consultar Precios \n 4) Comprar \n 5) Salir"));
    return opcion;
}
let opcion= menu();
switch (opcion){
    case 1:
        RegistrarUsuario();
        break;
    case 2:
        nombreUsuarioEliminar = prompt("Que usuario desea eliminar?")
        EliminarUsuario(nombreUsuarioEliminar);
        break;
    case 3:
        ConsultarPrecios();
        break;
    case 4:
        Comprar();
        break;
    case 5:
        //salir();
        break;
    default:
        alert("Opcion no valida");
        break;    
}
