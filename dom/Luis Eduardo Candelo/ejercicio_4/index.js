
let btn = document.getElementById("btn-crearNuevoBloque");
btn.addEventListener('click', e=>{

    var nuevoDiv = document.createElement("div");

    // Agregar el contenido al div
    nuevoDiv.innerHTML = "Hola mundo";

    // Establecer los estilos del div
    nuevoDiv.style.color = "white";
    nuevoDiv.style.backgroundColor = "red";
    nuevoDiv.style.textAlign = "center";
    nuevoDiv.style.padding = "10px";
    nuevoDiv.style.marginTop = "20px";

    // Agregar el div al cuerpo del documento
    document.body.appendChild(nuevoDiv);
});
