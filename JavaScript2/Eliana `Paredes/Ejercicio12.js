function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
      let space = "";
      
      for (let j = 1; j <= rows - i; j++) {
        space += " ";
      }
      let stars = "";
      for (let j = 1; j <= i * 2 - 1; j++) {
        stars += "*";
      }
      console.log(space + stars);
    }
  }
  
  const numRows = 4;
  
  printPattern(numRows);
  