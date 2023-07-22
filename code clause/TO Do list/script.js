function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    if (taskInput.value.trim() === "") {
        return;
    }

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const taskText = document.createElement("span");
    const deleteButton = document.createElement("button");

    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.addEventListener("change", markAsCompleted);

    taskText.className = "task";
    taskText.textContent = taskInput.value;

    deleteButton.className = "delete-button";
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", deleteTask);

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
}

function markAsCompleted(event) {
    const checkbox = event.target;
    const taskText = checkbox.nextElementSibling;

    if (checkbox.checked) {
        taskText.classList.add("completed");
    } else {
        taskText.classList.remove("completed");
    }
}

function deleteTask(event) {
    const deleteButton = event.target;
    const li = deleteButton.parentElement;

    li.remove();
}