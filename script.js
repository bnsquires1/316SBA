console.log("TrackStar!")

window.addEventListener('load', () => {
    const form = document.querySelector("#form");
    const input = document.getElementById("todo-input");
    const listEl = document.querySelector("#tasks");
    


form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const task = input.value;

if (!task) {
    alert("Please fill out the task");
    return;
}

const taskEl = document.createElement("div");
taskEl.classList.add("task");

const taskCont = document.createElement("div");
taskCont.classList.add("content");



taskEl.appendChild(taskCont);

const taskInput = document.createElement("input");

taskInput.classList.add("text");
taskInput.type = "text";
taskInput.value = task;
taskInput.setAttribute("readonly", "readonly");


taskCont.appendChild(taskInput);

const actions = document.createElement("div");
actions.classList.add("actions");

const edit = document.createElement("button");
edit.classList.add("edit");
edit.innerHTML = "Edit"

const deleteEl = document.createElement("button");
deleteEl.classList.add("delete");
deleteEl.innerHTML = "Delete";

actions.appendChild(edit);
actions.appendChild(deleteEl);

taskEl.appendChild(actions);

listEl.appendChild(taskEl);

input.value = "";

edit.addEventListener("click", (evt) => {
    if (edit.innerText.toLowerCase() == "edit") {
        taskInput.removeAttribute("readonly")
        taskInput.focus();
        edit.innerText = "Save";
    } else {
        taskInput.setAttribute("readonly", "readonly");
        edit.innerText = "Edit";
    }
});

})

})
