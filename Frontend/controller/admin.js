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
    const urlBase = "https://58717807e0f449edb5fcb157313592f1.vfs.cloud9.us-east-1.amazonaws.com"
    
    fillTable()
    function fillTable() {
        async function fetchAsync() {
            const renderUsers = document.getElementById("result");
            let txt = "";
            const response = await fetch(`${urlBase}/users/audits`);
            const users = await response.json();
            //criação de uma tabela para demonstração dos resultados recebidos

            txt += "<table>";
            txt += "<tr id='diference'>";
            txt += "<th>ID</th>"
            txt += "<th>Nome</th>";
            txt += "<th>Email</th>";
            txt += "<th>Password</th>";
            txt += "<th id='diference2'></th>"
            txt += "</tr><tr>";
            //percorrer a variável users e por cada user cria a linha da tabela com os dados presentes
            for (const user of users) {
                txt += "<tr><td>" + user.id_login + "</td><td>" + user.name + "</td><td>" + user.email + "</td><td>" +
                    user.password + "</td><td>" + "<button id='btn'><img src= 'images/trash_20px.png'></img></button>" + "</td></tr>";
            }
            
            txt += "</tbody></table>";
            //envia a tabela construida para a view e mostra no object com ID result
            renderUsers.innerHTML = txt;
        }
        //chama a função fetchAsync()
        fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));
    }
    
    // function deleteAuditorId() {
    //     let btnEliminar = document.getElementById('btn');
    //     btnEliminar.addEventListener("click", function() {
    //         $()
    //         async function fetchAsync() {
    //             const response = await fetch(url, {
    //             method: 'DELETE'
    //         });
    //     //convert response to Json format
    //     const myJson = await response.json();
    //     fillTable();
    //     })
    // }
// }

  }; 