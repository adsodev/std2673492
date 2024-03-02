function obtenerTipoDato(argumento) {
    const tipoDato = typeof argumento;
    return tipoDato;
    }
    console.log(obtenerTipoDato("Hola"));
    console.log(obtenerTipoDato(10));
    console.log(obtenerTipoDato(true));
    console.log(obtenerTipoDato(null));
    console.log(obtenerTipoDato(undefined));