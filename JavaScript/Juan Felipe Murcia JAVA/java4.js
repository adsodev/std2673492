
const dias_de_la_semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

function toUppercase(element) {
 return element.toUpperCase();
}


const uppercaseDays = dias_de_la_semana.map(toUppercase);


console.log("Dias originales:", dias_de_la_semana);
console.log("Dias en Mayusculas:", uppercaseDays);
