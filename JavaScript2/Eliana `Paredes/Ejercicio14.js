for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += String.fromCharCode(64 + i); 
    }
    console.log(row);
  }
  