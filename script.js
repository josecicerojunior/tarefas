let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");


let tarefas = [];
 

function renderTarefas(){
    listElement.innerHTML = "";
    tarefas.map((todo)=>{
      let liElement = document.createElement("li");
      let tarefaText = document.createTextNode(todo);
      
      let linkElement = document.createElement("a");
      linkElement.setAttribute("href", "#");
      
      let linkText = document.createTextNode("Excluir");
      linkElement.appendChild(linkText);
      linkElement.setAttribute("onclick", "deletarTarefa()")

      let posicao = tarefas.indexOf(todo);
      linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`);  

     liElement.appendChild(tarefaText);
     liElement.appendChild(linkElement);
     listElement.appendChild(liElement);  
     

    })
}

function addTarefa() {
  if(inputElement.value === '') {
    alert("Ops Digite alguma tarefa!");
    return false;
  } else {
      let novaTarefa = inputElement.value;
      tarefas.push(novaTarefa);
      inputElement.value = '';
       renderTarefas();
  }
}

buttonElement.onclick = addTarefa;

function deletarTarefa(posicao){
  tarefas.splice(posicao, 1);
  renderTarefas();

  // alert("Deletando item: " + posicao)
}