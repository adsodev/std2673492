function construirPatronAsteriscos(numeroAsteriscos) {
    for (let i = 1; i <= numeroAsteriscos; i++) {
    for (let j = 1; j <= numeroAsteriscos; j++) {
    console.log("*");
    console.log("* *");
    console.log("* * *");
    console.log("* * * *");
    console.log("* * * * *");
    }
    console.log("");
    }
    }
    const numeroAsteriscos = 1;
    construirPatronAsteriscos(numeroAsteriscos);