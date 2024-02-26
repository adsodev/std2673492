function eliminarDuplicados(array) {
    
    const set = new Set(array);
    const nuevoArreglo = [...set];
    return nuevoArreglo;
  }
  
  const numeros = [1, 3, 3, 4, 5, 4, 9, 8, 9, 3, 6];
  
  const numerosSinDuplicados = eliminarDuplicados(numeros);
  
  console.log(numerosSinDuplicados);