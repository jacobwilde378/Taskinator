var createTaskHandler = function () {
    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}

var formE1 = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
formE1.addEventListener("submit", createTaskHandler);