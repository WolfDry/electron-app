function getPizzas(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/pizzas", true);

    xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        response.forEach(element => {
            if(element.flavor == 'T'){
                element.flavor = 'Tomate'
            }else if(element.flavor == 'C'){
                element.flavor = 'Crème'
            }
            document.querySelector('#tasks').innerHTML += `
                    <div class="task" data-id="${element.id}">
                        <span id="taskname" data-value="${element.name}">
                            ${element.name}
                        </span>
                        <span id="taskname" data-value="${element.flavor}">
                            ${element.flavor}
                        </span>
                        <span id="taskname" data-value="${element.price}">
                            ${element.price} €
                        </span>
                        <button class="edit" onclick="prepareEditTask(${element.id})">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button class="delete" onclick="DeletePizza(${element.id})">
                            <i class="far fa-trash-alt"></i>
                        </button>
                    </div>
                `;
        });
    }
    };

    xhr.send();
}