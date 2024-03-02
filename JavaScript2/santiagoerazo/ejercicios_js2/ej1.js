function ordenarAlfabeticamente(texto) {
    const letras = texto.split('');
    letras.sort();
    const textoOrdenado = letras.join('');
    return textoOrdenado;
    }
    const texto = "software";
    const textoOrdenado = ordenarAlfabeticamente(texto);
    console.log(textoOrdenado);
    