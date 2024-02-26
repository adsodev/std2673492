function invertirArreglo(array) {
    
    const nuevoArreglo = [];
  
    
    for (let i = array.length - 1; i >= 0; i--) {
      
      nuevoArreglo.push(array[i]);
    }
  
    
    return nuevoArreglo;
  }
  const numeros = [2, 5, 3, 9];

const arregloInvertido = invertirArreglo(numeros);

console.log(arregloInvertido); 