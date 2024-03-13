let SubmidButton = document.getElementById("submitButton");
let PesosConvert = document.getElementById("valueChange");

SubmidButton.addEventListener('click', e=> {
    e.preventDefault();
    
    let inputValue = document.getElementById("valueOne").value;
    
    PesosConvert.innerText = `El valor del formulario es: ${inputValue}`;

})
