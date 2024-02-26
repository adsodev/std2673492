function obtenerUltimoElemento(array) {
    
    const longitudArreglo = array.length;
    const indiceUltimoElemento = longitudArreglo - 1;
    return array[indiceUltimoElemento];
  }
  const numeros = [2, 5, 3, 9];

const ultimoElemento = obtenerUltimoElemento(numeros);

console.log(ultimoElemento);