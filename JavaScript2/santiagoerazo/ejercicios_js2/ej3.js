function contarVocales(texto) {
    const textoMinusculas = texto.toLowerCase();
    const vocales = /[aeiou]/g;
    const numeroVocales = textoMinusculas.match(vocales).length;
    return numeroVocales;
    }
    const texto = "analisis y desarrollo de software";
    const numeroVocales = contarVocales(texto);
    console.log(numeroVocales);