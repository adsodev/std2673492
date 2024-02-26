function sumarArreglosPorIndice(arreglo1, arreglo2) {
    if (arreglo1.length !== arreglo2.length) {
      throw new Error("Los arreglos deben tener la misma longitud");
    }
    const sumaArreglos = [];
  
    for (let i = 0; i < arreglo1.length; i++) {
      const suma = arreglo1[i] + arreglo2[i];
      sumaArreglos.push(suma);
    }
    return sumaArreglos;
  }
  const arreglo1 = [1, 0, 2, 3, 4, 0];
  const arreglo2 = [4, 3, 6, 7, 8, 13];
  try {
    const sumaArreglos = sumarArreglosPorIndice(arreglo1, arreglo2);
    console.log(sumaArreglos);
  } catch (error) {
    console.error(error.message);
  }
  

