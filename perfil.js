// a. administrador
// b. asistente
// c. invitado.

let perfil="invitado";

if (perfil==undefined){
    console.log("Debe especificar el perfil del usuario");
}
else if (perfil.toUpperCase() == "administrador".toUpperCase()){
    console.log("Usted tiene todos los privilegios de uso del sistema");
}
else if (perfil.toUpperCase() == "asistente".toUpperCase()){
    console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
}
else if (perfil.toUpperCase() == "invitado".toUpperCase()){
    console.log("Usted sólo tiene permisos de consultar datos");
}else {
    console.log("Debe especificar un perfil válido");
}