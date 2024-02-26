function getLastElement(arr) {
    
   
    if (!arr.length) {
      return undefined;
    }
    return arr[arr.length - 1];
  }
  
 
  const arr = [2, 5, 3, 9];
  const lastElement = getLastElement(arr);
  console.log(lastElement);
  