// DOM Elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearAllBtn = document.getElementById("clearAllBtn");

// Event Listeners
addTaskBtn.addEventListener("click", addTask);
taskList.addEventListener("click", handleTaskActions);
clearAllBtn.addEventListener("click", clearAllTasks);

// Functions
function addTask() {
    const task = taskInput.value.trim();
    if (task === "") {
        alert("Task cannot be empty!");
        return;
    }

    // Create task item
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.innerHTML = 
        `<span>${task}</span>
        <div>
            <button class="btn btn-sm btn-warning edit-btn">Edit</button>
            <button class="btn btn-sm btn-danger delete-btn">Delete</button>
        </div>`
    ;
    taskList.appendChild(listItem);
    taskInput.value = "";
}

function handleTaskActions(e) {
    const target = e.target;

    if (target.classList.contains("delete-btn")) {
        target.parentElement.parentElement.remove();
    } else if (target.classList.contains("edit-btn")) {
        const task = target.parentElement.previousElementSibling;
        const newTask = prompt("Edit task:", task.textContent);
        if (newTask) task.textContent = newTask.trim();
    }
}

function clearAllTasks() {
    taskList.innerHTML = "";
}k