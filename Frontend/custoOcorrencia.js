window.onload = function() {
    function calcularValor() {

        const preco_gasoleo = 1.2;

        let Distancia = document.getElementById("newDistance").value;
        let Combustivel = document.getElementById("newFuel").value;
        let Duracao = document.getElementById("newDuration").value;
        let Numero = document.getElementById("newNumber").value;

        let custoTotal = (Distancia * (Combustivel / 100) * preco_gasoleo) + (Duracao * 5 * Numero);
        document.getElementById("preco").innerHTML = custoTotal.toFixed(2) + "€";
    }

    new Validator(document.querySelector('form[name="form"]'), function(err, res) {


    });
};
