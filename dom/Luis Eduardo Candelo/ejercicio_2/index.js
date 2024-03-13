let SubmidButton = document.getElementById("submitButton");
let PesosConvert = document.getElementById("valueChange");
let num  = Math.floor(Math.random() * 6); // Genera un número aleatorio entre 1 y 6

let cont = 0;
SubmidButton.addEventListener('click', e=> {
    e.preventDefault();
    
    let inputValue = parseInt(document.getElementById("valueOne").value); // Parsea el valor a un número entero

    // Logica para adivinar 
    while (cont <= 3) {
        if (num === inputValue) {
            PesosConvert.innerHTML = "Has adivinado con éxito";
            break; // Sale del bucle si el usuario adivina el número
        } else {
            cont += 1;
            PesosConvert.innerHTML = `No has adivinado, te quedan ${3 - cont} intentos`;
            break; // Sale del bucle después de un intento
        }
    }
});
