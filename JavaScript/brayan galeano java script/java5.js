
const array = [1, 3, 3, 4, 5, 4, 9, 8, 9, 3, 6];
const uniqueArray = array.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
console.log(uniqueArray); 