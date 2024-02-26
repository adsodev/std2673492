function combineAndRemoveDuplicates(array1, array2) {
    const uniqueElements = new Set();
  

    for (const element of array1) {
      uniqueElements.add(element);
    }
    for (const element of array2) {
      uniqueElements.add(element);
    }
  
    const result = [...uniqueElements];
  

    return result;
  }
  

  const array1 = [5, 2, 3];
  const array2 = [2, 30, 5];
  
  
  const result = combineAndRemoveDuplicates(array1, array2);
  
  
  console.log(result);