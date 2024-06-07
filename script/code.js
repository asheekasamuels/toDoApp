// Selecting elements
const input = document.getElementById('input1');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('tasks');
const sortButton = document.getElementById('sortButton');

// Adding task function
function addTask() {
    const taskText = input.value.trim();

    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task');
        taskItem.innerHTML = `
            <input type="checkbox">
            <p>${taskText}</p>
            <button class="deleteButton">❌</button>
        `;
        taskList.appendChild(taskItem);
        input.value = '';

        // Adding event listener for delete button
        const deleteButton = taskItem.querySelector('.deleteButton');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
    }
}

// Sorting tasks function
function sortTasks() {
    const tasks = [...taskList.children];
    tasks.sort((a, b) => {
        return a.querySelector('p').textContent.localeCompare(b.querySelector('p').textContent);
    });
    taskList.innerHTML = '';
    tasks.forEach(task => {
        taskList.appendChild(task);
    });
}

// Adding event listeners
addButton.addEventListener('click', addTask);
input.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        addTask();
    }
});
sortButton.addEventListener('click', sortTasks);
