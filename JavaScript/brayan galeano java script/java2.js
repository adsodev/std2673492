function retorno(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
 
  const myArray = [34, 43, 65, 3, 86];
  console.log(retorno(myArray)); 