function tipoDato(cadena) {
    if (!isNaN(parseFloat(cadena))) {
        if (cadena.includes('.')) {
            return 'number';
        } else {
            return 'integer';
        }
    } else if (cadena.toLowerCase() === 'true' || cadena.toLowerCase() === 'false') {
        return 'boolean';
    } else {
        return 'string';
    }
}

// Ejemplo de uso:
let texto = prompt("Escribe Cualquier valor");
console.log(texto)
let typeDate = tipoDato(texto);
console.log(`El tipo de dato de ${texto} es:`, typeDate);
