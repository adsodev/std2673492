function imprimirPatron(filas) {
    for (let i = 1; i <= filas; i++) {
      let asteriscos = "";
      for (let j = 1; j <= i; j++) {
        asteriscos += "*";
      }
      console.log(asteriscos);
    }
  }
  
  const numFilas = 5;
  
  imprimirPatron(numFilas);
  