let SubmidButton = document.getElementById("submitButton");
let PesosConvert = document.getElementById("valueChange");

SubmidButton.addEventListener('click', e=> {
    e.preventDefault();
    
    let inputValue = document.getElementById("valueOne").value;
    //Logica para  convertir 
    let valor = inputValue * 3934.28;
    PesosConvert.innerText = `${valor}`;

})
