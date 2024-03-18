function obtenerValor() {
    const nombre = document.getElementById("nombre").value;
    const resultado = document.getElementById("resultado");
    resultado.textContent = `El nombre introducido es: ${nombre}`;
  }
  