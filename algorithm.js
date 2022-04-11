// selectors

const taskInput = document.querySelector("input[type='text']");
const taskBtn = document.querySelector("button");
const tasks = document.querySelector(".tasks");


// event listeners
document.addEventListener('DOMContentLoaded', getTasks)
taskBtn.addEventListener('click', addTask);
tasks.addEventListener('click', removeTask)

//onEnter
taskInput.addEventListener("keydown", function(event){
    if (event.key === 'Enter' || event.which === 13) {
        event.preventDefault();
        addTask();
    }
});


// functions

function addTask() {
    // create task div
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    if (taskInput.value != "") {
        taskDiv.innerHTML = `<p>${taskInput.value}</p><i class="fa-solid fa-trash"></i>`;
        tasks.appendChild(taskDiv);
        // add task to local storage
        saveLocal(taskInput.value);
        taskInput.value = '';
    }

}

function removeTask(e) {
    const item = e.target;
    if (item.classList[1] === 'fa-trash') {
        const taskItem = item.parentElement;
        taskItem.classList.add('removed');
        removeLocalTask(taskItem);
        taskItem.addEventListener('transitionend', function() {
            taskItem.remove();
        })

        //
    }
}

function saveLocal(task) {
    let tasksL;
    if (localStorage.getItem('tasksL') === null) {
        tasksL = [];
    } else {
        tasksL = JSON.parse(localStorage.getItem('tasksL'));
    }
    tasksL.push(task);
    localStorage.setItem("tasksL", JSON.stringify(tasksL))
}

function getTasks() {
    let tasksL;
    if (localStorage.getItem('tasksL') === null) {
        tasksL = [];
    } else {
        tasksL = JSON.parse(localStorage.getItem('tasksL'));
    }
    tasksL.forEach(function(task) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task')
        taskDiv.innerHTML = `<p>${task}</p><i class="fa-solid fa-trash"></i>`;
        tasks.appendChild(taskDiv);
    });
}

function removeLocalTask(task) {
    let tasksL;
    if (localStorage.getItem('tasksL') === null) {
        tasksL = [];
    } else {
        tasksL = JSON.parse(localStorage.getItem('tasksL'));
    }
    const taskIndex = task.children[0].innerText
    tasksL.splice(tasksL.indexOf(taskIndex), 1)
    localStorage.setItem("tasksL", JSON.stringify(tasksL))
}