function calcularValor() {

    const preco_gasoleo= 1.2;
    
    let Distancia = document.getElementById("distance").value;
    let Combustivel = document.getElementById("fuel").value;
    let Duracao = document.getElementById("duration").value;
    let Numero = document.getElementById("numberofPeople").value;
    
    let custoTotal = (Distancia*(Combustivel/100)*preco_gasoleo) + (Duracao*5*Numero);
    document.getElementById("custo").innerHTML = custoTotal.toFixed(2)+"€";
}
