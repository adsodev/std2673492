function crearTemporizador(segundos) {
    console.log(`Comenzando el temporizador...`);
    for (let i = 1; i <= segundos; i++) {
    setTimeout(() => {
    console.log(`Tiempo actual: ${i} segundos`);
    if (i === segundos) {
    console.log("¡El tiempo ha terminado!");
    }
    }, i * 1000);
    }
    }
    crearTemporizador(10);