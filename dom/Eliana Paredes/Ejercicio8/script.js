const imagenes = [
    "imagen1.jpg",
    "imagen2.jpg",
    "imagen3.jpg",
    "imagen4.jpg",
    "imagen5.jpg"
  ];
  
  function mostrarImagenAleatoria() {
    const imagenAleatoria = imagenes[Math.floor(Math.random() * imagenes.length)];
    const imagen = document.getElementById("imagen-aleatoria");
    imagen.src = imagenAleatoria;
  }
  