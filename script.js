let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    let taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        ${taskText}
        <button class="deleteBtn">Delete</button>
    `;

    taskList.appendChild(li);

    taskInput.value = ""; // Clear input

    li.querySelector(".deleteBtn").addEventListener("click", function () {
        li.remove();  // delete the task
    });
    console.log("Week 1 practice commit");

}
