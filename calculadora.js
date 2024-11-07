let num1= 10
let num2= 20

let operación= "dividdir"

switch (operación.toUpperCase()) {
    case "sumar".toUpperCase():
        console.log(`El resultado de sumar ${num1} + ${num2} es = ${num1+num2}`);
        break;
    case "restar".toUpperCase():
        console.log(`El resultado de restar ${num1} - ${num2} es = ${num1-num2}`);
        break;   
    case "multiplicar".toUpperCase():
        console.log(`El resultado de multiplicar ${num1} * ${num2} es = ${num1*num2}`);
        break;
    case "dividir".toUpperCase():
        if (num2==0){
            console.log(`No se puede divir ${num1} entre ${num2}`);
        }
        else{
            console.log(`El resultado de dividir ${num1} entre ${num2} es = ${num1/num2}`);
        }
    default:
        console.log("Las operaciones aceptadas son: sumar - restar- multiplicar- dividir");
        break;
}