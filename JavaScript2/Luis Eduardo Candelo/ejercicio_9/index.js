// Se cambia la función de generar numeros aleatorios a una que permita generar numeros pares cada cierto tiempo.

let numPar = 0;
function generarNumeroAleatorio() {


    numPar = numPar + 2;

    console.log("Numero pares: ", numPar)



}


setInterval(generarNumeroAleatorio, 1000000); 