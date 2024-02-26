function retorno(arr) {
    
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
      
      suma += arr[i];
    }
    return suma;
  }

  const myArray = [34, 43, 65, 3, 86];
console.log(retorno(myArray)); 