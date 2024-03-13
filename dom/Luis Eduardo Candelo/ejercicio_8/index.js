document.getElementById("btn_mostrarImagenAleatoria").addEventListener('click', e=> {

    var imagenes = [
        'imagen1.jpg',
        'imagen2.jpg',
        'imagen3.jpg',
        'imagen4.jpg',
        'imagen5.jpg',
        'imagen6.jpg',
        'imagen7.jpg',
        'imagen8.jpg',
        'imagen9.jpg',
        'imagen10.jpg',
      ];
  
      // Obtener un número aleatorio entre 0 y el número total de imágenes
      var indiceAleatorio = Math.floor(Math.random() * imagenes.length);
  
      // Crear un elemento de imagen
      var imagen = document.createElement('img');
  
      // Establecer la ruta de la imagen aleatoria
      imagen.src = imagenes[indiceAleatorio];
  
      var contenedorImagen = document.getElementById('contenedorImagen');
      contenedorImagen.innerHTML = '';
  
      // Agregar la imagen al contenedor
      contenedorImagen.appendChild(imagen);
});