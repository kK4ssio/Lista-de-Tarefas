function addTarefas() { //adiciona uma nova tarefa a lista 
    const TaskInput = document.getElementById("TaskInput"); //obtem o input de tarefa
    const TaskList = document.getElementById("TaskList"); //obtem a lista de tarefa
    const TaskText = TaskInput.value.trim(); //obtem o valor do input e remove espaços extras

    if (TaskText !== "") { //verifica se o texto da tarefa nao esta vazio

        const ListItem = document.createElement("li"); //cria um novo item
        ListItem.textContent = TaskText; //define o texto do item de lista
        const DeleteBtn = document.createElement("span"); //cria o botao de apagar

        DeleteBtn.textContent = " X"; //define o texto do botao
        DeleteBtn.style.color = "rgb(85, 173, 155)";
        DeleteBtn.style.boxShadow = "black";
        DeleteBtn.style.cursor = "pointer";
        DeleteBtn.style.fontSize = "30px";
        DeleteBtn.className = "delete"; //define a classe CSS para o botao

        DeleteBtn.onclick = function () { //adiciona um evento de clique para apagar a tarefa

            TaskList.removeChild(ListItem); //remove o item da lista 
        }
        ListItem.appendChild(DeleteBtn); // Adicione esta linha para adicionar o botão de exclusão ao item da lista
        TaskList.appendChild(ListItem); // Adicione esta linha para adicionar o item à lista de tarefas
        TaskInput.value = "";  //limpa o input de tarefa
    }
    TaskInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") { // Mude de "enter" para "Enter"
            addTarefas(); // Corrija a chamada da função para addTarefas()
        }
    });
}
