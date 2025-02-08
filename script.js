let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");


let tarefas = [];

function addTarefa() {
  if(inputElement.value === '') {
    alert("Digite algo!");
    return false;
  } else {
    console.log(inputElement.value);
  }
}

buttonElement.onclick = addTarefa;

