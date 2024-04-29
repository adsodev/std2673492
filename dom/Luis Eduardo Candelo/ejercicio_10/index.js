  // Obtener el elemento del cuadro
  var cuadro = document.getElementById('cuadro');

  // Función para mover el cuadro al lado derecho de la pantalla
  function moverAlDerecho() {
    cuadro.style.left = (window.innerWidth - cuadro.offsetWidth) + 'px';
  }

  // Llamar a la función para mover el cuadro al lado derecho después de un breve retardo
  setTimeout(moverAlDerecho, 1000); // Mover después de 1 segundo