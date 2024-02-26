function combinarEliminarDuplicados(arreglo1, arreglo2) {

    const arregloCombinado = [...arreglo1, ...arreglo2];
    const set = new Set(arregloCombinado);
    const nuevoArreglo = [...set];
    return nuevoArreglo;
  }
  
  const arreglo1 = [5, 2, 3];
  const arreglo2 = [2, 30, 5];
  const nuevoArreglo = combinarEliminarDuplicados(arreglo1, arreglo2);
  console.log(nuevoArreglo);
  