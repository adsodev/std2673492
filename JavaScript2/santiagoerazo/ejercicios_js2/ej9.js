function generarNumerosAleatorios(segundos) {
    console.log(`Generando números aleatorios cada segundo durante
    ${segundos} segundos...`);
    const intervalo = setInterval(() => {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    console.log(`Número aleatorio: ${numeroAleatorio}`);
    if (segundos === 0) {
    clearInterval(intervalo);
    }
    segundos--;
    }, 1000);
    }
    generarNumerosAleatorios(10);
    