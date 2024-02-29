function crearBloque() {
    const contenedorBloques = document.getElementById("contenedor-bloques");
    const nuevoBloque = document.createElement("div");
    nuevoBloque.textContent = "Hola mundo";
    nuevoBloque.style.color = "white";
    nuevoBloque.style.backgroundColor = "red";
    nuevoBloque.style.textAlign = "center";
    contenedorBloques.appendChild(nuevoBloque);
  }
  