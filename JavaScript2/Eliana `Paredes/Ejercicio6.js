function countdown() {
    for (let seconds = 10; seconds >= 0; seconds--) {
      console.log(seconds);
  
      if (seconds === 0) {
        console.log("¡Tiempo terminado!"); 
      }

    }
  }
  
  countdown();
  