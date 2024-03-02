function crearTemporizadorRegresivo(segundos) {
    console.log(`Comenzando el temporizador...`);
    const intervalo = setInterval(() => {
    segundos--;
    console.log(`Tiempo restante: ${segundos} segundos`);
    if (segundos === 0) {
    clearInterval(intervalo);
    console.log("¡El tiempo ha terminado!");
    }
    }, 1000);
    }
    crearTemporizadorRegresivo(11);
    