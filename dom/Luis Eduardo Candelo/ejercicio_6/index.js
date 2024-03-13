document.getElementById("btn_agregarFila").addEventListener('click', e=> {
    var tabla = document.getElementById("miTabla").getElementsByTagName('tbody')[0];
    var nuevaFila = tabla.insertRow(tabla.rows.length);
    var celdaNombre = nuevaFila.insertCell(0);
    var celdaEdad = nuevaFila.insertCell(1);
    celdaNombre.innerHTML = "<input type='text'>";
    celdaEdad.innerHTML = "<input type='number'>";
});