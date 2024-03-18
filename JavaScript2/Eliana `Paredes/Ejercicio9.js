function generateRandomNumber() {
    
    const randomNumber = Math.floor(Math.random() * 100);
  
    
    console.log(randomNumber);
  }
  
  
  setInterval(generateRandomNumber, 1000); 
  