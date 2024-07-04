const input = document.querySelector("input"),
  btn = document.querySelector("button"),
  todoList = document.querySelector(".todo-list"),
  clear = document.querySelector(".clear");

function addTask(e) {
  e.preventDefault();
  const newTask = document.createElement("li");
  const deleteBtn = document.createElement("btn");

  deleteBtn.innerHTML = `<i class = "fas fa-trash-alt"></i>`;

  if (input.value === "") {
    return alert("Please enter a task");
  } else {
    newTask.textContent = input.value;
    newTask.appendChild(deleteBtn);
    todoList.appendChild(newTask);
    input.value = "";
  }

  function deleteTask(e) {
    e.preventDefault();
    const del = confirm("Are you sure you want delete this task?");

    if (!del) {
      console.log(del);
      return;
    } else {
      console.log(del);
      // this === <button>, parentNode === <li>
      const parent = this.parentNode;
      parent.remove();
    }
  }

  deleteBtn.addEventListener("click", deleteTask);
}

btn.addEventListener("click", addTask);

clear.addEventListener("click", clearTasks);
function clearTasks(e) {
  e.preventDefault();
  todoList.innerHTML = "";
}
