function ordenarTexto(texto) {
    return [...texto].sort((a, b) => a.localeCompare(b)).join('');
}

console.log(ordenarTexto('software'));  