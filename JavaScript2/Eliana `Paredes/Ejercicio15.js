for (let i = 1; i <= 5; i++) {
    let row = "";
    
    for (let j = 1; j <= 5 - i; j++) {
      row += " ";
    }
   
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
  
  
  for (let i = 4; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= 5 - i; j++) {
      row += " ";
    }
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
  