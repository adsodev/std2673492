let input = document.getElementById("conv").onclick = imprimir;
let valor = document.getElementById("value")
let con = 3.800


function imprimir (e){
    let valueInput = document.getElementById("number").value;
    
    e.preventDefault();
    valor.innerHTML = valueInput*con;
    console.log(valueInput);

}