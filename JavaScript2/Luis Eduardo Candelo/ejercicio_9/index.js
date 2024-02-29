function generarNumeroAleatorio() {
    // Genera un número aleatorio entre 1 y 100
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    console.log("Número aleatorio:", numeroAleatorio);
}


setInterval(generarNumeroAleatorio, 10000); 