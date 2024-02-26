function parametro(arr) {
    if (arr.length === 0) {
      return null; 
    }
    return arr[arr.length - 1]; 
  }
  
  
  const myArray = [2, 5, 3, 9];
  console.log(parametro(myArray)); 