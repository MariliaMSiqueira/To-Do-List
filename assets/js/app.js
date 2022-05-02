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
class Bd {
  constructor() {
    let firstId = localStorage.getItem("id");

    if (firstId === null || firstId === "" || firstId === undefined) {
      firstId = localStorage.setItem("id", 0);
    }
  }
  // getAllTasks() {
  //   let arrTasks = [];
  //   let id = localStorage.getItem("id");
  //   for (let i = 1; i <= id; i++) {
  //     let listTasks = JSON.parse(localStorage.getItem(i));

  //     if (listTasks === null) {
  //       continue;
  //     }

  //     listTasks.id = i;

  //     arrTasks.push(listTasks);
  //   }
  //   return arrTasks;
  // }

  // PARÂMETRO INPUTVALUE PASSADO NA INSTÂNCIA DO OBJETO
  pinStorage(info) {
    let lengthId = localStorage.length;
    localStorage.setItem(lengthId + 1, JSON.stringify(info));
    localStorage.refresh;
    let id = localStorage.getItem("id");
    let tasksList = document.getElementById("listTasks");
    let row = tasksList.insertRow(info);
    row.insertCell(0).innerHTML = info.tasks;

    let btn = document.createElement("button");
    btn.className = "btn btn-success";
    btn.innerHTML = '<i class="fas fa-check"></i>';
    btn.setAttribute("id", id);

    btn.onclick = () => {
      if (btn.getAttribute("id") === info.id) {
        tasksList.style.textDecoration = "line-through";
      }
    };
    row.insertCell(1).append(btn);
  }
}
let bd = new Bd();

// BUTTON CADASTRAR TAREFAS
// AO CADASTRAR UM TAREFA SERÁ INSTANCIADA UMA CLASSE QUE, POR SUA VEZ, HAVERÁ UMA VALIDAÇÃO
function registerTasks() {
  let tasksInput = document.getElementById("tasks");
  let modalTitle = document.getElementById("modal-title");
  let modalBody = document.getElementById("modal-body");
  let modalBtn = document.getElementById("modal-btn");

  let tasks = new Tasks(tasksInput.value);

  if (tasks.validateTasks()) {
    modalTitle.innerHTML = "Cadastrado com sucesso!";
    modalTitle.className = "modal-title text-success";
    modalBody.innerHTML = "Sua tarefa foi cadastrada com sucesso.";
    modalBtn.innerHTML = "Ok";
    modalBtn.className = "btn btn-success";
    $("#dialogModal").modal("show");
    resetInfo();
    // ENVIANDO O OBJETO COMO PARÂMETRO
    bd.pinStorage(tasks);
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
