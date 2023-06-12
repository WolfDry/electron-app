async function addPizza(){

    const input_name = document.getElementById('input_name')
    const input_flavor = document.getElementById('input_flavor')
    const input_price = document.getElementById('input_price')

    const data = {
        name: input_name.value,
        flavor: input_flavor.value,
        price: parseInt(input_price.value),
    }

    var url = "http://localhost:8080/pizzas";

    const response = await fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
    })
    const dataRes = await response.json()
    document.querySelector('#tasks').innerHTML += `
        <div class="task" data-id="${dataRes.id}">
            <span id="taskname" data-value="${dataRes.name}">
                ${dataRes.name}
            </span>
            <button class="edit" onclick="prepareEditTask(${dataRes.id})">
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="delete" onclick="deleteTask(${dataRes.id})">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
    `;
    
    input_name.value = ""
    input_flavor.value = ""
    input_price.value = ""
}