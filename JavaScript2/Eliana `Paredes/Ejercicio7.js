function countdown(seconds) {
    const intervalId = setInterval(() => {
      if (seconds === 0) {
        clearInterval(intervalId);
        console.log("¡Tiempo terminado!");
      } else {
        console.log(seconds);
        seconds--;
      }
    }, 1000);
  }
  
  countdown(10);
  