console.log("TrackStar!")

window.addEventListener('load', () => {
    const form = document.querySelector("#form");
    const input = document.querySelector(".todo-input");
    const listEl = document.querySelector("#tasks");
    
})

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const task = input.value;

if (!task) {
    alert ("Please fill out the task");
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

taskCont.appendChild(taskInput)

listEl.appendChild(taskEl);
})
