function fillTable() {
    
    function refreshUsers() {
        async function fetchAsync() {
            const renderUsers = document.getElementById("result");
            let txt = "";
            const response = await fetch('https://cc102f71a59f4b86b46f44cac1acf38f.vfs.cloud9.us-east-1.amazonaws.com/users');
            const users = await response.json();
            //criação de uma tabela para demonstração dos resultados recebidos
            txt += "<table class='table' style='padding:10px; width:70%; margin:0% 15% 0% 15%'>";
            txt += "<thead style='background-color:#607d8b; color:white '>";
            txt += "<tr><th>Name</th><th>Email</th><th>Reg. Date</th></tr></thead><tbody>";

            txt += "<table>";
            txt += "<tr id='diference'>";
            txt += "<th style='width:60px'>ID</th>";
            txt += "<th style='width:160px'>Nome</th>";
            txt += "</tr><tr>";
            //percorrer a variável users e por cada user cria a linha da tabela com os dados presentes
            for (const user of users) {
                txt += "<tr><td>" + user.id + "</td><td>" + user.name + "</td><td>" +
                    user.country + "</td></tr>";
            }
            txt += "</tbody></table>";
            //envia a tabela construida para a view e mostra no object com ID result
            renderUsers.innerHTML = txt;
        }
        //chama a função fetchAsync()
        fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));
    }

}