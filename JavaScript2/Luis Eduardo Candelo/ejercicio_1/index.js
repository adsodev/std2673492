function ordenAlfabetico(cadena) {
    // Convertir la cadena a minúsculas
    cadena = cadena.toLowerCase();

    // Eliminar los espacios de la cadena
    let cadenaSinEspacios = cadena.replace(/\s/g, '');

    // Convertir la cadena sin espacios en un array de caracteres
    let caracteres = cadenaSinEspacios.split('');

    // Ordenar los caracteres alfabéticamente
    let caracteresOrdenados = caracteres.sort();

    // Unir los caracteres ordenados en una cadena
    let cadenaOrdenada = caracteresOrdenados.join('');

    return cadenaOrdenada;
}

// Ejemplo de uso:
let texto = prompt("Introduce una palabra");
console.log("Este es el texto normal: ", texto); 
let textoOrdenado = ordenAlfabetico(texto);
console.log("Texto ordenado alfabéticamente:", textoOrdenado);
