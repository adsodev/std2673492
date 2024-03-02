for (let i = 65; i <= 73; i++) {
    let row = "";
    for (let j = 0; j < i - 65 + 1; j++) {
    row += String.fromCharCode(i);
    }
    console.log(row);
    }
    