const listId = []

function addTask(){
    var randomNumber = Math.floor(Math.random() * 99999)
    if(listId.includes(randomNumber)){
        randomNumber = Math.floor(Math.random() * 99999)
    }

    if (document.querySelector('#newtask input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
        return
    } else {
        if(!document.querySelector('#newtask input').dataset.value){
            listId.push(randomNumber)
            document.querySelector('#tasks').innerHTML += `
                <div class="task" data-id="${randomNumber}">
                    <span id="taskname" data-value="${document.querySelector('#newtask input').value}">
                        ${document.querySelector('#newtask input').value}
                    </span>
                    <button class="edit" onclick="prepareEditTask(${randomNumber})">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button class="delete" onclick="deleteTask(${randomNumber})">
                        <i class="far fa-trash-alt"></i>
                    </button>
                </div>
            `;
            document.getElementById('input_task').value = ''
            return
        }
        if(document.querySelector('#newtask input').dataset.value){
            const id = document.querySelector('#newtask input').dataset.value
            const value = document.querySelector('#newtask input').value
            var current_tasks = document.querySelectorAll(".task");
            let current_task
            current_tasks.forEach(task => {
                if(task.dataset.id == id)
                    current_task = task
            });
            current_task.children[0].dataset.value = value
            current_task.children[0].innerHTML = value
            document.getElementById('input_task').setAttribute('data-value', '')
            document.getElementById('input_task').value = ''
            return
        }
    }
}

function prepareEditTask(id){
    var current_tasks = document.querySelectorAll(".task");
    let current_task
    current_tasks.forEach(task => {
        if(task.dataset.id == id)
            current_task = task
    });
    console.log(current_task)
    const new_input_text = current_task.children[0].dataset.value;
    document.getElementById('input_task').value = new_input_text
    document.getElementById('input_task').setAttribute('data-value', id)
}

function deleteTask(id){
    var current_tasks = document.querySelectorAll(".task");
    for (let index = 0; index < current_tasks.length; index++) {
        const task = current_tasks[index];
        if(task.dataset.id == id){
            current_tasks[index].remove()        
        }
    }
}