const asientos = {
    
    a12: true,
    a53: true,
    a82: true,
  };
  
  function seleccionarAsiento(asiento) {
    const idAsiento = asiento.id;
    const resultado = document.getElementById("resultado");
  
    if (asientos[idAsiento]) {
      resultado.textContent = "El asiento ya está reservado.";
      return;
    }
  
    asiento.classList.toggle("asiento-ocupado");
    asiento.textContent = "Ocupado";
    asientos[idAsiento] = true;
  
    resultado.textContent = "Asiento reservado correctamente.";
  }
  
 
  for (const idAsiento in asientos) {
    if (asientos[idAsiento]) {
      document.getElementById(idAsiento).classList.add("asiento-ocupado");
      document.getElementById(idAsiento).textContent = "Ocupado";
    }
  }
  