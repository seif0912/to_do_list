// selectors

const taskInput = document.querySelector("input[type='text']");
const taskBtn = document.querySelector("button");
const tasks = document.querySelector(".tasks");


// event listeners

taskBtn.addEventListener('click', addTask);
tasks.addEventListener('click', removeTask)

// functions

function addTask() {
    // create task div
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    taskDiv.innerHTML = `<p>${taskInput.value}</p><i class="fa-solid fa-trash"></i>`;
    tasks.appendChild(taskDiv);
    taskInput.value = '';
}

function removeTask(e) {
    const item = e.target;
    if (item.classList[1] === 'fa-trash') {
        const taskItem = item.parentElement;
        taskItem.classList.add('removed');
        taskItem.addEventListener('transitionend', function() {
            taskItem.remove();
        })

        //
    }
}