let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");


let tarefas = [];

function addTarefa() {
  if(inputElement.value === '') {
    alert("Digite algo!");
    return false;
  } else {
      let novaTarefa = inputElement.value;
      tarefas.push(novaTarefa);
      inputElement.value = '';

  }
}

buttonElement.onclick = addTarefa;

