function getSum(arr) {
   
    let totalSum = 0;
  
   
    for (const num of arr) {
      totalSum += num;
    }
  
    return totalSum;
  }
  
  
  const arr = [34, 43, 65, 3, 86];
  const arraySum = getSum(arr);
  console.log(arraySum); 
  