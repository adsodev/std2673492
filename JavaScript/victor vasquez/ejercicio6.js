const array1 = [1, 0, 2, 3, 4,0];
const array2 = [4, 3, 6, 7, 8, 13];

const length = Math.max(array1.length, array2.length);


const result = new Array(length).fill(0);


for (let i = 0; i < length; i++) {
 
  result[i] = array1[i] + array2[i];
}

console.log(result);