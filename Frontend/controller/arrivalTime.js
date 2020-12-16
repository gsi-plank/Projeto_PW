//Executa quando a página inicia
window.onload() = function () {
    
    function saveHour() {
        let hour = document.getElementById("horas").value;
        console.log (hour) //debugging para ver os dados que foram enviados
        
        //Chamada fetch para atualizar a hora via PUT
        fetch ('', {
            headers: { 'Content-Type': 'application/json'},
            method: 'PUT',
            body: JSON.stringify(hour)
        )}
        .then (response => response.json())
        .then(json => console.log(json));
        .catch(err => console.log(err));
    }
}

