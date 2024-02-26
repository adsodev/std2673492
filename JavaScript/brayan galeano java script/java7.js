function combineAndDedupeArrays(arr1, arr2) {
    // Combine the two arrays into one using concat()
    const combinedArray = arr1.concat(arr2);
  
    // Create an empty object to store the unique values
    const uniqueValues = {};
  
    // Create an empty array to store the result
    const result = [];
  
    // Iterate over each element in the combined array
    combinedArray.forEach(element => {
      // If the element is not already in the uniqueValues object, add it
      if (!uniqueValues[element]) {
        uniqueValues[element] = true;
        result.push(element);
      }
    });
  
    return result;
  }
  
  // Example usage:
  const arreglo1 = [5, 2, 3];
  const arreglo2 = [2, 30, 5];
  const result = combineAndDedupeArrays(arreglo1, arreglo2);
  console.log(result); // [5, 2, 3, 30]