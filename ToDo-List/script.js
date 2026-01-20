const taskInput = document.getElementById("taskInput");
const dueDateInput = document.getElementById("dueDate");
const priorityInput = document.getElementById("priority");
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");
const themeToggle = document.getElementById("themeToggle");

// Add task
addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});

function addTask() {
    if (taskInput.value.trim() === "") {
        alert("Enter task name");
        return;
    }

    const li = document.createElement("li");

    const taskTop = document.createElement("div");
    taskTop.className = "task-top";

    const taskName = document.createElement("span");
    taskName.textContent = taskInput.value;
    taskName.onclick = () => taskName.classList.toggle("completed");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.onclick = () => li.remove();

    taskTop.appendChild(taskName);
    taskTop.appendChild(deleteBtn);

    const details = document.createElement("small");
    details.textContent = `Due: ${dueDateInput.value || "No date"}`;

    const badge = document.createElement("span");
    badge.textContent = priorityInput.value;
    badge.className = `badge ${priorityInput.value}`;

    li.appendChild(taskTop);
    li.appendChild(details);
    li.appendChild(badge);

    taskList.appendChild(li);

    taskInput.value = "";
    dueDateInput.value = "";
    priorityInput.value = "Low";
}

// 🌙 Dark mode toggle
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
