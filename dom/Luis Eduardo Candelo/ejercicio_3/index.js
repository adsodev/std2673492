let btn_change = document.getElementById("changeStyles");

btn_change.addEventListener('click', e=> {
    // Obtener el elemento del texto
    var textContainer = document.getElementById("text-container");

    // Cambiar el color del texto a azul
    textContainer.style.color = "blue";
    
    // Centrar el texto
    textContainer.style.textAlign = "center";
    
}) 
