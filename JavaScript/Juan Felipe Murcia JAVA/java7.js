function combinaryRemoverDuplicados(array1, array2) {
    
    const uniqueSet = new Set([...array1, ...array2]);
  
    
    return Array.from(uniqueSet);
  }
  
  
  const array1 = [5, 2, 3];
  const array2 = [2, 30, 5];
  const combinedUniqueArray = combinaryRemoverDuplicados(array1, array2);
  console.log(combinedUniqueArray); 