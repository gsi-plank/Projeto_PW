import * as fetch from "./functions/fetch.js"

let id_occurrence = 1;

//função para ir buscar os valores
(async function() {
    let route = "occurrences/"+id_occurrence + "/cost";
    console.log(route);
    let costOccu = await fetch.getData(route);
    console.log(costOccu);
    console.log(costOccu[0].distance)
    document.getElementById("newDuration").value = costOccu[0].duration;
    document.getElementById("newNumber").value = costOccu[0].num_of_operationals;
    
})();

// window.onload = function() {
    function calcularValor() {

        const preco_gasoleo = 1.2;

        let Distancia = document.getElementById("newDistance").value;
        let Combustivel = document.getElementById("newFuel").value;
        let Duracao = document.getElementById("newDuration").value;
        let Numero = document.getElementById("newNumber").value;

        let custoTotal = (Distancia * (Combustivel / 100) * preco_gasoleo) + (Duracao * 5 * Numero);
        document.getElementById("preco").innerHTML = custoTotal.toFixed(2) + "€";
    }

