const diasSemana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
function convertirAMayusculas(array) {
    
    for (const dia of array) {
      
      dia.toUpperCase();
    }
  }
  const diasSemanaEnMayusculas = diasSemana.map(dia => dia.toUpperCase());

console.log(diasSemanaEnMayusculas);
