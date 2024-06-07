let tasks = [];

function adding() {
  let taskList = {
    name: document.getElementById("tasks").value,
    completed: false
  };
  tasks.push(taskList);
  let toDoList = document.querySelector("#results");
  toDoList.innerHTML = "";
  tasks.forEach((data) => {
    toDoList.innerHTML += ` 
      <input type="checkbox" onclick="toggleCompleted('${data.name}')">
      <p>${data.name}</p>
      <span class="close" onclick="removeTask('${data.name}')">x</span>
    `;
  });
  stored();
}

function stored() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function dataRefresh() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    const toDoList = document.querySelector("#results");
    toDoList.innerHTML = "";
    tasks.forEach((data) => {
      toDoList.innerHTML += ` 
        <input type="checkbox" onclick="toggleCompleted('${data.name}')">
        <p>${data.name}</p>
        <span class="close" onclick="removeTask('${data.name}')">x</span>
      `;
    });
  }
}

function toggleCompleted(name) {
  const task = tasks.find((t) => t.name === name);
  if (task) {
    task.completed = !task.completed;
    stored();
    dataRefresh();
  }
}

function removeTask(name) {
  tasks = tasks.filter((t) => t.name !== name);
  stored();
  dataRefresh();
}

function sorting() {
  tasks.sort((a, b) => a.name.localeCompare(b.name));
  dataRefresh();
}
