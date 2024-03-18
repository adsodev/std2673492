function moverCuadro() {
    const cuadro = document.getElementById("cuadro");
    const izquierdaActual = parseInt(cuadro.style.left);
    cuadro.style.left = `${izquierdaActual + 10}px`;
  }
  