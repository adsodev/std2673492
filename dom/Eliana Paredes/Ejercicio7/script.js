function calcularArea() {
    const base = document.getElementById("base").value;
    const altura = document.getElementById("altura").value;
    const resultado = document.getElementById("resultado");
  
    // Validar que los valores sean números
  
    if (isNaN(base) || isNaN(altura)) {
      resultado.textContent = "Los valores deben ser números.";
      return;
    }
  
    // Calcular el área del triángulo
  
    const area = (base * altura) / 2;
  
    // Mostrar el resultado
  
    resultado.textContent = `El área del triángulo es: ${area}`;
  }
  