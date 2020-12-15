// let users = [{
//     "id": "342",
//     "name": "Gypsy",
//     "country": "Portugal"
// },
// {
//     "id": "342",
//     "name": "Gypsy",
//     "country": "Portugal"
// },
// {
//     "id": "342",
//     "name": "Gypsy",
//     "country": "Portugal"
// }
// ];

window.onload = function() {
    fillTable()


    function fillTable() {
        async function fetchAsync() {
            const renderUsers = document.getElementById("result");
            let txt = "";
            const response = await fetch('https://58717807e0f449edb5fcb157313592f1.vfs.cloud9.us-east-1.amazonaws.com/users');
            const users = await response.json();
            //criação de uma tabela para demonstração dos resultados recebidos

            txt += "<table>";
            txt += "<tr id='diference'>";
            txt += "<th style='width:60px'>ID</th>";
            txt += "<th style='width:160px'>Nome</th>";
            txt += "<th style='width:160px'>Nacionalidade</th>";
            txt += "</tr><tr>";
            //percorrer a variável users e por cada user cria a linha da tabela com os dados presentes
            for (const user of users) {
                txt += "<tr><td>" + user.id_admin + "</td><td>" + user.name + "</td><td>" +
                    user.nationality + "</td></tr>";
            }
            txt += "</tbody></table>";
            //envia a tabela construida para a view e mostra no object com ID result
            renderUsers.innerHTML = txt;
        }
        //chama a função fetchAsync()
        fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));
    }
}
