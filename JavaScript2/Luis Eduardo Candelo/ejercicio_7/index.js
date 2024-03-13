function contador(valueUser) {
    let cont = valueUser;
    let intervalo = setInterval(function() {
        if (cont <= valueUser) {
            console.log(`Aún te quedan ${valueUser - cont} segundos`);
            cont++;
        } else {
            clearInterval(intervalo);
            console.log("El tiempo ha terminado");
        }
    }, 1000); // 1000 milisegundos = 1 segundo
}

let ValueCont = prompt("De que número comenzara");
contador(ValueCont);
