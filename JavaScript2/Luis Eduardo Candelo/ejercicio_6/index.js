function temporizador(valueUser) {
    // Empezar el contador desde 1
    let contador = 1;

    let milisegundos = valueUser * 10000;
    setTimeout(function() {
        console.log("El tiempo ha terminado");
    }, milisegundos);

    // Mostrar los números del contador cada segundo
    const intervalo = setInterval(function() {
        console.log(contador);
        contador++;

        // Si el contador llega a 11, detener el intervalo
        if (contador > valueUser) {
            clearInterval(intervalo);
        }
    }, 1000); // 1000 milisegundos = 1 segundo
}

let valueCont = prompt("Escriba el valor en c10ual va finalizar");
temporizador(valueCont);

