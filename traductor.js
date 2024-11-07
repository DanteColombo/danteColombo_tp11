let palabra = "gato"

switch (palabra.toUpperCase()) {
    case "perro".toUpperCase():
        console.log("dog");
        break;
    case "gato".toUpperCase():
        console.log("cat");
        break;    
    case "puerta".toUpperCase():
        console.log("door");
        break;
    case "ventana".toUpperCase():
        console.log("window");
        break;      
    case "mesa".toUpperCase():
        console.log("table");
        break;
    default:
        console.log("La palabra ingresada es incorrecta");
        break;
}