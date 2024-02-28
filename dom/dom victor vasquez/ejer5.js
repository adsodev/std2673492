const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  // Obtenemos el valor del campo de texto
  const nombre = document.querySelector('input[name="nombre"]').value;

  // Mostramos el valor en el párrafo
  resultado.textContent = `Hola, ${nombre}`;
});
