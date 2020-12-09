let listQueries = JSON.parse();




function changeQueryName() {
    let query = document.getElementsByTagName("span");

    for (let i = 0; i < query.length; i++) {

        // alterar as frases dos nomes das querys
        query[i].innerHTML = "";
    }
}


const checkList = document.getElementById("checkListForm");
checkList.addEventListener("submit", async() => {

    let chb = document.getElementsByClassName('chb');
    let answer = new Array();
    for (let i = 0; i < chb.length; i++) {
        if (chb[i].checked) {
            //converter os valor de checklist para 1 e 0
            answer[i] = 1;
        }
        else
            answer[i] = 0;
    }
    //buscar a rota para o fetch
    const response = await fetch(`${urlBase}(...)`),
        {
            headers: {
                "Content-Type": "application/x-www-form-urlendcoded"
            },
            method: "POST",
            body: `checkList=${answer}`
        }
        const result = await response.json();
        if(result.value.sucess) {
            swal('Envio de mensagem', result.value.mensagem.pt, 'sucess');
        } else {
            //Exibir modal com erro 
        }
})
