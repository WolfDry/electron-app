async function addPizza(){

    const input_name = document.getElementById('input_name')
    const input_flavor = document.getElementById('input_flavor')
    const input_price = document.getElementById('input_price')

    const data = {
        name: input_name.value,
        flavor: input_flavor.value,
        price: parseInt(input_price.value),
    }
    console.log(data.flavor)

    if(data.flavor === 'Crème' || data.flavor === 'Tomate'){
        if(data.flavor === 'Crème'){
            data.flavor = 'C'
        }else if(data.flavor === 'Tomate'){
            data.flavor = 'T'
        }else{
            return
        }
    }

    if(!document.querySelector('#newtask input').dataset.value){
        var url = "http://localhost:8080/pizzas";

        const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
        })
        const dataRes = await response.json()
        if(dataRes.flavor == 'T'){
            dataRes.flavor = 'Tomate'
        }else if(dataRes.flavor == 'C'){
            dataRes.flavor = 'Crème'
        }
        document.querySelector('#tasks').innerHTML += `
            <div class="task" data-id="${dataRes.id}">
                <span id="taskname" data-value="${dataRes.name}">
                    ${dataRes.name}
                </span>
                <span id="taskname" data-value="${dataRes.flavor}">
                    ${dataRes.flavor}
                </span>
                <span id="taskname" data-value="${dataRes.price}">
                    ${dataRes.price} €
                </span>
                <button class="edit" onclick="prepareEditTask(${dataRes.id})">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="delete" onclick="DeletePizza(${dataRes.id})">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
    }else if(document.querySelector('#newtask input').dataset.value){
        const id = document.querySelector('#newtask input').dataset.value

        var url = `http://localhost:8080/pizzas/${id}`;

        fetch(url, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
            .then(response => {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error('Erreur lors de la requête PATCH');
              }
            })
            .then(data => {
                if(data.flavor == 'T'){
                    data.flavor = 'Tomate'
                }else if(data.flavor == 'C'){
                    data.flavor = 'Crème'
                }
                const pizzas = document.getElementsByClassName('task')
                for (let index = 0; index < pizzas.length; index++) {
                    const element = pizzas[index];
                    if(element.getAttribute('data-id') == id){
                        element.innerHTML= `
                            <span id="taskname" data-value="${data.name}">
                                ${data.name}
                            </span>
                            <span id="taskname" data-value="${data.flavor}">
                                ${data.flavor}
                            </span>
                            <span id="taskname" data-value="${data.price}">
                                ${data.price} €
                            </span>
                            <button class="edit" onclick="prepareEditTask(${data.id})">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button class="delete" onclick="DeletePizza(${data.id})">
                                <i class="far fa-trash-alt"></i>
                            </button>
                        `;
                        document.getElementById('push').innerHTML = 'Add'
                        return
                    }
                }
            })
            .catch(error => {
              console.error('Erreur:', error);
            });
    }
    
    input_name.value = ""
    input_flavor.value = ""
    input_price.value = ""
}