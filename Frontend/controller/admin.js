"use strict";
import * as fetch from "./functions/fetch.js";

window.onload = function() {
    
    async function fillTable() {
        const renderUsers = document.getElementById("result");
            let txt = "";
            const route = "users/audits"
            const users = await fetch.getData(route);
            console.log(users);
            //criação de uma tabela para demonstração dos resultados recebidos

            txt += "<table class='table-responsive col-md-10'>";
            txt += "<tr id='diference'>";
            txt += "<th class='text-center'>ID</th>"
            txt += "<th class='text-center'>Nome</th>";
            txt += "<th class='text-center'>Email</th>";
            txt += "<th class='text-center'>Password</th>";
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
    fillTable()
    
    
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