
let contraseñaCorrecta = "Clave123"
let usuarioCorrecto = "Manuel"

for (let intento = 1; intento < 4; intento++) {

    let usuario = prompt("Intento " + intento +" de 3.\n Ingrese el nombre de Usuario")
    let contraseña = prompt("Ingrese la contraseña")

   let userlogin = login(usuario,contraseña)
   if (userlogin) {
        break
   }
    
}
function login(usuario, contraseña) {
    if (usuario == "") {
        alert("Ingresar el nombre del usuario")
        return false
    }
    else if (contraseña == "") {
        alert("Ingresar la contraseña")
        return false
    }
    else if (contraseña != contraseñaCorrecta) {
        alert("Contraseña Incorrecta")    
        return false
    } 
    else if (usuario != usuarioCorrecto) {
        alert("Usuario Incorrecto")  
        return false  
    } 
    else {
        
        alert("bienvenido")
        return true
    }
}