let velocidad = 900;
let altura = 3300;

let controlVelocidad=false
let controlAltura=false


velocidad>= 268 && velocidad<= 278 ? controlVelocidad=true : "";
altura>= 150 && altura<=300 ? controlAltura=true : "";

if (controlVelocidad && controlAltura){
    console.log("El avión esta listo para iniciar el aterrizaje");
}else{
    if (!controlVelocidad && !controlAltura) {
        console.log("El avión no está en condiciones para aterrizar, ajuste la velocidad y la altura");
    } else if (!controlVelocidad) {
        console.log("El avión no está en condiciones para aterrizar, ajuste la velocidad.");
    } else if (!controlAltura) {
        console.log("El avión no está en condiciones para aterrizar, ajuste la altura.");
    }
}