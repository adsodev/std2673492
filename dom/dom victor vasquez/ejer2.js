const numeroSecreto = Math.floor(Math.random() * 6); // Número aleatorio entre 0 y 5
let intentosRestantes = 3;

function adivinarNumero() {
  const numeroUsuario = parseInt(document.getElementById("numero").value);
  const resultado = document.getElementById("resultado");

  if (intentosRestantes === 0) {
    resultado.textContent = "¡Has perdido! El número secreto era " + numeroSecreto;
    return false;
  }

  if (numeroUsuario === numeroSecreto) {
    resultado.textContent = "¡Felicidades! Has adivinado el número en " + (4 - intentosRestantes) + " intentos.";
    return false;
  } else {
    intentosRestantes--;
    resultado.textContent = "Fallaste. Te quedan " + intentosRestantes + " intentos.";
  }

  return false;
}
