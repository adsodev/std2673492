function agregarFila() {
    const tabla = document.getElementById("tabla");
    const tbody = tabla.getElementsByTagName("tbody")[0];
    const nuevaFila = document.createElement("tr");
    const nombre = document.createElement("td");
    const edad = document.createElement("td");
  
    // Obtener el nombre y la edad del usuario
  
    const nombreUsuario = prompt("Introduzca su nombre:");
    const edadUsuario = prompt("Introduzca su edad:");
  
    // Agregar el contenido a las celdas
  
    nombre.textContent = nombreUsuario;
    edad.textContent = edadUsuario;
  
    // Agregar las celdas a la fila
  
    nuevaFila.appendChild(nombre);
    nuevaFila.appendChild(edad);
  
    // Agregar la fila a la tabla
  
    tbody.appendChild(nuevaFila);
  }
  