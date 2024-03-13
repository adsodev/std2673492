var asientos = new Array(10);
for (var i = 0; i < 10; i++) {
  asientos[i] = new Array(4).fill(false);
}

function inicializarTabla() {
  var tabla = document.getElementById('tablaAsientos');
  var tbody = tabla.getElementsByTagName('tbody')[0];

  for (var fila = 0; fila < 10; fila++) {
    var nuevaFila = document.createElement('tr');

    for (var columna = 0; columna < 4; columna++) {
      var nuevoTd = document.createElement('td');
      nuevoTd.dataset.fila = fila;
      nuevoTd.dataset.columna = columna;
      nuevoTd.className = asientos[fila][columna] ? 'ocupado' : 'disponible';
      nuevoTd.textContent = (fila + 1) + '-' + (columna + 1);
      nuevoTd.onclick = function() {

        reservarAsiento(this);
      };
      nuevaFila.appendChild(nuevoTd);
    }

    tbody.appendChild(nuevaFila);
  }
}

function reservarAsiento(td) {
  var fila = parseInt(td.dataset.fila);
  var columna = parseInt(td.dataset.columna);

  if (asientos[fila][columna]) {
    alert('¡Este asiento ya está reservado!');
    td.className = 'disponible';
    asientos[fila][columna] = false;
  }
  else {
      asientos[fila][columna] = true;
    
    td.className = 'ocupado';
    alert('¡Asiento reservado con éxito!');
  }
}

window.onload = function() {
  inicializarTabla();
};
