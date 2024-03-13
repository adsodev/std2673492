document.getElementById("btn_calcularArea").addEventListener('click', e=> {
      // Obtener los valores de base y altura desde el formulario
    var base = parseFloat(document.getElementById('base').value);
    var altura = parseFloat(document.getElementById('altura').value);

    // Calcular el área del triángulo
    var area = (base * altura) / 2;

    // Mostrar el resultado en el párrafo con id "resultado"
    document.getElementById('resultado').innerHTML = "El área del triángulo es: " + area;

});