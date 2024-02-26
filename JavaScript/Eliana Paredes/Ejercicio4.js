const dias = ['lunes', 'martes', 'miercoles', 'Jueves', 'viernes', 'sabado', 'domingo']; 

for (let i = 0; i < dias.length; i++) {
        dias[i] = dias[i].charAt(0).toUpperCase() + dias[i].slice(1);

  }

for (const day of dias) {
  console.log(day);
}