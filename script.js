const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
    const task = input.value;
    if (task) {
        const li = document.createElement("li");
        li.innerHTML = `<span>${task}</span><button class="deleteBtn">Delete</button>`;
        taskList.appendChild(li);
        input.value = "";
    }
});

taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("deleteBtn")) {
        event.target.parentElement.remove();
    }
});
