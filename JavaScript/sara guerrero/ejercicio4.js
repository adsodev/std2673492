Array.prototype.toUpperCase = function() {
    return this.map(palabra => palabra.toUpperCase());
  }
  const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'].toUpperCase(); 
  for (const dia of dias) {
    console.log(dia);
  }