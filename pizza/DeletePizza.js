function DeletePizza(id){
    var url = `http://localhost:8080/pizzas/${id}`;

    fetch(url, {
    method: "DELETE"
    })
    .then(function(response) {
        if (response.ok) {
            console.log("La ressource a été supprimée avec succès.");
            const pizzas = document.getElementsByClassName('task')
            for (let index = 0; index < pizzas.length; index++) {
                const element = pizzas[index];
                if(element.getAttribute('data-id') == id){
                    pizzas[index].remove()
                }
            }
        } else {
        throw new Error("Erreur lors de la requête DELETE");
        }
    })
    .catch(function(error) {
        console.log(error);
        // Gérer les erreurs de la requête
    });
}