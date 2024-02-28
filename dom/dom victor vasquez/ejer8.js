const btnMostrar = document.getElementById("mostrar");
const imagen = document.getElementById("imagen");

const imagenes = [
 src="https://tse4.mm.bing.net/th?id=OIP.6GFZO_8Cx2IEXY5VIiO6xQHaE7&pid=Api&P=0&h=180",
 src="https://wallpaperaccess.com/full/1398669.jpg",
 src="https://images.pexels.com/photos/47354/the-ball-stadion-football-the-pitch-47354.jpeg?cs=srgb&dl=balon-de-futbol-campo-campo-de-deportes-47354.jpg&fm=jpg",
 src="https://tse1.mm.bing.net/th?id=OIP.8cc6aJHTunXHFPQXVFNUKwHaHa&pid=Api&P=0&h=180",
  "imagen5.jpg",
];

btnMostrar.addEventListener("click", () => {
  // Generamos un número aleatorio entre 0 y el número de imágenes
  const indiceAleatorio = Math.floor(Math.random() * imagenes.length);

  // Seleccionamos la imagen aleatoria
  const imagenAleatoria = imagenes[indiceAleatorio];

  // Cambiamos la fuente de la imagen
  imagen.src = imagenAleatoria;
});
