function removerDuplicados(arr) {
    
    const uniqueSet = new Set(arr);
  
    
    return Array.from(uniqueSet);
  }
  
  
  const arr = [1, 3, 3, 4, 5, 4, 9, 8, 9, 3, 6];
  const uniqueArray = removerDuplicados(arr);
  console.log(uniqueArray); 
  