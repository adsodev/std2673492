let time = prompt();
let intervalo = time * 1000;
function accionDespuesDeEsperar() {
    console.log(`Han pasado ${time} segundos. ¡Acción ejecutada!`);
}



setTimeout(accionDespuesDeEsperar, intervalo); 