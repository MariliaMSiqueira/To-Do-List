let inputTasks = document.getElementById("input-tasks");

function validateTasks() {
  if (
    inputTasks.value == "" ||
    inputTasks.value == undefined ||
    inputTasks.value == null
  ) {
    let modalTitle = document.getElementById("modal-title");
    let modalBody = document.getElementById("modal-body");
    let modalBtn = document.getElementById("modal-btn");

    modalTitle.innerHTML = "Erro no cadastro!";
    modalTitle.className = "modal-title text-danger";
    modalBody.innerHTML = "Preencha o campo obrigatório.";
    modalBtn.innerHTML = "Ok, vou corrigir!";
    modalBtn.className = "btn btn-danger";
    $("#dialogModal").modal("show");
    return false;
  } else {
    return true;
  }
}
// ACIONANDO FUNCTION COM O ENTER

document.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    registerTasks();
  }
});

function registerTasks() {
  let ulTasks = document.getElementById("ul-tasks");

  if (validateTasks()) {
    let liTask = document.createElement("li");
    liTask.className = "list-group-item list-group-item-info";
    liTask.innerHTML = inputTasks.value;
    ulTasks.appendChild(liTask);

    // CHECKED BTN
    let checkBtn = document.createElement("button");
    checkBtn.className = "btn btn-success";
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    checkBtn.onclick = () => {
      liTask.classList.toggle("checked");
    };

    // DELETE BTN
    // let delBtn = document.createElement("button");
    // delBtn.className = "btn btn-danger";
    // delBtn.innerHTML = "<i class='fas fa-trash-alt'></i>";
    // delBtn.onclick = () => {
    //   console.log("excluir clicado");
    // };
    // liTask.appendChild(delBtn);

    liTask.appendChild(checkBtn);
    resetInput();
  }
}

function resetInput() {
  inputTasks.value = "";
}

function delAllTasks() {
  location.reload();
}
