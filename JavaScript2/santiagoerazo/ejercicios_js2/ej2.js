function encontrarPalabraMasLarga(texto) {
    const palabras = texto.split(' ');
    let palabraMasLarga = '';
    for (const palabra of palabras) {
    if (palabra.length > palabraMasLarga.length) {
    palabraMasLarga = palabra;
    }
    }
    return palabraMasLarga;
    }
    const texto = "análisis y desarrollo de software";
    const palabraMasLarga = encontrarPalabraMasLarga(texto);
    console.log(palabraMasLarga);
    