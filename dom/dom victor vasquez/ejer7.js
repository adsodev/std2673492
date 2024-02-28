const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  // Obtenemos los valores del formulario
  const base = document.getElementById("base").value;
  const altura = document.getElementById("altura").value;

  // Validamos que los valores sean números
  if (isNaN(base) || isNaN(altura)) {
    resultado.textContent = "Error: Ingrese valores numéricos";
    return;
  }

  // Calculamos el área del triángulo
  const area = (base * altura) / 2;

  // Mostramos el resultado
  resultado.textContent = `El área del triángulo es: ${area}`;
});
