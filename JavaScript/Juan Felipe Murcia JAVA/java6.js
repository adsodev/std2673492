function valoresCorrespondientes(array1, array2) {
  
    if (array1.length !== array2.length) {
      throw new Error("Las matrices debeben tener la  misma longitud");
    }
  
  
    const result = [];
  
  
    for (let i = 0; i < array1.length; i++) {
      result.push(array1[i] + array2[i]);
    }
  
    return result;
  }
  

  const array1 = [1, 0, 2, 3, 4];
  const array2 = [4, 3, 6, 7, 8, 13];
  
  try {
    const sumArray = valoresCorrespondientes(array1, array2);
    console.log(sumArray); 
  } catch (error) {
    console.error(error.message);
  }
  