function crearTemporizadorEspera(segundos, accion) {
    console.log(`Esperando ${segundos} segundos...`);
    setTimeout(() => {
    accion();
    }, segundos * 1000);
    }
    function mostrarMensaje() {
    console.log("¡Hola Juan Velasco!");
    }
    crearTemporizadorEspera(5, mostrarMensaje);
    