class Tasks {
  constructor(tasks) {
    this.tasks = tasks;
  }

  validateTasks() {
    for (let i in this) {
      if (this[i] === undefined || this[i] === null || this[i] === "") {
        return false;
      }
    }
    return true;
  }
}

// RESPONSÁVEL PELA TRATATIVA DAS TAREFAS NO LOCALSTORAGE
class Bd {}

// BUTTON CADASTRAR TAREFAS
// AO CADASTRAR UM TAREFA SERÁ INSTANCIADA UMA CLASSE QUE, POR SUA VEZ, HAVERÁ UMA VALIDAÇÃO
function registerTasks() {
  let tasksInput = document.getElementById("tasks").value;
  let modalTitle = document.getElementById("modal-title");
  let modalBody = document.getElementById("modal-body");
  let modalBtn = document.getElementById("modal-btn");

  let tasks = new Tasks(tasksInput);

  if (tasks.validateTasks()) {
    modalTitle.innerHTML = "Cadastrado com sucesso!";
    modalTitle.className = "modal-title text-success";
    modalBody.innerHTML = "Sua tarefa foi cadastrada com sucesso.";
    modalBtn.innerHTML = "Ok";
    modalBtn.className = "btn btn-success";
    $("#dialogModal").modal("show");
    resetInfo();
  } else {
    modalTitle.innerHTML = "Erro no cadastro!";
    modalTitle.className = "modal-title text-danger";
    modalBody.innerHTML = "Preencha o campo obrigatório.";
    modalBtn.innerHTML = "Ok, vou corrigir!";
    modalBtn.className = "btn btn-danger";
    $("#dialogModal").modal("show");
  }
}

function resetInfo() {
  let tasksInput = document.getElementById("tasks");
  tasksInput.value = "";
}
