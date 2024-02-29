const NumeroSecreto= Math.floor(Math.random() * 6);
let Intetos=3;
document.getElementById("numero").addEventListener('submit',
function(event){
  event.preventDefault();
  const numero= parseInt(document.getElementById("number").value);
  if(numero===NumeroSecreto){
    document.getElementById("result").textContent="correctooooo";
  }else{
    Intetos--;
    if(Intetos>0){
      document.getElementById("result").textContent= "incorrecto"
    }else{
      document.getElementById("result").textContent="Numero de intentos completado"
      document.getElementById("number").disabled=true;
    }
   
  }
  });