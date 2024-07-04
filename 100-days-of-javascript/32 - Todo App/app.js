const input = document.querySelector("input"),
  btn = document.querySelector("button"),
  todoList = document.querySelector(".todo-list"),
  clear = document.querySelector(".clear");

btn.addEventListener("click", addTask);
let tasks;

window.onload = renderTasks();

function getTasks() {
  if (!localStorage.getItem("tasks")) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
}

function addTask(e) {
  e.preventDefault();
  if (input.value === "") {
    return alert("Please enter a task");
  } else {
    addTaskToStorage();
    todoList.innerHTML = "";
    renderTasks();
  }
}

function addTaskToStorage() {
  getTasks();
  tasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
}

function renderTasks() {
  getTasks();
  tasks.forEach((task, index) => {
    const newTask = document.createElement("li");
    const deleteBtn = document.createElement("btn");
    deleteBtn.innerHTML = `<i class = "fas fa-trash-alt" id=${index} onclick="deleteTask(this.id)"></i>`;
    newTask.appendChild(document.createTextNode(task));
    newTask.appendChild(deleteBtn);
    todoList.appendChild(newTask);
  });
}

function deleteTask(id) {
  const del = confirm("Are you sure you want delete this task?");
  if (del) {
    getTasks();
  }
  tasks.splice(id, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  todoList.innerHTML = "";
  renderTasks();
}

clear.addEventListener("click", clearTasks);
function clearTasks() {
  const delTasks = confirm("ARe you sure you want to delete all tasks?");
  if (delTasks) {
    localStorage.clear();
    todoList.innerHTML = "";
  }
}
