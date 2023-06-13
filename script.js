function prepareEditTask(id){
    var current_tasks = document.querySelectorAll(".task");
    let current_task
    current_tasks.forEach(task => {
        if(task.dataset.id == id)
            current_task = task
    });
    const new_input_name = current_task.children[0].dataset.value;
    const new_input_flavor = current_task.children[1].dataset.value;
    const new_input_price = current_task.children[2].dataset.value;
    document.getElementById('input_name').value = new_input_name
    document.getElementById('input_flavor').value = new_input_flavor
    document.getElementById('input_price').value = new_input_price
    document.getElementById('input_name').setAttribute('data-value', id)
    document.getElementById('push').innerHTML = 'Edit'
    var btn = document.createElement("button");
    var t = document.createTextNode("Annuler");
    btn.appendChild(t);
    btn.style.backgroundColor = 'red'
    btn.onclick = function (){
        document.getElementById('input_name').value = ''
        document.getElementById('input_flavor').value = ''
        document.getElementById('input_price').value= ''        
        document.getElementById('input_name').setAttribute('data-value', '')
        document.getElementById('push').innerHTML = 'Add'
    }
    document.getElementById('newtask').appendChild(btn)                              
}